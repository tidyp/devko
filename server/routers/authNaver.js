const express = require('express');
const router = express.Router();
require('dotenv').config();

const client_id = process.env.NAVER_CLIENT_ID;
const client_secret = process.env.NAVER_CLIENT_SECRET;
// var token = 'AAAAOny3pCLjMtAhvcKnBnC7WrTFaODJI05Q_k2sh17fl1ef2N9EWYWKnkLptUz2NjKTaVM8Oe3AaEKDD6-ZGV8IsxU';
// var header = "Bearer " + token; // Bearer 다음에 공백 추가
let state = "RANDOM_STATE";

const redirectURI = encodeURI("http://localhost:3000/api/authNaver/callback");
let api_url = "";

router.get('/naverlogin', function (req, res) {
  api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
   res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
   res.end("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
});

router.get('/callback', function (req, res) {
  const code = req.query.code;
  const state = req.query.state;
  
  api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
  + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
  
  const request = require('request');
  const options = {
      url: api_url,
      headers: {'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret}
  };

  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

router.get('/member', function (req, res) {
  var api_url = 'https://openapi.naver.com/v1/nid/me';
  var request = require('request');
  var options = {
      url: api_url,
      headers: {'Authorization': header}
   };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
    } else {
      console.log('error');
      if(response != null) {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
      }
    }
  });
});

module.exports = router;
