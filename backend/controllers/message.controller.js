import Conversation from "../models/conversationSchema.js";
import Message from "../models/message.model.js";
import { getRecieverId, io } from "../socket/socket.js";

export const message = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user.id;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [recieverId, senderId],
      });
    }
    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    //SocketId functionality
    const recieverSocketId = await getRecieverId(recieverId);
    if (recieverSocketId) {
      //io.to(socketId).emit() is used to send events to specific client
      io.to(recieverSocketId).emit("newMessage", newMessage);
    }

    res.status(200).json(newMessage);
  } catch (error) {
    console.log("Error in message:" + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getmessages = async (req, res) => {
  try {
    const { id: recieverId } = req.params;
    const senderId = req.user._id;
    if (recieverId) {
      const conversation = await Conversation.findOne({
        participants: { $all: [senderId, recieverId] },
      }).populate("messages");
      if (!conversation) {
        return res.status(404).json([]);
      }
      res.status(201).json(conversation.messages);
    } else {
      return res.status(404).json({ message: "Start Messaging" });
    }
  } catch (error) {
    console.log("Error in message:" + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
