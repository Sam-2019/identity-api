var request = require("request");

var options = {
 method: "POST",
 url: "https://api.msmpusher.net/v1/send",
 qs: {
  privatekey: "<PRIVATEKEY>",
  publickey: "<PUBLICKEY>",
  sender: "MSMPUSHER",
  numbers: "7700900000",
  message: "test_sms",
 },
};

request(options, function (error, response, body) {
 if (error) throw new Error(error);

 console.log(body);
});
