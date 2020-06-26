import React from "react";

import Header from "components/Header";
import { SendMessage } from "components/SendMessage";
import Messages from "components/Messages";
import { Sidebar } from "components/Sidebar";
import AppLayout from "components/AppLayout";

export const ViewTeam = () => {
  return (
    <AppLayout>
        <Sidebar />
      <Header channelName="general" />
      <Messages>
        <ul className="message-list">
          <li></li>
          <li></li>
        </ul>
      </Messages>
      <SendMessage channelName="general" />
    </AppLayout>
  );
};
