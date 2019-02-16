const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var crypto = require('crypto');
var Post = require("../models/post");
var Posts = require("../models/posts")
var Postss = require("../models/postss")
var Postsss = require("../models/postsss")
var nodemailer = require('nodemailer');
var Block = require("../models/Block");
var Follow = require("../models/Follow");
var Later = require("../models/Later");
var Read = require("../models/Read");
var Noti = require("../models/Noti");
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/posts');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

app.post('/Users', (req, res) => {

  var db = req.db;
  var User_id = req.body.User_id;
  var User_name = req.body.User_name;
  var User_email = req.body.User_email;
  var User_password = req.body.User_password;
  var Login_type = req.body.Login_type;
  var Follow_id = req.body.Follow_id;
  var Block_id = req.body.Block_id;
  var Read_id = req.body.Read_id;
  var Later_id = req.body.Later_id;
  var token = crypto.randomBytes(16).toString('hex')
  var tokencheck = '0'

  var new_post = new Post({
    User_id: User_id,
    User_name: User_name,
    User_email: User_email,
    User_password: User_password,
    Login_type: Login_type,
    Follow_id: Follow_id,
    Block_id: Block_id,
    Read_id: Read_id,
    Later_id: Later_id,
    token: token,
    tokencheck : tokencheck
  })
    

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
    console.log('test1');
  })

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'punawatchara@gmail.com',
      pass: 'guslol123'
    }
  });

  var mailOptions = {
    from: 'punawatchara@gmail.com',
    to: req.body.User_email,
    subject: 'Register test',
    text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + 'localhost:8080' + '\/#\/Token\/' + new_post.token + '.\n'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})

app.get('/User/:email/:CheckID', (req, res, next) => {
  console.log(req.params.email);
  if(req.params.CheckID == 1)
  {var db = req.db;
  console.log("enter1");
  Post.findOne({"User_email" : req.params.email}, function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })}
  else if(req.params.CheckID == 3)
  {
    var db = req.db;
    console.log("enter3");
    Post.findOne({"User_email" : req.params.email}, function (error, post) {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'punawatchara@gmail.com',
          pass: 'guslol123'
        }
      });
    
      var mailOptions = {
        from: 'punawatchara@gmail.com',
        to: post.User_email,
        subject: 'Register test',
        text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + 'localhost:8080' + '\/#\/Token\/' + post.token + '.\n'
      };
    
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      if (error) { console.error(error); }
      res.send(post)
    }) 
  }
  else if(req.params.CheckID == 5)
  {
    var db = req.db;
    console.log("enter5");
    Post.findOne({"User_email" : req.params.email}, function (error, post) {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'punawatchara@gmail.com',
          pass: 'guslol123'
        }
      });
    
      var mailOptions = {
        from: 'punawatchara@gmail.com',
        to: post.User_email,
        subject: 'Register test',
        text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + 'localhost:8080' + '\/#\/ChangePassword\/' + post.token + '.\n'
      };
    
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      if (error) { console.error(error); }
      res.send(post)
    }) 
  }
  else 
  {next();}
})



app.get('/User/:Token/:CheckID', (req, res) => {
  if(req.params.CheckID == 4)
  {
    var db = req.db;
    console.log("enter4");
    console.log(req.params.Token);
    Post.findOne({"token" : req.params.Token}, function (error, post) {
    console.log(post.User_email);
    if (error) { console.error(error); }
    res.send(post)
  })
  }
})

app.get('/Users', (req, res ) => {  
  Post.findOne({},function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  }).sort({_id:-1})
})

