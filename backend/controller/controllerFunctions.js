const { User } = require("../mongooseModel/mongoSchema");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const postUser = async (req, res) => {
  try {
    const { todo } = req.body;
    const users = await User.create({ todo })
    res.status(200).json(users)
  } catch (error) {
    res.status(200).json({ message: error.message })
  }
}

const updateFn = async (req, res) => {
  try {
    const { id } = req.params;
    const { todo } = req.body;
    const users = await User.findByIdAndUpdate(id,{todo});
    res.status(200).json(users);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

const deleteFn = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findByIdAndDelete(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

module.exports = { getAllUsers , postUser , deleteFn , updateFn };
