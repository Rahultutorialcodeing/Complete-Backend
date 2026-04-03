const UserModal = require("../schema/user");

const addUser = async (req, res) => {
  const { fullName, email, mobile, password } = req.body;
  const user = await UserModal.create({
    fullName,
    email,
    mobile,
    password,
  });

  res.status(200).json(user);
};

const findUser = async (req, res) => {
  const user = await UserModal.find().sort({createdAt:-1}).exec(); // exec Promise banata hai
  res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { fullName, email, mobile, password } = req.body;

  const findUserByid = await UserModal.findById(id).exec();

  findUserByid.fullName = fullName;
  findUserByid.email = email;
  findUserByid.mobile = mobile;
  findUserByid.password = password;

  const user = await findUserByid.save();

  res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await UserModal.findById(id).exec();
  await user.deleteOne();
  res.sendStatus(204);
};

module.exports = {
  addUser,
  findUser,
  updateUser,
  deleteUser,
};
