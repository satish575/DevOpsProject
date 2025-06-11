const {Pool} =require("pg");

const pool=new Pool({
    database: process.env.DATABASE_NAME,
    host: process.env.HOST_NAME,
    port: process.env.PORT,
    user: process.env.USERNAME,
    password: process.env.PASSWORD
})

module.exports = pool;