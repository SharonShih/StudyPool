const path = require("path");
const mysql = require("mysql");

module.exports = function(app, connection){	
    app.get('/User', function(req, res){	
        // res.send('Hello from Team-34');	
        connection.query('SELECT * FROM User', function(err, data){
            (err)? res.send(err).toString(): res.json({User:data});
        });
    });	
}

// app.post('/auth', function(req, res) {
//     console.log("1??");
//       let email = req.body.email;
//     let password = req.body.password;
//     console.log(email + password);
//       if (email && password) {
//           connection.query('SELECT * FROM Users WHERE User_email = ? AND User_password = ?', [email, password], function(error, results, fields) {
//               if (results.length > 0) {
//                   // req.session.loggedin = true;
//                   req.session.email = email;
//                   res.redirect('/home');
//               } else {
//                   res.send('Incorrect Email and/or Password!');
//               }			
//               res.end();
//           });
//       } else {
//           res.send('Please enter Email and Password!');
//           res.end();
//       }
//   });