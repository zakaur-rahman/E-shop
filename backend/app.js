import express from 'express';
import morgan from 'morgan'
const app = express();

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    app.use(morgan('dev'))
}

export default app;
