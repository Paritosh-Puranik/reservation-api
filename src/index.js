import express from 'express';
import cors from 'cors';
import { betriebRoutes } from "./routes/index.js";
import bodyParser from 'body-parser';
import helmet from "helmet";
import cookies from "cookie-parser";
import sqlite3 from "sqlite3";
import sequelize from './config/connection.js';
import dotenv from 'dotenv';
import path from 'path';

//Function to start the server
const StartServer = async () => {

    const app = express();

    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();

    dotenv.config();
    const PORT = process.env.PORT || 3000;

    app.use(express.json());

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    // Use Helmet!
    app.use(helmet());

    // Use Cookie
    app.use(cookies());

    
    createDbConnection();
    
    // Use Cors
    const corsOptions = {
        credentials: true,
        origin: [process.env.ORIGIN_URL],
        methods: ["GET", "POST", "PATCH"],
    };
    app.use(cors(corsOptions));
    

    app.use("/", betriebRoutes)

    app.get("/health-check", (req, res) => {
        res.json({ title:"Gastro.Digital", msg: "Betriebs service working!!" });
    })

    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(`Server stopped due to error`, err);
        process.exit();
    })
    .on('close', () => {
        console.log(`Server stopped`);
        channel.close();
    })
}

function createDbConnection() {
    // const sqlite = sqlite3.verbose();
    const filepath = "../sqlite.db";
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
    });
    console.log("Connection with SQLite has been established");
    return db;
}

StartServer();