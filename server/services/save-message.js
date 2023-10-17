var axios = require("axios");

function saveMessage(message, username, room, createdTime) {
  const dbUrl = process.env.HARPERDB_URL;
  const dbPw = process.env.HARPERDB_PW;

  if (!dbUrl || !dbPw) return null;

  console.log("Inside save message", message, username, room);

  var data = JSON.stringify({
    operation: "insert",
    schema: "chitchat",
    table: "messages",
    records: [
      {
        message,
        username,
        room,
      },
    ],
  });

  var config = {
    method: "post",
    url: dbUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: dbPw,
    },
    data: data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        resolve(JSON.stringify(response.data));
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

module.exports = saveMessage;
