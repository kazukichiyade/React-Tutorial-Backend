// バックエンドサーバの目的(JSON形式の生データをフロントエンドに提供)

// Expressアプリケーションを作成するために使用される関数
const express = require('express');
const app = express();

let notes = [
  {
    id: 6463,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
];

// // httpモジュールのcreateServerメソッド(webサーバ作成)
// const app = http.createServer((request, response) => {
//   // コード200で返される
//   response.writeHead(200, { 'Content-Type': 'application/json' });
//   response.end(JSON.stringify(notes));
// });

app.get('/', (req, res) => {
  // send(stringを含む応答を送信)
  res.send('<h1>Hello World!!!</h1>');
});

app.get('/notes', (req, res) => {
  // JSON形式の文字列として渡されたnotes配列が送信
  res.json(notes);
});

const PORT = 3001;
// appサーバをバインドしHTTPリクエスト要求をこなす
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
