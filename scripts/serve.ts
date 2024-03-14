import express from "express";
import path from "path";
import serveStatic from "serve-static";
import getPort from "get-port";

async function main() {
  const app = express();

  const [root, port = await getPort()] = process.argv.slice(2);

  if (!root) {
    console.log("Usage: command [static-dir] [port?]");
    process.exit(0);
  }

  const origin = `http://localhost:${port}`;

  app.use((req, res, next) => {
    if (!req.url.startsWith("/") && !req.url.startsWith(origin)) {
      console.log("third-party: ", req.url);
    }

    next();
  });

  app.use(
    serveStatic(root, {
      cacheControl: false,
    })
  );

  app.listen(port, () => {
    console.log("origin: ", origin);
  });
}

main();
