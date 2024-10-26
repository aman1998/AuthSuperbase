import React from "react";

import TelegramTwoFA from "@features/Auth/TelegramTwoFA";

import Transition from "@shared/ui/Transition";

const TelegramTwoFAPageContainer: React.FC = () => (
  <Transition>
    <TelegramTwoFA />
  </Transition>
);
export default TelegramTwoFAPageContainer;
