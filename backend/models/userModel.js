import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: "string",
      required: true,
    },
    username: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
      minlength: 6,
    },
    gender: {
      type: "string",
      required: true,
      enum: ["male", "female"],
    },
    profilePic: {
      type: "string",
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
