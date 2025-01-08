"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import NavBar from "../Components/NavBar";
import HomeContainer from "../Components/HomeContainer";
import { useState, createContext, useContext } from "react";

export const UserContext = createContext([]);
export default function Dash({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<any>([]);
  console.log("paernt", data);
  return (
    <>
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>MyBlog</title>
        </head>
        <body>
          <div className="main-container h-lvh flex flex-col">
            <NavBar />
            <UserContext.Provider value={{ data, setData }}>
              <HomeContainer>{children}</HomeContainer>
            </UserContext.Provider>
          </div>
        </body>
      </html>
    </>
  );
}
