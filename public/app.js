const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')
const fetch = require('axios')

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname +'/dist/index.html'));
})

app.listen(8000)