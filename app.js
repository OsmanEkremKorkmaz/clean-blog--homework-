const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');
const path = require('path');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageControllers');


const app = express();

mongoose
    .connect('mongodb://0.0.0.0:27017/clean-blog-db', { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.set('view engine', 'ejs');

app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.addPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPostPage);
app.get('/post/edit/:id', pageController.getEditPage);



const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});