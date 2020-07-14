import express from "express"
import mongoose from "mongoose"
import morgan from "morgan"
import dotenv from "dotenv"

import tourRoutes from "./routes/tour"
import userRoutes from "./routes/user"

const app = express()

dotenv.config({ path: './config.env' });

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(morgan('tiny'))

app.use(express.static(`${__dirname}/public`));



app.use('/api/tour',tourRoutes)
app.use('/api/users',userRoutes)


const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})