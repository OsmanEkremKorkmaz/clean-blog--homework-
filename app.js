const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
}
);
app.get('/about', (req, res) => {
    res.render('about');
}
);
app.get('/add', (req, res) => {
    res.render('add_post');
}
);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});