import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import router from "./routes/auth.routes.js";
import messageRouter from "./routes/message.route.js";
import userRouter from "./routes/user.routes.js";

import connectToMongoDB from "./database/connectToMongoDb.js";
import { app, server } from "./socket/socket.js";


dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json()); //setting up middleware in the Express application to parse incoming requests with JSON payloads(req.body).
app.use(cookieParser());

app.use("/api/auth", router);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

connectToMongoDB();

server.listen(PORT, () => console.log(`Server running on port:${PORT}`));
