import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const loggedInUser = req.user.id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUser } });
    res.status(201).json(filteredUsers);
  } catch (error) {
    console.log("Error in getAllUsers contoller:", +error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