app.put('/Users', (req, res) => {
  var db = req.db;
  if(req.body.Check==2)
  { console.log('second')
    console.log(req.body.Check);
  console.log(req.body.Token);
  Post.findOne({"token" : req.body.Token}, function (error, post) {
    if (error) { console.error(error); }
    console.log(req.body.Token);
    post.tokencheck = '1';
    console.log('tokenchange');
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })}
  if(req.body.Check==4)
  { console.log('four')
    console.log(req.body.Check);
  console.log(req.body.Token);
  Post.findOne({"token" : req.body.Token}, function (error, post) {
    if (error) { console.error(error); }
    console.log(req.body.Token);
    post.User_password = req.body.Password;
    console.log(post.User_password);
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })}
  if(req.body.Check==3)
  {
    console.log('three');
    console.log(req.body.User_password);
    Post.findOne({"User_id" : req.body.User_id}, function (error, post) {
      if (error) { console.error(error); }
      post.User_password = req.body.User_password;
      console.log(post.User_password);
      post.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
  }
})


app.post('/Ministries', (req, res) => {
  var db = req.db;
  var Ministry_id = req.body.Ministry_id;
  var Ministry_url = req.body.Ministry_url;
  var new_posts = new Posts({
    Ministry_id: Ministry_id,
    Ministry_url : Ministry_url
  })

  new_posts.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
    console.log('test2');
  })
})
app.get('/Ministry/:Ministry_id', (req, res ) => {
 
  var db = req.db;
  console.log("Ministry");
  Posts.findOne({"Ministry_id" : req.params.Ministry_id}, function (error, post) {
  console.log(post.Ministry_id);
  if (error) { console.error(error); }
  res.send(post)
})
})

app.post('/Departments', (req, res) => {
  var db = req.db;
  var Department_id = req.body.Department_id;
  var Department_url = req.body.Department_url;
  var new_postss = new Postss({
    Department_id: Department_id,
    Department_url : Department_url
  })

  new_postss.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
    console.log('test2');
  })
})

app.get('/Department/:Department_id', (req, res ) => {
 
    var db = req.db;
    console.log("Department");
    Postss.findOne({"Department_id" : req.params.Department_id}, function (error, post) {
    console.log(post.Department_url);
    if (error) { console.error(error); }
    res.send(post)
  })
})


app.get('/:Suggestion/:Name/:Email/:textarea', (req, res,next ) => {
  if(req.params.Suggestion == 1)
  {var db = req.db;
  console.log("Send Email");
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'punawatchara@gmail.com',
      pass: 'guslol123'
    }
  });

  var mailOptions = {
    from: 'punawatchara@gmail.com',
    to: 'punawatchara@gmail.com',
    subject: 'Suggestion Request',
    text: 'From : '+ req.params.Email + '\nName :'+ req.params.Name + '\nSuggestion :' +req.params.textarea
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
  else{
    next();
  }
})

app.post('/Blocks', (req, res) => {
  var db = req.db;
  var Block_id = req.body.Block_id
  var Catagory_sub_id = [];
  var new_Block = new Block({
    Block_id : Block_id,
    Catagory_sub_id : Catagory_sub_id
  })

  new_Block.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
    console.log('test2');
  })
})
app.post('/Notifications', (req, res) => {
  var db = req.db;
  var User_id = req.body.User_id
  var Article_id = [];
  var CountNoti = 0
  var new_Notification = new Noti({
    User_id : User_id,
    Article_id : Article_id,
    CountNoti : CountNoti
  })

  new_Notification.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
    console.log('testnoti');
  })
})

app.post('/Follows', (req, res) => {
  var db = req.db;
  var Follow_id = req.body.Follow_id
  var Catagory_sub_id = [];
  var new_Follow = new Follow({
    Follow_id : Follow_id,
    Catagory_sub_id : Catagory_sub_id
  })

  new_Follow.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
    console.log('test2');
  })
})

app.post('/Laters', (req, res) => {
  var db = req.db;
  var Later_id = req.body.Later_id
  var Article_id = [];
  var Video_id = [];
  var new_Laters = new Later({
    Later_id : Later_id,
    Article_id: Article_id,
    Video_id : Video_id
  })

  new_Laters.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
    console.log('test2');
  })
})

