const http = require("http");

const { MongoClient } = require("mongodb");
const db = MongoClient.connect(
  "mongodb+srv://rahul:1234RAHULpal@cluster0.9ff5t6e.mongodb.net/",
);
db.then((resolve) => {
  console.log("Db connected");
}).catch((err) => {
  console.log(err);
  console.log("db not connected");
  process.exit(0);
});

const quaryString = require("querystring");

const server = http.createServer((req, res) => {
  // 1) examples
  //   if (2 === 2) {
  //     res.statusCode = 200;
  //     res.end("Success");
  //   } else {
  //     res.statusCode = 500;
  //     res.end("Failed");
  //   }
  // 2) examples
  // how to get data quary prameter data
  //   console.log(req.url);
  //   const sliceData = req.url.slice(2);
  //   const x = quaryString.parse(sliceData);
  //   res.statusCode=200
  //   res.end(`${x.name} ${x.lastName}`);

  // 3) static code login
  const sliceData = req.url.slice(2);
  const { userName, password } = quaryString.parse(sliceData);

  //   if (userName === "rahul") {
  //     if (password === "123") {
  //       res.statusCode = 200;
  //       res.end("Now you are login");
  //     } else {
  //       res.statusCode = 401;
  //       res.end("invalid pasword");
  //     }
  //   } else {
  //     res.statusCode = 404;
  //     res.end("User don't exits, Signup first");
  //   }

  /// exprience developer
  // jo code fail hone wala hai usko phle likho
  //   if (userName !== "rahul") {
  //     res.statusCode = 404;
  //     return res.end("User don't exits, Signup first");
  //     // return eske niche code nhi chaleg
  //   }

  //   if (password !== "123") {
  //     res.statusCode = 401;
  //     return res.end("invalid pasword");
  //   }

  //   res.statusCode = 200;
  //   res.end("Now you are login");

  // 3)
  // dublicate user
  // pasword 8 digit se bra hona chhiaye
  // password ka value  1234 hona chhiaye

  const extingUsername = "chotu";

  if (userName !== extingUsername) {
    res.statusCode = 409;

    return res.end("dublicated user");
  }

  if (password.length >= 8) {
    res.statusCode = 401;
    return res.end("length must be 8 or greated than 8");
  }

  if (password !== "123") {
    res.statusCode = 401;
    return res.end("passsword must be 123");
  }

  res.statusCode = 200;
  res.end("Now you are login");
});

server.listen(8000);
