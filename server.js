const express =require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Load routes
const users = require('./routes/api/users');
const profil = require('./routes/api/profil');
const posts = require('./routes/api/posts');

const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;
// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true }).then(()=> console.log('MongoDB connected')).catch((e) => console.log(e));

app.get('/', (req, res) => res.send('Hello react!'));

// User routes
app.use('/api/users', users);
app.use('/api/profil', profil);
app.use('/api/posts', posts);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port: ${port}`));