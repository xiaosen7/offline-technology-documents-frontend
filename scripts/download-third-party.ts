import { uniq } from "lodash-es";
import { downloadThirdParty } from "./utils/download-third-party";
import path from "path";
import { exists } from "fs-extra";

main();

async function main() {
  const [dir, ...urls] = process.argv.slice(2);

  const outDir = path.resolve(dir, "./third-party");

  if (!(await exists(outDir)) || !urls.length || !dir) {
    console.log(
      "Usage: command [dir] [...urls], 确保在 dir 下存在 third-party 目录"
    );
    return;
  }

  await uniq(urls).reduce(
    (p, url) => p.then(() => downloadThirdParty(url, outDir)),
    Promise.resolve()
  );
}
