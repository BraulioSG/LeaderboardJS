const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
    console.log('time:', Date.now());
    next();
})


router.get('/user', (req, res) => {
    res.send("user page");
})

module.exports = router;

