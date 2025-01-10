import "./globals.css";
import React from "react";
import NavBar from "../Components/NavBar";
import HomeContainer from "../Components/HomeContainer";

export default function Dash({ children }: { children: React.ReactNode }) {
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
            <HomeContainer>{children}</HomeContainer>
          </div>
        </body>
      </html>
    </>
  );
}
