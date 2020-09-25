
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const con = require('../database/db');
var cors = require('cors');
const jwt = require('jsonwebtoken');
const config = require('./config');



router.use(cors())


// router.use(
// 	express.urlencoded({
// 		extended: true
// 	})
// );
// router.use(express.json());



con.connect(function(err){
    if(err) throw err;
    router.post("/sign-up", function(req, res){
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {

            try {
           
                let dataUser = `INSERT INTO users (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${hash}')`;
                con.query(dataUser, () => {
                    console.log('dataUser ajoutée !')
                    
                con.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function(err, result){
                    if(err) throw err;
                    let token = jwt.sign({ id: result[0].id }, config.secret, {expiresIn: 86400}) // expires in 24 hours
                    console.log(token);
                    res.status(200).send({ auth: true, token: token, user: result[0] })
                

                })
                })
            } catch (error) {
                console.log(error)
                res.send('error server')
             }
                
        });
      
    })

    router.post("/sign-in", function(req,res){
        try {
            console.log(req.body)
            con.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function(err, result){
                if(err) throw err;
                console.log(result[0])
                bcrypt.compare(req.body.password, result[0].password, function(err, resulta) {
                    console.log(resulta)
                  if(resulta){
                            let token = jwt.sign({ id: result[0].id }, config.secret, {expiresIn: 86400}) // expires in 24 hours
                             console.log(token);
                             res.status(200).send({ auth: true, token: token, user: result[0] })
                            }
                    else{
                        res.status(200).send("Sorry, we don't know this user")
                    }
               
                });
                
            })

        } catch (error) {
            console.log(error)
            res.status(400)
            
        }
    })

  

    console.log('connected')
})

module.exports = router