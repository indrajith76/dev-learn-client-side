import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://dev-learn-server-side.vercel.app/courses")
    .then(res => res.json())
    .then(data => setCourses(data))
  }, []);

  const authInfo = {courses};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
