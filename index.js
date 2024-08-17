import express from 'express'
const app=express()
import productRouter from './src/modules/products/product.router.js'
app.use(express.json())

app.use(productRouter)


app.listen(2000,()=>{
    console.log('running')
})