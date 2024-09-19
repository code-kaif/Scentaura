import bcrypt from "bcryptjs";
import { User } from "../model/user.model.js";

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    let isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch)
      return res.status(400).json({ message: "Invalid Email or Password" });
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const signup = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User Already Exist" });
    const hashPassword = await bcrypt.hash(password, 10);
    let createdUser = new User({ name, email, password: hashPassword });
    await createdUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
