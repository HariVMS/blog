'use client';
import ContentContainer from "@/Components/ContentContainer";
import { DataContainer } from "@/Components/DataContainer";
import { useContext, useState } from "react";
import { UserContext } from "./layout";

export default function Home() {
  const [data,setData]=useState({})

  const design = {
    parent:
      "blog-list flex-wrap bg-slate-200 basis-[calc(33.333%-14px)] min-w-[150px] flex flex-col box-border border-gray-400 border-2 rounded-lg",
    child1: "blog-container flex flex-col gap-4 p-4",
    img: "h-full rounded-lg w-full",
    button: "bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700",
    heading:'text-xl font-semibold',
    post:"post flex justify-between text-sm text-gray-500",
  }; 
  return (
    <ContentContainer data={setData}>
      <DataContainer design={design}  />
    </ContentContainer>
  );
}
