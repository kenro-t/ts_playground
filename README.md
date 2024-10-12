## Typescript Javascript 学習用リポジトリ


### 備忘録

#### npm dev runをdocker環境で実行してもホストのブラウザからアクセスできない

viteはデフォルトのままだとセキュリティの関係上ホストからのアクセスを許可していない。

なので、起動時は下記のようにコマンドの引数に`--host`を渡すか、vite.config.jsに追加の設定をする。

コマンド

`npm run dev -- --host`

※ ダブルダッシュ(--)はnpmに対して、それ以降の引数をスクリプトに渡すよう指示している。

設定例

vite.config.js
```
export default defineConfig({
  // プラグイン React, Dynamic Import
  plugins: [react(), dynamicImport()],
  server: {
    // 起動するときのポート番号指定
    port: 3001,
    // ↓これを追加する
    host: true,
  },
});
```

#### WSL2環境でviteのホットリロードが動かない

WSL2環境だとホスト環境でのファイル変更を動的に読み取ってくれないらしい。
なので、ポーリングの設定を有効化して対処する。（動作は重くなるらしい）


設定例

vite.config.js
```
export default defineConfig({
  // プラグイン React, Dynamic Import
  plugins: [react(), dynamicImport()],
  server: {
    // 起動するときのポート番号指定
    port: 3001, 
    // ↓これを追加する
    watch: {
      usePolling: true,
    },
  },
});
```

↓のような追々WSL環境の時だけ読み込めるような設定に調整する
```

watch: process.platform === 'linux' && process.env.WSL_DISTRO_NAME
    ? {
        usePolling: true,
      }
    : {},
```