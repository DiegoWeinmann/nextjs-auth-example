import { createContext, useReducer, useEffect } from 'react';
import { Action, Dispatch, UserContextState } from './types';
import { getToken, getCurrentUser } from './utils';

export const UserContext = createContext<UserContextState | undefined>(
  undefined
);
export const UserContextDispatch = createContext<Dispatch | undefined>(
  undefined
);

const initialState: UserContextState = {
  token: null,
  user: null,
};

export const userContextReducer = (state: UserContextState, action: Action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        token: action.token,
      };
    }
    case 'GET_CURRENT_USER': {
      return {
        ...state,
        user: action.user,
      };
    }
  }
};

export const UserContextProvider: React.FC = ({ children }) => {
  const [userState, dispatch] = useReducer(userContextReducer, initialState);

  useEffect(() => {
    const token = getToken();
    console.log(token);
    if (!token) return;
    getCurrentUser(dispatch, '/api/current-user', token);
  }, []);

  return (
    <UserContext.Provider value={userState}>
      <UserContextDispatch.Provider value={dispatch}>
        {children}
      </UserContextDispatch.Provider>
    </UserContext.Provider>
  );
};
