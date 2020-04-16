import express from "express";
import http from "http";
import bcrypt from "bcryptjs";

const app = express();

app.get("*", (req, res) => {
  let s = bcrypt.hashSync(req.url, //use bcrypt to load the cpu
    15); //adjust this value to change complexity
  res.json({ msg: s })
});

http.createServer(app).listen(3000, () => console.log("york-node-bench started"));

