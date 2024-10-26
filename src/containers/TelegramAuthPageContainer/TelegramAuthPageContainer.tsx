import React from "react";

import TelegramAuth from "@features/Auth/TelegramAuth";

import Transition from "@shared/ui/Transition";

const TelegramAuthPageContainer: React.FC = () => (
  <Transition>
    <TelegramAuth />
  </Transition>
);

export default TelegramAuthPageContainer;
