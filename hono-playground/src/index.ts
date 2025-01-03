import { serve } from "@hono/node-server";

import routes from "./routes/routes.ts"; // TODO: インポートする際の拡張子設定

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

// サーバー初期起動設定
async function bootstrap() {
  // TODO: ここでサーバーの設定を行う

  // TODO: 依存性の注入を行う


  serve({
    fetch: routes.fetch,
    port,
  });
}

// サーバーの起動
bootstrap().catch(console.error);
