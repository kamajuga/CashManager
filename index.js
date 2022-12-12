const express = require('express');
const app = express();

const client = require("./models/dbConfig")

app.listen(3406, () =>console.log("Server started: 3406"))

client.connect()

//Get routes for Articles
app.get('/articles', (req, res)=>{
    client.query(`Select * from article`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/articles/:bardecode', (req, res)=>{
    client.query(`Select * from article where barecode='${req.params.bardecode}'`, (err, result)=>{
        
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/articles', (req, res)=> {
    const article = req.body;
    let insertQuery = `insert into article(id_article, barecode, article_name, price) 
                       values(${article.id_article}, '${article.barecode}', '${article.article_name}', '${article.price}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

//Get routes for Users
app.get('/users', (req, res)=>{
    client.query(`Select * from usertable`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/users/:id', (req, res)=>{
    client.query(`Select * from usertable where id_user=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/users/lastid', (req, res)=>{
    client.query(`Select max(id_user) from usertable`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/users', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into usertable(id_user, firstname, lastname, email, user_password) 
                       values(${user.id_ser}, '${user.firstname}', '${user.lastname}', '${user.email}', '${user.user_passord}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})




