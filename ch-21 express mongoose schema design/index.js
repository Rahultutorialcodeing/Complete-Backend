const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://rahul:1234RAHULpal@cluster0.9ff5t6e.mongodb.net/demodbforexpress",
);

const express = require("express");
const { addUser, findUser, deleteUser, updateUser } = require("./modules/user");
const app = express();

app.listen(8000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/user", addUser);
app.get("/user", findUser);
app.put("/user/:id", updateUser);
app.delete("/user/:id", deleteUser);

