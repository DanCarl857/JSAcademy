const express = require('express');
const app = express();
const path = require('path');
const expressHandlebars = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', expressHandlebars({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home/login');
});

app.get('/signin', (req, res) => {
    res.render('home/signin');
});

app.listen(4500, () => {

    console.log(`listening on port 4500`);

}); 