import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useSendMessage from "../hooks/useSendMessage";
import useGetMessages from "../hooks/useGetMessages";
import useListenMessages from "../hooks/useListenMessages";
import EmojiPicker from "emoji-picker-react";

const Messages = () => {
  const toggle = useSelector((store) => store.app.isClicked);
  const user = useSelector((store) => store.auth.userData);
  const selectedUser = useSelector((store) => store.selectedUser.selectedUser);

  let [text, setText] = useState("");
  const [emoji, setEmoji] = useState(false);

  const { send } = useSendMessage();
  const { chats } = useGetMessages();
  useListenMessages();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await send(text);
    setText("");
    setEmoji(false);
  };

  const handleEmojiClick = (emoji) => {
    text += emoji.emoji;
    setText(text);
  };

  return (
    <>
      {!toggle ? (
        <div className="flex h-full w-full items-center justify-center text-gray-400 flex-col">
          <div>Welcome {user?.username}</div>
          <div>Select a chat to start messaging</div>
        </div>
      ) : (
        <>
          <div className="h-full w-full relative">
            <div onClick={() => setEmoji(false)}>
              <div className="flex items-center p-2 space-x-3 bg-gray-500 text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
                <img
                  className="w-6"
                  src={selectedUser?.profilePic}
                  alt="ProfilePic"
                />
                <span className="text-sm">{selectedUser?.username}</span>
              </div>
              <div className="overflow-y-scroll h-[470px] scrollable-hide">
                {chats?.map((chat, index) => (
                  <React.Fragment key={index}>
                    {chat.senderId == user._id ? (
                      <div className="flex mt-4 justify-end mr-2">
                        <div className="flex w-20 p-2 rounded-lg text-sm bg-purple-500 cursor-pointer hover:text-white hover:bg-purple-700">
                          <span>{chat?.message}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex mt-5 ml-2">
                        <div className="flex w-20 p-2 rounded-lg text-sm bg-purple-500 cursor-pointer hover:text-white hover:bg-purple-700">
                          <span>{chat?.message}</span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="flex justify-center p-2 space-x-.5 mt-4">
              <button
                className="bg-gray-500 rounded-l-lg"
                onClick={() => setEmoji(!emoji)}
              >
                <img
                  className="w-10 rounded-full text-purple-700"
                  src="https://cdn.icon-icons.com/icons2/3288/PNG/512/happy_emo_emoticon_emoji_icon_208299.png"
                  alt="send"
                />
              </button>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex w-full bg-gray-500 rounded-r-lg">
                  <input
                    className="w-full p-2 bg-gray-500 text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50"
                    type="text"
                    placeholder="Send a message"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <button className="p-2">
                    <img
                      className="w-10 rounded-full"
                      src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-send-icon-image_1130542.jpg"
                      alt="send"
                    />
                  </button>
                </div>
              </form>
              {emoji && (
                <div className="absolute top-14 left-2">
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Messages;
