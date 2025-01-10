'use client';
import React, { useEffect, useContext } from "react";
import ContentContainer from "@/Components/ContentContainer";
import { DataContainer } from "@/Components/DataContainer";
import { UserContext } from "@/Components/HomeContainer";

export default function Home() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }

  const { setCss } = userContext;

  const design = {
    parent:
      "blog-list flex-wrap bg-slate-200 basis-[calc(33.333%-14px)] min-w-[150px] flex flex-col box-border border-gray-400 border-2 rounded-lg",
    child1: "blog-container flex flex-col gap-4 p-4",
    img: "h-full rounded-lg w-full",
    button: "bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700",
    heading: 'text-xl font-semibold',
    post: "post flex justify-between text-sm text-gray-500",
  };

  // Set the CSS using useEffect to avoid updating state during render
  useEffect(() => {
    setCss(design);
  }, []);

  return (
    <ContentContainer design={null}>
      <DataContainer />
    </ContentContainer>
  );
}
