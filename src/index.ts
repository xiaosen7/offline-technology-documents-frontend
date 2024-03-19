import serve from "koa-static";
import Koa from "koa";
import getPort from "get-port";
import { readdirSync } from "fs"; // node 10 不支持 fs/promise api
import { basename, join } from "path";
import { statSync } from "fs";

const DEFAULT_ROOT_PORT = 4000;

async function main() {
  const docRoots = readdirSync(__dirname)
    .map((x) => join(__dirname, x))
    .filter((x) => statSync(x).isDirectory());
  const ports = await serveAndGetPorts(docRoots);
  await serveRoot(docRoots, ports);
}

async function serveAndGetPorts(dirs: string[]) {
  return await Promise.all(dirs.map((x, i) => serveDir(x, i)));
}

async function serveDir(dir: string, index: number) {
  const app = new Koa();
  app.use(serve(dir));

  const port = await getPort({ port: DEFAULT_ROOT_PORT + index + 1 });
  app.listen(port);
  return port;
}

async function serveRoot(dirs: string[], ports: number[]) {
  const app = new Koa();
  app.use((ctx) => {
    ctx.body = `
    <ul>

    ${dirs
      .map(
        (name, i) =>
          `<li>
          <a target="_blank" href="http://localhost:${ports[i]}">${basename(
            name
          )}</a>
        </li>`
      )
      .join("")}

    </ul>
    `;
  });

  const port = await getPort({ port: DEFAULT_ROOT_PORT });
  app.listen(port);

  console.log(`open http://localhost:${port}`);
}

main();
