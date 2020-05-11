import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  users: [
    { id: 1, username: "thato", email: "thato@gmail.com", password: "1234" },
  ],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addUser(user) {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  }

  // function confirmUser(user) {
  //   children.map((u) => {
  //     if (u.username === user.username && u.id === user.id) {
  //       type: "GET_USER";
  //     }
  //   });
  // }

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        loading: state.users,
        error: state.error,
        addUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
