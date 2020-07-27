import express from "express"
import mongoose from "mongoose"
import morgan from "morgan"
import dotenv from "dotenv"
import config from './config/database'


import tourRoutes from "./routes/tour"
import userRoutes from "./routes/user"
import adminRoutes from "./routes/admin"

const app = express()

dotenv.config({ path: './config.env' });

// Connect with the database 
mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:true
})
.then(() => {
    console.log('Database connected successfully ');
}).catch(err => {
    console.log(err);
});

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(morgan('tiny'))

app.use(express.static(`${__dirname}/public`));


app.use('/api/admin',adminRoutes)
app.use('/api/tours',tourRoutes)
app.use('/api/users',userRoutes)


const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})