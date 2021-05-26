// 'npm run watch' 
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const port = 3001;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
