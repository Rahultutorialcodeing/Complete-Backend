const http = require("http");

const { MongoClient } = require("mongodb");
const {
  createUser,
  fetchUsers,
  updateUser,
  deleteUser,
} = require("./module/user");
const { type, getMessage } = require("./module/lib");

let db = null;

MongoClient.connect(
  "mongodb+srv://rahul:1234RAHULpal@cluster0.9ff5t6e.mongodb.net/",
)
  .then(async (client) => {
    console.log("DB Connected!");
    db = client.db("ecom");
  })
  .catch((error) => {
    console.log("Failed to db connect with db");
    console.log(error.message);
    process.exit(0); // jb db connect me error rhega to server ko run nhi hone dena chiiaye
    // node index
  });

const server = http.createServer((req, res) => {
  const myUrl = new URL(req.url, `http://${req.headers.host}`);
  const endPoint = myUrl.pathname;

  if (!endPoint.startsWith("/user")) {
    res.writeHead(404, type);
    return res.end(getMessage("EndPoint Not Found"));
  }
  const method = req.method;

  if (!db) {
    res.writeHead(500, type);
    return res.end(getMessage("DB not intialized yet"));
  }

  const userCollection = db.collection("users");

  if (
    !method === "POST" &&
    !method === "GET" &&
    !method === "PUT" &&
    !method === "DELETE"
  ) {
    res.writeHead(405, type);
    return res.end(getMessage("Method not allowed."));
  }

  if (method === "POST") createUser(req, res, userCollection);

  if (method === "GET") fetchUsers(req, res, userCollection);

  if (method === "PUT") updateUser(req, res, userCollection);

  if (method === "DELETE") deleteUser(req, res, userCollection);
});

server.listen(8000);
