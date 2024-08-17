import { query } from '../../../database/dbConnection.js'


export const getAllUser=(req,res)=>{
    query.execute("SELECT * FROM  products",(err,data)=>{
        if(err){
            res.json("Error")
        }else{
            res.json(data)
        }
    })
}

export const addUser=(req,res)=>{
    const {name,price,describtion}=req.body
    query.execute(`INSERT INTO products (name, price, describtion) VALUES ('${name}','${price}','${describtion}')`,(err,data)=>{
        if(err){
            res.json("Error")
        }else{
            res.json(data)
        }
    })
}