"use client";
import React, { useState, createContext } from "react";

interface UserContextType {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  setCss: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  css: { [key: string]: string };
}

export const UserContext = createContext<UserContextType | null>(null);

const HomeContainer = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<any[]>([]); // Array to store the data
  const [css, setCss] = useState<{ [key: string]: string }>({}); // Object to store CSS design
  return (
    <div className="home-container bg-slate-50 h-full p-4">
      <UserContext.Provider value={{ data, setData, setCss, css }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default HomeContainer;
