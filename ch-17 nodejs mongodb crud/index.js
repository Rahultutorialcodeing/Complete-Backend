const http = require("http");

const { MongoClient } = require("mongodb");

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

const getMessage = (message) => {
  return JSON.stringify({
    message: message,
  });
};

const server = http.createServer(async (req, res) => {
  const myUrl = new URL(req.url, `http://${req.headers.host}`);
  const endPoint = myUrl.pathname;
  const type = { "content-type": "application/json" };

  if (endPoint !== "/user") {
    res.writeHead(404, type);
    return res.end(getMessage("EndPoint Not Found"));
  }
  const method = req.method;

  if (!db) {
    res.writeHead(500, type);
    return res.end(getMessage("DB not intialized yet"));
  }

  if (method === "POST") {
    try {
      const payload = {
        name: "Rahul Pal",
        email: "rahul@gmail.com",
      };
      const User = db.collection("users");
      await User.insertOne(payload);

      res.writeHead(200, type);
      return res.end(getMessage(payload));
    } catch (error) {
      res.writeHead(500, type);
      return res.end(getMessage(error.message || "Interval server error."));
    }
  }

  if (method === "GET") {
    try {
      const User = db.collection("users");
      const users = await User.find().toArray(); // dekho find promise return nhi krta hai jaise insertOne krta to esko promise forcefully banane ke liye toArray use krna prega ; finOne ke toArray nhi dena prta hai dyan rakho
      res.writeHead(200, type);
      return res.end(getMessage(users));
    } catch (error) {
      res.writeHead(500, type);
      return res.end(getMessage(error.message || "Interval server error."));
    }
  }
});

server.listen(8000);
