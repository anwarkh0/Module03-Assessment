import express from "express"
import {connect,syncronise}  from "./config/db.js"
import dotenv from "dotenv"
import articleRoute from "./router/articleRoute.js"

dotenv.config()

const app=express()

app.use(express.json())

app.use("/article",articleRoute)

app.listen(process.env.PORT,()=>{
    setTimeout(connect,3000)
    setTimeout(syncronise,3000)
    console.log("connected to the server",process.env.PORT)
})