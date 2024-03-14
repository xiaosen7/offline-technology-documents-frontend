import axios from "axios";
import { createWriteStream, ensureFile, exists } from "fs-extra";
import path from "path";

function extractOutFilePathFromUrl(url: string) {
  return url.split("//")[1].split("?")[0];
}

export async function downloadThirdParty(_url: string, outDir: string) {
  let url = _url;
  if (url.startsWith("ttp")) {
    url = `h${url}`;
  }

  const outPath = path.resolve(outDir, extractOutFilePathFromUrl(url));
  if (await exists(outPath)) {
    console.log(`${outPath} exists skip download.`);
    return;
  }

  console.log(`${url} downloading...`);

  const response = await axios({
    method: "get",
    url,
    responseType: "stream", // 设置响应类型为流
    timeout: 10 * 1000,
  });

  await ensureFile(outPath);
  const writer = createWriteStream(outPath);
  response.data.pipe(writer);

  return new Promise<void>((resolve, reject) => {
    // 当所有数据都写入到文件中时，关闭写入流
    writer.on("finish", () => {
      console.log("done: ", outPath);
      resolve();
    });

    // 处理错误
    writer.on("error", (err) => {
      reject(err);
    });
  });
}
