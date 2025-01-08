"use client";
import ContentContainer from "@/Components/ContentContainer";
import CreateBolg from "@/Components/CreateBlog";
import { useContext, useState } from "react";
import { UserContext } from "../layout";
export default function createBlog() {
    const[data,setData]=useState({});
    
  return (
    <>
      <ContentContainer data={data}>
        <CreateBolg data={setData}/>
      </ContentContainer>
    </>
  );
}
