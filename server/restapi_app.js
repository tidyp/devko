const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const DiaryRouter = require('./routes/diary-route');
const OauthRouter = require('./routes/oauth-route');

app.use(cors());
app.use(express.json());
// app.use('/api/diary', DiaryRouter);
app.use('/api/oauth', OauthRouter);

app.listen(port, () => {
    console.log(`${port} 준비 완료`);
});
