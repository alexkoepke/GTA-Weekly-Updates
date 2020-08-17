import { typedAction } from "./actions";

export interface UserState {
  loggedIn: boolean;
  isAdmin: boolean;
  redirectUrl?: string;
}

const initialState: UserState = {
  loggedIn: false,
  isAdmin: false,
  redirectUrl: undefined,
};

export const setLoggedIn = (loggedIn: boolean) => {
  return typedAction("user/SET_LOGGED_IN", loggedIn);
};

export const setIsAdmin = (isAdmin: boolean) => {
  return typedAction("user/SET_IS_ADMIN", isAdmin);
};

export const setRedirectUrl = (redirectUrl?: string) => {
  return typedAction("user/SET_REDIRECT_URL", redirectUrl);
};

type UserAction = ReturnType<
  typeof setLoggedIn | typeof setIsAdmin | typeof setRedirectUrl
>;

export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case "user/SET_LOGGED_IN":
      return {
        ...state,
        loggedIn: action.payload,
      };
    case "user/SET_IS_ADMIN":
      return {
        ...state,
        isAdmin: action.payload,
      };
    case "user/SET_REDIRECT_URL":
      return {
        ...state,
        redirectUrl: action.payload,
      };
    default:
      return state;
  }
}
