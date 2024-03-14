import * as htmlparser2 from "htmlparser2";
import fsp from "fs/promises";
import path, { resolve } from "path";
import { createWriteStream, existsSync } from "fs";
import { ensureDir, ensureFile, exists } from "fs-extra";
import { uniq } from "lodash-es";
import axios from "axios";
import fg from "fast-glob";
import { downloadThirdParty } from "./utils/download-third-party";

main();

async function main() {
  const dir = process.argv.slice(2)[0];

  if (!dir) {
    console.log("Usage: command [static-dir]");
    return;
  }

  const htmlPaths = await fg("**/*.html", {
    cwd: dir,
    absolute: true,
  });

  await htmlPaths.reduce(
    (preTask, htmlPath) =>
      preTask.then(() => {
        console.log("process html file: ", htmlPath);
        return replaceAndHtmlAndDownload(
          htmlPath,
          resolve(dir, "third-party"),
          "/third-party/"
        );
      }),
    Promise.resolve()
  );
}

async function replaceAndHtmlAndDownload(
  htmlPath: string,
  outDir: string,
  baseURL: string
) {
  const html = await fsp.readFile(htmlPath, "utf-8");
  let outHtml = html;

  await ensureDir(outDir);
  const thirdPartyUrls = getThirdPartyCssAndJsUrls(html);

  const tasks: Array<() => Promise<void>> = [];
  for (const url of thirdPartyUrls) {
    outHtml = outHtml.replaceAll(url, url.replace(/https?\:\/\//, baseURL));
    tasks.push(() => downloadThirdParty(url, outDir));
  }

  await Promise.all(tasks.map((task) => task()));

  if (!(await exists(`${htmlPath}.backup`))) {
    await ensureFile(`${htmlPath}.backup`);
    await fsp.writeFile(`${htmlPath}.backup`, html);
  }

  await fsp.writeFile(htmlPath, outHtml);
}

function extractOutDirFromUrl(url: string) {
  return url.split("//")[1].split("?")[0];
}

function getThirdPartyCssAndJsUrls(htmlText: string) {
  const ret = [] as string[];

  const parser = new htmlparser2.Parser({
    onopentag(name, attributes) {
      /*
       * This fires when a new tag is opened.
       *
       * If you don't need an aggregated `attributes` object,
       * have a look at the `onopentagname` and `onattribute` events.
       */

      if (["script", "link"].includes(name)) {
        let { type } = attributes;
        const href = attributes.href || attributes.src;

        if (
          href &&
          (href.startsWith("http://") || href.startsWith("https://")) &&
          (type === "text/javascript" ||
            type === "text/css" ||
            /\.(css|js)\b/.test(href))
        ) {
          ret.push(href);
        }
      }
    },
  });
  parser.write(htmlText);
  parser.end();

  return uniq(ret);
}
