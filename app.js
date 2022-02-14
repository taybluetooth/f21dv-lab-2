const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
});

app.listen(port, function() {
  console.log(`App listening on port ${port}!`)
});