app.post('/Reads', (req, res) => {
  var db = req.db;
  var Read_id = req.body.Read_id
  var Article_id = [];
  var Video_id = [];
  var new_Reads = new Read({
    Read_id : Read_id,
    Article_id: Article_id,
    Video_id : Video_id
  })

  new_Reads.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
    console.log('test2');
  })
})

app.put('/Follows', (req, res) => {
  var db = req.db;
  console.log('Follownaa');
  console.log('hey'+req.body.Check);
  if(req.body.Check==1)
  {
  console.log('Followza');
  Follow.findOne({"Follow_id" : req.body.Follow_id}, function (error, post) {
    if (error) { console.error(error); }
    console.log(req.body.Catagory_sub_id);
    if(req.body.FollowandUnFollow==1)
    console.log('Followyung');
    { 
    post.Catagory_sub_id.push(req.body.Catagory_sub_id)}
    if(req.body.FollowandUnFollow==2)
    {
    post.Catagory_sub_id.remove(req.body.Catagory_sub_id)}

    console.log(post.Catagory_sub_id);
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
  }
  if(req.body.Check==3)
  {
    Follow.findOne({"Follow_id" : req.body.Follow_id}, function (error, post) {
      if (error) { console.error(error); }
      post.Catagory_sub_id = []
      post.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
  }
})

app.put('/Blocks', (req, res) => {
  var db = req.db;
  if(req.body.Check==1)
  {
  Block.findOne({"Block_id" : req.body.Block_id}, function (error, post) {
    if (error) { console.error(error); }
    console.log(req.body.Catagory_sub_id);
    if(req.body.FollowandUnFollow==1)
    { 
    post.Catagory_sub_id.push(req.body.Catagory_sub_id)}
    if(req.body.FollowandUnFollow==2)
    {
    post.Catagory_sub_id.remove(req.body.Catagory_sub_id)}
    console.log(post.Catagory_sub_id);
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
  }
  if(req.body.Check==3)
  {
    Block.findOne({"Block_id" : req.body.Block_id}, function (error, post) {
      if (error) { console.error(error); }
      post.Catagory_sub_id = []
      post.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
  }
})

app.put('/Reads', (req, res) => {
  var db = req.db;
  if(req.body.Check==1)
  {
    Read.findOne({"Read_id" : req.body.Read_id}, function (error, post) {
    if (error) { console.error(error); }
    console.log('vod'+req.body.Catagory_sub_id);
    if(req.body.FollowandUnFollow==1)
    {
      console.log('postnaja');
    post.Article_id.push(req.body.Catagory_sub_id)}
    if(req.body.FollowandUnFollow==2)
    {
      console.log('Deletenaha');
    post.Article_id.remove(req.body.Catagory_sub_id)}

    if(req.body.FollowandUnFollow==3)
    {
      console.log('postvod');
      console.log(req.body.Catagory_sub_id);
    post.Video_id.push(req.body.Catagory_sub_id)}

    if(req.body.FollowandUnFollow==4)
    {
      console.log('Deletevod');
    post.Video_id.remove(req.body.Catagory_sub_id)}

    console.log(post.Article_id);
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
  }
  if(req.body.Check==3)
  {
    Read.findOne({"Read_id" : req.body.Read_id}, function (error, post) {
      if (error) { console.error(error); }
      post.Article_id = []
      post.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
  }
  if(req.body.Check==4)
  {
    Read.findOne({"Read_id" : req.body.Read_id}, function (error, post) {
      if (error) { console.error(error); }
      post.Video_id = []
      post.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
  }
})

app.put('/Laters', (req, res) => {
  var db = req.db;
  if(req.body.Check==1)
  {
    Later.findOne({"Later_id" : req.body.Later_id}, function (error, post) {
    if (error) { console.error(error); }
    console.log(req.body.Catagory_sub_id);
    if(req.body.FollowandUnFollow==1)
    {
    post.Article_id.push(req.body.Catagory_sub_id)}
    if(req.body.FollowandUnFollow==2)
    {
    post.Article_id.remove(req.body.Catagory_sub_id)}
    if(req.body.FollowandUnFollow==3)
    {
    post.Video_id.push(req.body.Catagory_sub_id)}
    if(req.body.FollowandUnFollow==4)
    {
    post.Video_id.remove(req.body.Catagory_sub_id)}
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
  }
  if(req.body.Check==3)
  {
    Later.findOne({"Later_id" : req.body.Later_id}, function (error, post) {
      if (error) { console.error(error); }
      post.Article_id = []
      post.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
  }
  if(req.body.Check==4)
  {
    Later.findOne({"Later_id" : req.body.Later_id}, function (error, post) {
      if (error) { console.error(error); }
      post.Video_id = []
      post.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
  }
})

app.get('/Follow/:Follow_id/:CheckID', (req, res) => {
  if(req.params.CheckID == 2)
  {
    var db = req.db;
    console.log("Follow");
    Follow.findOne({"Follow_id" : req.params.Follow_id}, function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
  }
})

app.get('/Block/:Block_id/:CheckID', (req, res) => {
  if(req.params.CheckID == 2)
  {
    var db = req.db;
    console.log("Block");
    Block.findOne({"Block_id" : req.params.Block_id}, function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
  }
})

app.get('/Read/:Read_id/:CheckID', (req, res) => {
  if(req.params.CheckID == 2)
  {
    var db = req.db;
    console.log("Read");
    Read.findOne({"Read_id" : req.params.Read_id}, function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
  }
})

app.get('/Later/:Later_id/:CheckID', (req, res) => {
  if(req.params.CheckID == 2)
  {
    var db = req.db;
    console.log("Later");
    Later.findOne({"Later_id" : req.params.Later_id}, function (error, post) {
    if (error) { console.error(error); }
    console.log(post.Later_id);
    res.send(post)
  })
  }
})

app.get('/article/:Article_id', (req, res ) => {
 
  var db = req.db;
  console.log("article");
  console.log(req.params.Article_id);
  Postsss.findOne({"Article_id" : req.params.Article_id}, function (error, post) {
  if (error) { console.error(error); }
  res.send(post)
})
})

app.get('/articles', (req, res ) => {  
  Postsss.find({},function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  }).sort({Article_view:-1}).collation({locale: "en_US", numericOrdering: true}).limit(10)
})

app.post('/articles', (req, res) => {

  var db = req.db;
  var Article_id = req.body.Article_id;
  var Article_view = 0;

  var new_postsss = new Postsss({
    Article_id: Article_id,
    Article_view : Article_view
  })
  new_postsss.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
    console.log('test2');
  })
})

app.put('/articles', (req, res) => {
  var db = req.db;
  Postsss.findOne({"Article_id" : req.body.Article_id}, function (error, post) {
    if (error) { console.error(error); }
    var view = parseInt(post.Article_view) +1
    post.Article_view = view
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Post saved successfully!'
      })
    })
  })
})

app.put('/Notifications', (req, res) => {
  var db = req.db;
  Noti.findOne({"User_id" : req.body.User_id}, function (error, post) {
    if (error) { console.error(error); }
    if(req.body.CheckNoti == "0")
    {
    post.Article_id.push(req.body.Article_id)
    }
    else if(req.body.CheckNoti == "1")
    {
    post.CountNoti = req.body.CountNoti 
    }
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Post saved successfully!'
      })
    })
  })
})

app.get('/Notification/:User_id/:CheckID', (req, res) => {
  if(req.params.CheckID == 2)
  {
    var db = req.db;
    console.log("GetNoti");
    Noti.findOne({"User_id" : req.params.User_id}, function (error, post) {
    if (error) { console.error(error); }
    console.log(post.User_id);
    res.send(post)
  })
  }
})



app.listen(process.env.PORT || 8081)
