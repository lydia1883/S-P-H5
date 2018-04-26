const express = require('express');

const app = express();

const files = express.static(__dirname);

app.use('/', files);

app.listen('3010', () => {
console.log('is listening 3010!')
});