require('dotenv').config(); // .env 환경변수 관리 패키지

const client_id = process.env.NAVER_CLIENT_ID;
const client_secret = process.env.NAVER_CLIENT_SECRET;
const state = process.env.NAVER_STATE;
const redirectURI = process.env.NAVER_REDIRECTURI;

const naverLogin = async (req, res, next) => {
    const api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + 
    client_id + 
    '&redirect_uri=' + 
    redirectURI + 
    '&state=' + 
    state;
   res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
   res.end("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
};

const naverLoginCallback = async (req, res, next) => {
    const code = req.query.code;
    const state = req.query.state;
    
    const api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=' + 
    client_id + 
    '&client_secret=' + 
    client_secret + 
    '&redirect_uri=' + 
    redirectURI + 
      '&code=' + code + '&state=' + state;

    const response = await fetch(`${api_url}`, {
         method: 'GET',
         headers: {'X-Naver-Client-Id': process.env.Naver_Client_Secret, 'X-Naver-Client-Secret': process.env.Naver_Client_Secret}
    });

    const responseData = await response.json();

    res.json(responseData)
}

module.exports = {
    naverLogin,
    naverLoginCallback
};