// バックエンドサーバの目的(JSON形式の生データをフロントエンドに提供)

// Expressアプリケーションを作成するために使用される関数
const express = require('express');
const app = express();
// データに簡単にアクセスする
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let notes = [
  {
    id: 1,
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

// Hello Worldの文字を出力
app.get('/', (request, response) => {
  // send(stringを含む応答を送信)
  response.send('<h1>Hello World!!!</h1>');
});

const generateId = () => {
  // 全てのnotesの新しい配列として保存して、最大のにIDに+1して作成
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;
  return maxId + 1;
};

// 新しいノートを送信
app.post('/notes', (request, response) => {
  // bodyParser使用によりbodyにアクセスできる
  const note = request.body;
  // コンテンツが無い場合
  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    });
  }
  const note = {
    content: body.content,
    // デフォルトfalse指定
    important: body.important || false,
    date: new Date(),
    id: generateId()
  };
  notes = notes.concat(note);
  response.json(note);
});

// notesをjson形式で出力
app.get('/notes', (request, response) => {
  response.json(notes);
});

// 指定したIDで出力
app.get('/notes/:id', (request, response) => {
  // ID要求(request)
  const id = Number(request.params.id);
  // 要求したIDの内容を返す(response)
  const note = notes.find(note => note.id === id);
  // JSON形式として渡されたnoteを返す
  if (note) {
    response.json(note);
  } else {
    // ステータスを設定するためにstatusメソッドを使用
    // データを送信せずにリクエストに応答するためのendメソッド
    response.status(404).end();
  }
});

// 指定したIDのnotesを削除
app.delete('/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter(note => note.id !== id);

  response.status(204).end();
});

const PORT = 3001;
// appサーバをバインドしHTTPリクエスト要求をこなす
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
