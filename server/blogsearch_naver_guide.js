var express = require('express');
var app = express();

var client_id = 'vlUKteyrG18vRROD6kqr';
var client_secret = 'J1u6ON22Wn';

var state = "RAMDOM_STATE";
var redirectURI = encodeURI("https://127.0.0.1:3000/auto/naver/callback");
var api_url = "";


app.get('/naverlogin', function (req, res) {
  api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
   res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
   res.end("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
 });

 app.get('/callback', async (req, res) => {
   code = req.query.code;
   state = req.query.state;
   
    api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
     + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
     var request = require('request-promise');
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
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

    //  console.log(info_result_json)
 
  });

 app.listen(3000, function () {
   console.log('http://127.0.0.1:3000/naverlogin app listening on port 3000!');
 });
