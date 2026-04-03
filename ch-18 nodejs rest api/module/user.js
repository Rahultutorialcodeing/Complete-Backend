const { type, getMessage } = require("./lib");
const queryString = require("querystring");
const { ObjectId } = require("mongodb");

const createUser = (req, res, userCollection) => {
  try {
    let payload = "";
    req.on("data", (chunks) => {
      // console.log(chunks) //chunks me buffer deta dega
      payload = payload + chunks.toString();
    });
    req.on("end", async () => {
      const parseData = queryString.parse(payload);
      parseData.createdAt = new Date();
      await userCollection.insertOne(parseData);
      res.writeHead(200, type);
      return res.end(getMessage(parseData));
    });
  } catch (error) {
    res.writeHead(500, type);
    return res.end(getMessage(error.message || "Interval server error."));
  }
};

const fetchUsers = async (req, res, userCollection) => {
  try {
    const userData = await userCollection
      .find()
      .sort({ createdAt: -1 })
      .toArray();
    res.writeHead(200, type);
    return res.end(getMessage(userData));
  } catch (error) {
    res.writeHead(500, type);
    return res.end(getMessage(error.message || "Interval server error."));
  }
};

const updateUser = async (req, res, userCollection) => {
  try {
    const myUrl = new URL(req.url, `http://${req.headers.host}`);
    const id = myUrl.searchParams.get("id");

    let payload = "";
    req.on("data", (chunks) => {
      // console.log(chunks) //chunks me buffer deta dega
      payload = payload + chunks.toString();
    });

    req.on("end", async () => {
      const parseData = queryString.parse(payload);
      await userCollection.updateOne(
        { _id: new ObjectId(id) },
        {
          $set: { fullName: parseData.fullName, email: parseData.email },
        },
      );

      res.writeHead(200, type);
      return res.end(getMessage(parseData));
    });
  } catch (error) {
    res.writeHead(500, type);
    return res.end(getMessage(error.message || "Interval server error."));
  }
};

const deleteUser = async (req, res, userCollection) => {
  try {
    const myUrl = new URL(req.url, `http://${req.headers.host}`);
    const id = myUrl.searchParams.get("id");
    await userCollection.deleteOne({ _id: new ObjectId(id) });
    res.writeHead(200, type);
    return res.end(getMessage("User Deleted!"));
  } catch (error) {
    res.writeHead(500, type);
    return res.end(getMessage(error.message || "Interval server error."));
  }
};

module.exports = {
  createUser,
  fetchUsers,
  updateUser,
  deleteUser,
};
