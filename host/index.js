/* eslint-disable */
const express = require('express');
const webpack = require('webpack');
const app = express();
const path = require('path')
app.listen(3333, function () {
  console.log('Example app listening on port 3333!\n');
});

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', function (req, res) {
  res.sendfile(path.resolve(__dirname, '../dist/index.html'));
})