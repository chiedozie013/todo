import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialUser());
  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  useEffect(() => {
    const people = JSON.stringify(user);
    localStorage.setItem("user", people);
  }, [user]);

  function getInitialUser() {
    return JSON.parse(localStorage.getItem("user")) || "";
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
