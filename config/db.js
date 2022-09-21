

const mongoose = require('mongoose');
const dbUrl = require('./properties').DB;


module.exports = ()=>{
    mongoose.connect(dbUrl)
        .then(()=> console.log(`Mongo connected on ${dbUrl}`))
        .catch(err => console.log(`Connection has error ${err}`))

        process.on('SIGINT', ()=>{
            Mongoose.connection.close(()=>{
                console.log(`Mongo is dissconnect`);
                process.exit(0)
            })
        })
}