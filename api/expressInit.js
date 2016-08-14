var express =  require('express');
var app = express();

app.get('/api', (req, res) => {
  res.send('hello world');
});

app.listen(3030);