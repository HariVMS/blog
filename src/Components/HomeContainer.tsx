'use client';
import { Item, UserContextType } from '@/interface/interface';
import React, { useState, createContext } from 'react';

export const UserContext = createContext<UserContextType | null>(null);

const HomeContainer = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<Item[]>([]);
  const [css, setCss] = useState<{ [key: string]: string }>({});
  return (
    <div className="bg-slate-50 h-full p-4">
      <UserContext.Provider value={{ data, setData, setCss, css }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default HomeContainer;
