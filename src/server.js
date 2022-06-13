import express from "express";

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`someone is going to: ${req.url}`);
  next();
};

const handlehome = (req, res) => {
  return res.send("i love middle");
};

app.use(gossipMiddleware);
app.get("/", handlehome);

const PORT = 4000;

const handleListening = () => console.log(`Server listenting on ${PORT}`);

app.listen(PORT, handleListening);
