export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface UserContextState {
  token: string;
  user: User;
}

export type Action =
  | {
      type: 'LOGIN';
      token: string;
    }
  | {
      type: 'GET_CURRENT_USER';
      user: User;
    };

export type Dispatch = (action: Action) => void;
