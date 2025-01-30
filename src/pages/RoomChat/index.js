import { Footer, Navbar } from "src/sections";
import React from "react";
import RoomChatSection from "src/sections/RoomChatSection";

function RoomChat() {
  return (
    <>
      <Navbar />
      <RoomChatSection />
      <Footer />
    </>
  );
}

export default RoomChat;
