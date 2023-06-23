const express = require("express");
const authRouter = require("./routes/auth")
const { connection } = require("./storage.js/db");
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter)



app.listen(process.env.port ,async() => {
   try{
        await connection;
        console.log("connect to db sucess")
    }
    catch(e){
        console.log("connection to db failed")
        console.log(e.message)
    }
    console.log(`listen on ports`);
})