export type ID = string | number;

export enum ELink {
  home = "/",

  dashboard = "/dashboard",
  error = "/error",

  signIn = "/auth/signIn",
  signUp = "/auth/signUp",
  newPassword = "/auth/new-password",
  restoreAuth = "/auth/restore",
  telegramAuth = "/auth/telegram",
  telegramTwoFAAuth = "/auth/telegram/two",
}

export type TLinks = Record<keyof typeof ELink, ELink>;
export type TRoutes = TLinks & TSingleELink;

export type TSingleELink = {
  userId: (id: ID) => string;
};

export const ROUTES: TRoutes = {
  home: ELink.home,

  dashboard: ELink.dashboard,
  error: ELink.error,

  signIn: ELink.signIn,
  signUp: ELink.signUp,
  newPassword: ELink.newPassword,
  restoreAuth: ELink.restoreAuth,
  telegramAuth: ELink.telegramAuth,
  telegramTwoFAAuth: ELink.telegramTwoFAAuth,

  userId: (id) => `/${id}`,
};

export const authRoutes = [
  ROUTES.signIn,
  ROUTES.signUp,
  ROUTES.newPassword,
  ROUTES.restoreAuth,
  ROUTES.telegramAuth,
  ROUTES.telegramTwoFAAuth,
];

export const publicRoutes = [...authRoutes, ROUTES.home];
