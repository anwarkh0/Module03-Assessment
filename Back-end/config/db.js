import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()
const sequelize = new Sequelize(
    process.env.DATA_NAME,
    process.env.DATA_USERNAME,
    process.env.DATA_PASSWORD,
    {
        host:process.env.DATA_HOST,
        dialect:"mysql"
    }
    
    )


export const connect = async ()=>{
    try{
        await sequelize.authenticate()
        console.log("connected to database")
    }catch(err){
        console.log(err)

    }
}

export const syncronise= async ()=>{
    try{
        await sequelize.sync().then((result)=>{
            console.log(result)
        })
    }catch(err){
        console.log(err)
    }
}