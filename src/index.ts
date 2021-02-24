import "reflect-metadata";
import express from 'express';
import "./database/index"
const app = express();



app.listen(3030, () => {
    console.log("App Runing!");
})
