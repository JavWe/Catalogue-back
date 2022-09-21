const { Mongoose } = require('mongoose');

const mongoose = requires(mongoose);
const dbUrl = require('./properties').DB;


module.exports = ()=>{
    mongoose.connect(dbUrl, {userNewUrlParser: true})
        .then(()=> console.log(`Mongo connected on ${dbUrl}`))
        .catch(err => console.log(`Connection has error ${err}`))

        process.on('SIGINT', ()=>{
            Mongoose.connection.close(()=>{
                console.log(`Mongo is dissconnect`);
                process.exit(0)
            })
        })
}