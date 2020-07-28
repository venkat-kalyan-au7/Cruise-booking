import express from "express"
import morgan from "morgan"

import tourRoutes from "./routes/tour"
import userRoutes from "./routes/user"
import adminRoutes from "./routes/admin"

import AppError from "./errors/apperrors"
import globalErrorHandler from "./errors/errorhandler"

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(morgan('tiny'))

app.use(express.static(`${__dirname}/public`));


app.use('/api/admin',adminRoutes)
app.use('/api/tours',tourRoutes)
app.use('/api/users',userRoutes)

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
  
app.use(globalErrorHandler);



module.exports = app