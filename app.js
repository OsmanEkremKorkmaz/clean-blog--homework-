const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post');

const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/clean-blog-db', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.render('index', {
        posts
    });
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

app.post('/posts', async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});