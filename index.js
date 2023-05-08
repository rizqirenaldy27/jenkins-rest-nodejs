const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('OK!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
