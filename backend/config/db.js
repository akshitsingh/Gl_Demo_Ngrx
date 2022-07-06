const mongoose = require('mongoose');

let DB_URI = "mongodb://localhost:27017/globallogic"

const db =mongoose.connect(DB_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    // userCreateIndex : true
})

const connectedDatabase = ()=>{
    db.then((data)=>{
        console.log(`mongodb connected with server: ${data.connection.host}`)
    }).catch(err=>{
        console.log("mongodb connection failed",err)
    }) 
}


module.exports = connectedDatabase;

