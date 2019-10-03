//app/routes.js
module.exports = function(app, passport,configDB) {
var comment     = require('./models/comment')
var message = comment.find({})
   // =====================================
   // HOME PAGE (with login links) ========
   // =====================================
   app.get('/', function(req, res) {
       res.render('home.ejs', {
           movies : [
               {title : "Namma veeddu pillai", trailer : "https://www.youtube.com/watch?v=59_Fl_e46IU", image : "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/NammaVeetuPillai.jpg?itok=2RKZrpCA"},
               {title : "Kaappan", trailer : "https://www.youtube.com/watch?v=j_eduSGN3RQ", image : "images/kappan.jpg"}
           ]
       }); // load the index.ejs file
   });
   app.get('/contact1', function(req, res, next) {
       res.render('contact.ejs'); // load the index.ejs file
   });

   app.get('/home', function(req, res) {
         res.render('home.ejs', {
             movies : [
                 {title : "Namma veeddu pillai", trailer : "https://www.youtube.com/watch?v=59_Fl_e46IU", image : "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/NammaVeetuPillai.jpg?itok=2RKZrpCA"},
                 {title : "Kaappan", trailer : "https://www.youtube.com/watch?v=j_eduSGN3RQ", image : "images/kappan.jpg"}
             ]
         }); // load the index.ejs file
     })
 app.get('/index', function(req, res) {
       res.render('index.ejs'); // load the index.ejs file
   })
app.get('/signup', function(req, res) {
       res.render('signup.ejs'); // load the index.ejs file
   })
app.get('/login', function(req, res) {
       res.render('login.ejs'); // load the index.ejs file
   })
app.get('/profile', function(req, res) {
       res.render('profile.ejs'); // load the index.ejs file
   })
app.get('/about', function(req, res) {
       res.render('about.ejs'); // load the index.ejs file
   })
app.get('/contact', function(req, res) {
       res.render('contact.ejs'); // load the index.ejs file
   })
   app.get('/booking3', function(req, res) {
// render the page and pass in any flash data if it exists
       res.render('booking3.ejs', { message: req.flash('loginMessage') });
   });
   app.get('/booking1', function(req, res) {
// render the page and pass in any flash data if it exists
       res.render('booking1.ejs', { message: req.flash('loginMessage') });
   });
   app.get('/booking2', function(req, res) {
// render the page and pass in any flash data if it exists
       res.render('booking2.ejs', { message: req.flash('loginMessage') });
   });
   app.get('/posting', function(req, res) {

       // render the page and pass in any flash data if it exists
       res.render('posting.ejs', { message: req.flash('loginMessage') });
   });





   const Userrr = require("./models/book.js");
    app.post("/booking1", function(req, res) {
           /*req.body {
               username: "mongod",
               password: "pass123",
               email: "none@none.com"
              }
    Create a new user using req.body (this data came from the client)*/
    let userrr = new Userrr(req.body);
    Userrr.create(userrr)
      .then(function(dbUserrr) {
        // If saved successfully, send the the new User document to the client
        res.render('index.ejs', {user : dbUserrr});
      })
      .catch(function(err) {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });


  const Userr = require("./models/post.js");
   app.post("/posting", function(req, res) {
          /*req.body {
              username: "mongod",
              password: "pass123",
              email: "none@none.com"
             }
   Create a new user using req.body (this data came from the client)*/
   let userr = new Userr(req.body);
   Userr.create(userr)
     .then(function(dbUserr) {
       // If saved successfully, send the the new User document to the client
       res.json(dbUserr);
     })
     .catch(function(err) {
       // If an error occurs, send the error to the client
       res.json(err);
     });
 });



   // =====================================
   // LOGIN ===============================
   // =====================================
   // show the login form
   app.get('/login', function(req, res) {

       // render the page and pass in any flash data if it exists
       res.render('login.ejs', { message: req.flash('loginMessage') });
   });

   // process the login form
   app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

   //app.post('/login', do all our passport stuff here);

   // =====================================
   // SIGNUP ==============================
   // =====================================
   // show the signup form
   app.get('/signup', function(req, res) {

       // render the page and pass in any flash data if it exists
       res.render('signup.ejs', { message: req.flash('signupMessage') });
   });


   // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
   // app.post('/signup', do all our passport stuff here);

   // =====================================
   // PROFILE SECTION =====================
   // =====================================
   // we will want this protected so you have to be logged in to visit
   // we will use route middleware to verify this (the isLoggedIn function)
   app.get('/profile', isLoggedIn, function(req, res) {
       res.render('profile.ejs', {
           user : req.user // get the user out of session and pass to template
       });
   });

   // =====================================
   // LOGOUT ==============================
   // =====================================
   app.get('/logout', function(req, res) {
       req.logout();
       res.redirect('/');
   });


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

   // if user is authenticated in the session, carry on
   if (req.isAuthenticated())
       return next();

   // if they aren't redirect them to the home page
   res.redirect('/');
}





app.post('/comment', function(req, res,next) {

var newcomment         = new comment();
newcomment.name    = req.body.name;
newcomment.email   = req.body.email;
newcomment.subject    = req.body.subject;
newcomment.message    = req.body.message;


newcomment.save(function(err,newcomment){
if(err){

  res.redirect('contact.ejs');
    console.log(err);
}else{

  message.exec(function(err,data){
    if (err) throw err;


    res.render('contact.ejs',{sucess:"Your message has been recieved successfully", records2:data}); // load the index.ejs file

  });
  //res.redirect('/contact',{sucess:"sucessssssss"});
    //console.log("Document Saved");
}
});
});

};
