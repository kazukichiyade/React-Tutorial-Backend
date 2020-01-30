// バックエンドサーバの目的(JSON形式の生データをフロントエンドに提供)

// Nodeの組み込みWebサーバモジュールをインポート
const http = require('http');

// httpモジュールのcreateServerメソッド(webサーバ作成)
const app = http.createServer((req, res) => {
  // コード200で返される
  res.writeHead(200, { 'Content-Type': 'text/plane' });
  res.end('Hello World');
});

const port = 3001;
// appサーバをバインドしHTTPリクエスト要求をこなす
app.listen(port);
console.log(`Server running on port ${port}`);
