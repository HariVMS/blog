"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { UserContext } from "./HomeContainer";

const ViewBlog = ({ id }: { id: string }) => {
  const currentDate = new Date().toLocaleDateString();
  const userContextData = useContext(UserContext);
  if (!userContextData) {
    throw new Error("UserContext is not provided!");
  }
  const { data, css }: UserContextType = userContextData;
  const blogData = data[Number(id)];
  if (id == "01") {
    return <div>This Blog Post Only For Sample Preview</div>;
  } else if (!blogData) {
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <div>
        <Image
          className={`rounded-md w-full`}
          src={blogData.img}
          alt="Img Not found"
          layout="responsive"
          width={16}
          height={9}
        />
        <div className="heading">
          <h2 className={css.heading}>{blogData.title}</h2>
        </div>
        <div className=" text-gray-700">{blogData.descriptions}</div>
        <div className={css.post}>
          <div className="posted">
            <h3>Posted By {blogData.author}</h3>
          </div>
          <div className="date">{currentDate}</div>
        </div>
      </div>
    </>
  );
};

export default ViewBlog;
