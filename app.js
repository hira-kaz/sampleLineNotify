const request = require('request');

const message = `これは
テスト
ですよ`;

sendRequest(message);

/**
 * LINE Notifyへ送信依頼
 * @param {Object} message - 送信メッセージ
 */
function sendRequest (message) {
  const options = {
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
      // TOKENを誤ってgitに上げてしまわないように、環境変数から取得するようにした
      'Authorization': `Bearer ${process.env.LINE_TOKEN}`
    },
    form: {
      message
    }
  };
  
  request.post(options, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
  
    console.log(body);
  });
}