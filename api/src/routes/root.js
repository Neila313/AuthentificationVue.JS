
const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

const con = require('../database/db')

router.use(
	express.urlencoded({
		extended: true
	})
);
router.use(express.json());



con.connect(function(err){
    if(err) throw err;
    router.post("/sign-up", function(req, res){
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {

            try {
           
                let dataUser = `INSERT INTO users (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${hash}')`;
                con.query(dataUser, () => {
                    console.log('dataUser ajoutée !')
                })
            } catch (error) {
                console.log(error) }
                
        });
      
    })

    router.post("/sign-in", function(req,res){
        try {
            con.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function(err, result){
                if(err) throw err;
                bcrypt.compare(req.body.password, result[0].password, function(err, resulta) {
                    console.log(resulta)
                  if(resulta){
                            res.send("You are authenticated")
                    }
                    else{
                        res.send("Sorry, we don't know this user")
                    }
               
                });
                
            })

        } catch (error) {
            console.log(error)
            
        }
    })

  

    console.log('connected')
})

module.exports = router