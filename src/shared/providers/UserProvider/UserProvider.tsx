"use client";

import React from "react";

import { IUser } from "@entities/User/model/types";

import { TNullable } from "@shared/types/common";
import { UserContext } from "@shared/providers/UserProvider/lib/useUser";

interface Props {
  children: React.ReactNode;
  user: TNullable<IUser>;
}
const UserProvider: React.FC<Props> = ({ children, user: userProp }) => {
  const [user, setUser] = React.useState<TNullable<IUser>>(userProp);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
