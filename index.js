
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:1234',
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors((corsOptions)));

app.use(require('./routes/router'));

app.use(express.static('public'));
app.listen(port, () => console.log(`app listening at http://localhost:${port}`));
