import express from 'express';
import morgan from 'morgan'
import ErrorHandler from './utils/ErrorHandler.js';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import router from './routes/route.js'
const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/", express.static("uploads"))

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    app.use(morgan('dev'))
}


//routing
app.use("/api/v2/", router);




// It's for errorHandler
app.use(ErrorHandler)
export default app;
