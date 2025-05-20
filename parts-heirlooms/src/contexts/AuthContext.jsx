import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user 狀態，null 表示未登入

  const login = (userData) => {
    setUser(userData); // 設置使用者資料
  };

  const logout = () => {
    setUser(null); // 清除使用者資料
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};