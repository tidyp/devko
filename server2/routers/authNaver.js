const express = require('express');
const request = require('request-promise');
const db = require('../db/access_token');
const router = express.Router();
require('dotenv').config();

const client_id = process.env.NAVER_CLIENT_ID;
const client_secret = process.env.NAVER_CLIENT_SECRET;
let state = "RANDOM_STATE";

const redirectURI = encodeURI("http://localhost:3001/api/authNaver/callback");
let api_url = "";

router.get('/naverlogin', function (req, res) {
  api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
   res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
   res.end("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
});


router.get('/callback', async (req, res) => {
  	// 토큰을 발급받으려면 query string으로 넘겨야 할 정보들이다.
    const code = req.query.code;
    const state = req.query.state;

  	// 로그인 API를 사용해 access token을 발급받는다.
  api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
  + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
  
  // const request = require('request');
  const options = {
      url: api_url,
      headers: {'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret}
  };
    const result = await request.get(options);
  	// string 형태로 값이 담기니 JSON 형식으로 parse를 해줘야 한다.
    const token = JSON.parse(result).access_token;
  
    // 발급 받은 access token을 사용해 회원 정보 조회 API를 사용한다.
    const info_options = {
        url: 'https://openapi.naver.com/v1/nid/me',
        headers: {'Authorization': 'Bearer ' + token}
    };

    const info_result = await request.get(info_options);
  	// string 형태로 값이 담기니 JSON 형식으로 parse를 해줘야 한다.
    const info_result_json = JSON.parse(info_result).response;
  
    console.log(info_result_json);
    res.send('회원정보 GET!')
  	// 이후 얻게 된 정보들로 원하는 코드를 작성하면 된다.
  	// Ex) 회원 가입 시키기, 내 app용 jwt 발급하기
})

// router.get('/callback', function (req, res) {
//   const code = req.query.code;
//   const state = req.query.state;
  
//   api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
//   + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
  
//   const request = require('request');
//   const options = {
//       url: api_url,
//       headers: {'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret}
//   };

  
//   request.get(options, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
//       res.end(body);
//     } else {
//       res.status(response.statusCode).end();
//       console.log('error = ' + response.statusCode);
//     }
//   });
// });

module.exports = router;
