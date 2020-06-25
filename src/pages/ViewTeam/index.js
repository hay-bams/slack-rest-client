import React from "react";

import { Channels } from "components/Channels";
import Header from "components/Header";
import { SendMessage } from "components/SendMessage";
import Messages from "components/Messages";
import { Teams } from "components/Teams";
import AppLayout from "components/AppLayout";

export const ViewTeam = () => {
  return (
    <AppLayout>
      <Teams teams={[{ id: 1, letter: 'T' }, { id: 2, letter: 'Q' }]}>Teams</Teams>
      <Channels
        teamName="Team name"
        username="Username"
        channels={[{ id: 1, name: 'general' }, { id: 2, name: 'random' }]}
        users={[{ id: 1, name: 'slackbot' }, { id: 2, name: 'user1' }]}
      />
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
