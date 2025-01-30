import React from "react";
import searchIcon from "../../assets/search.svg";
import avatar from "src/assets/Ellipse 177.webp";

const InputSearch = () => (
  <div className="w-full flex relative items-center">
    <div className="absolute left-4 border-r border-[#4F5665]">
      <img src={searchIcon} alt="search" className="mr-2 w-4 h-4" />
    </div>
    <input
      type="text"
      placeholder="Search"
      className="px-4 py-2 w-full bg-[#EFEEEE] rounded-full pl-12 focus:outline-none"
    />
  </div>
);

const SenderMessage = ({ color }) => (
  <div className="flex justify-end gap-3 py-2 border-b">
    <div className="p-1">
      <p className="text-xs">
        Hey, I’m Jason, Let’s talk and share what’s on yourasdas
      </p>
    </div>
    <img className="w-10 h-10" src={avatar} alt="avatar" />
  </div>
);

const RecieveMessage = () => (
  <div className="flex gap-2 py-2 border-b">
    <img className="w-10 h-10" src={avatar} alt="avatar" />
    <div className="p-1">
      <p className="text-xs">
        Hey, I’m Jason, Let’s talk and share what’s on yourasdas
      </p>
    </div>
  </div>
);

function RoomChatSection() {
  return (
    <section className="h-screen pt-20 flex justify-center bg-[url('/src/assets/background-roomchat.webp')] bg-cover">
      <div className="container flex justify-center items-center">
        <div className="bg-white rounded-lg min-h-[90%] w-full max-w-4xl flex">
          <section className="w-[40%] bg-[#6A4029] rounded-l-lg p-6">
            <InputSearch />
            <p className="text-white text-center my-5">
              Choose a staff you want to talk with
            </p>
            <div className="flex items-center gap-2 py-2 border-b">
              <img className="w-14 h-14" src={avatar} alt="avatar" />
              <div>
                <p className="text-white text-sm font-bold mb-1">jason</p>
                <p className="text-xs text-white">
                  Hey, I’m Jason, Let’s talk and share what’s on your thoughts!
                </p>
              </div>
            </div>
          </section>
          <section className="w-[60%] px-8 py-5">
            <p className="text-lg font-semibold text-[#4F5665]">Jason</p>
            <div>
              <SenderMessage />
              <RecieveMessage />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default RoomChatSection;
