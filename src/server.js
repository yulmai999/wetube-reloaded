import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev");

app.use(logger);

app.use("/", globalRouter);
app.use("/viddeos", videoRouter);
app.use("/users", userRouter);

const PORT = 4000;

const handleListening = () => console.log(`Server listenting on ${PORT}`);

app.listen(PORT, handleListening);
