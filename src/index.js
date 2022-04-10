const express = require('express'); 
const app = express();
const router = require('./router');

const port = 3000 || process.env.port;

app.get('/', (req, res) => {
    res.send("hello world");
})
app.listen(port, () => {
    console.log(`listening app on port: ${port}`);
})

app.use('/', router);

