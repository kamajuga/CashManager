const {Client} =require("pg")

const client = new Client({
    host : "localhost",
    user : "postgres",
    port : 5432,
    password : "julius",
    database : "cashmanager"
})

module.exports = client