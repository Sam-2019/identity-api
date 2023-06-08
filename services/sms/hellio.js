
var request = require("request");

var options = { method: 'POST',
  url: 'https://api.helliomessaging.com/v1/sms',
  qs:
   {
     senderId: 'HellioSMS',
     msisdn: '233265515154',
     message: 'Nodejs Sending SMS',
     username: 'Your-Hellio-Username',
     password: 'Your-Hellio-Password' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});