let express = require('express');
let app = express();

app.use(express.static('./', {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['html', 'js', 'css'],
    index: ['index.html'], // or `false`
    maxAge: '1d',
    redirect: false,
    setHeaders: function(res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
}));

app.get('/', function(req, res) {
    res.cookie('token', 'mike:123456')
        .sendFile('views/index.html', {
            root: __dirname
        })
});

app.get('/data.json', function(req, res) {
    res.type('json').send({
        name: "Freewind"
    })
});

app.listen(3000, function() {
    console.log('server is listening on 3000');
})