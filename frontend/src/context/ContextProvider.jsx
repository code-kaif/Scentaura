import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function ContextProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={{ user, setUser, count, setCount }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
