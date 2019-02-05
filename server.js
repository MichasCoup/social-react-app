const express =require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');


// Load routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;
// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true }).then(()=> console.log('MongoDB connected')).catch((e) => console.log(e));

// Passport middleware
app.use(passport.initialize());
// Passport Config
require('./config/passport')(passport);

// User routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port: ${port}`));