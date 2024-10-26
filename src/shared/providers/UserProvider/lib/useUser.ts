"use client";

import React from "react";

import { IUser } from "@entities/User/model/types";

import { TNullable } from "@shared/types/common";

interface IUserContextType {
  user: TNullable<IUser>;
  setUser: React.Dispatch<React.SetStateAction<TNullable<IUser>>>;
}

export const UserContext = React.createContext<IUserContextType | undefined>(undefined);

export const useUser = (): IUserContextType => {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
