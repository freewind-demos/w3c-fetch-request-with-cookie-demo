let express = require('express');
let app = express();

app.use(express.static('./', {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['html', 'js', 'css'],
  index: ['index.html'], // or `false`
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}));

app.get('/hello', function(req, res) {
  res.send('Hello world!');
});

app.listen(3000, function() {
  console.log('server is listening on 3000');
})