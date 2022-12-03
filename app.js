//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const Post = require('./models/Post');
const User = require('./models/User');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(session({
  secret: "Share your thoughts",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb+srv://admin-avinash:Test123@cluster0.qqnix.mongodb.net/blogDB", {useNewUrlParser: true});
mongoose.set("useCreateIndex", true);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.get("/", function(req, res){
  if (req.isAuthenticated()){
    res.redirect("/main");
  } else {
    res.render("home");
  }

});

app.get("/main",function(req,res){
  if (req.isAuthenticated()){
    Post.find({}, function(err, posts){
      res.render("main", {
        posts: posts
        });
    });
  } else {
    res.redirect("/login");
  }
})

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.get("/compose", function(req, res){
  if (req.isAuthenticated()){
    res.render("compose");
  } else {
    res.redirect("/");
  }
});

app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });
  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function(req, res){
const requestedPostId = req.params.postId;
 if (req.isAuthenticated()){
  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("post", {
      title: post.title,
      content: post.content
    });
  });
 } else {
 res.redirect("/");
}
});

app.get("/about", function(req, res){
  if (req.isAuthenticated()){
    res.render("about");
  } else {
    res.redirect("/");
  }
});

app.get("/contact", function(req, res){
  if (req.isAuthenticated()){
    res.render("contact");
  } else {
    res.redirect("/");
  }

});

app.post("/register", function(req, res){
  User.register({username: req.body.username}, req.body.password, function(err, user){
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/main");
      });
    }
  });
});

app.post("/login", function(req, res){
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, function(err){
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/main");
      });
    }
  });

});

app.get("/logout", (req, res) => {
  req.logout(req.user, err => {
    if(err) return next(err);
    res.redirect("/");
  });
});


let port = process.env.PORT;
if(port==null||port=="")
{
  port=3000;
}

app.listen(port, function() {
  console.log("Server has started successfully");
});
