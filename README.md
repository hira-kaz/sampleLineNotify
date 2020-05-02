# sampleLineNotify
LINE Notifyを試すサンプルソース。
node.jsで実装。

# ドキュメント
詳細はQuiita参照。
https://qiita.com/hira_kaz/items/e0d09a7cdb66f3049e43

# 実行
TOKENは誤って公開しないように環境変数から読み込むようにしているので、実行時はLINE_TOKENを設定するように。

1. モジュールインストール
```
$ npm install
```
1. 実行
```
$ LINE_TOKEN=<取得したTOKEN> node app.js
```