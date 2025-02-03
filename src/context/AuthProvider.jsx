import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

function reducer(auth, action) {
  switch (action.type) {
    case "ADD_TOKEN": {
      return { ...auth, token: "11231" };
    }
    case "REMOVE_TOKEN": {
      return {};
    }
  }
  return auth;
}

const initialState = {};

function AuthProvider({ children }) {
  const [auth, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
