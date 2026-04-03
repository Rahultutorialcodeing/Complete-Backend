// 1) ex
// const http = require("http"); //server banane ke liye http use krte hai
// const server = http.createServer((req, res) => {
//   // createServer ye promise return krta hai jisko resolve krne ke liye hme callback ki need hota hai
//   //   callback function me fuction ko likhana callback khlata hai

//   console.log("Hello"); // ye shirf request liye or satatefull protocol me chal rha hai kyu ki loder ghum rha hai hm kuch respose nhi de rha hai stateless protocol ko ke liye hme req , res ka need hogi

//   res.statusCode = 200;
//   res.end("Helo ! I am your server"); // end server ko disconnect krta hai
//   // http://localhost:8000?name=rahul&lastName=pal&roll=1
//   //name = quary kahenge; rahul = parameter kahenge

//   //   console.log(req)
// });
// server.listen(8000); // yaha port set krna hota hai
// // port hme kyu need hota hai
// // dekho kya hai hai ki man lo yahi same computer me paka
// // php - localhost 127.0.0.1
// // java - localhost
// // phton - localhost
// // node - localhost

// // ka website run ho rha hai
// //to app braworsor pe localhost kewal likhoge to kaise pta chalega ki hamra kon sa server run ho rha ahi node ka hai ya php etc ka hai esliye hm  localhost:3000 uniq port dete hai
// // hm production me domain lete hai

// // 2) ex
// const http = require("http");
// const server = http.createServer((req, res) => {
//   const userName = "rahul";
//   const password = "123s4";

//   if (userName === "rahul" && password == "1234") {
//     res.statusCode = 200;
//     res.end("Now you are login");
//   } else {
//     res.statusCode = 404;
//     res.end("User not exit, You have to sugnup first");
//   }
// });
// server.listen(8000);

// 3 ex
// connect mongodb
// npm i mongodb
const mongodb = require("mongodb");
const http = require("http");

// console.log(mongodb)
const db = mongodb.MongoClient.connect(
  "mongodb+srv://rhul:1234RAHULpal@cluster0.9ff5t6e.mongodb.net/",
);
// console.log(db); // Promise { <pending> } mltb promise retutun kr rha hai

db.then((resolve) => {
  console.log("Db connected");
}).catch((error) => {
  console.log("Failed to db connect with db");
  console.log(error.message);
  process.exit(0); // jb db connect me error rhega to server ko run nhi hone dena chiiaye
  // node index
});

const server = http.createServer((req, res) => {
  res.end("Success");
});
server.listen(8000);
