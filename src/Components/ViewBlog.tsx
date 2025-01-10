"use client";
import React, { useContext } from "react";
import { UserContext } from "./HomeContainer";

export default function ViewBlog({ id }: { id: string }) {
  const currentDate = new Date().toLocaleDateString();
  const allDatas = useContext(UserContext);
  const { data, css }: any = allDatas;
  const blogData = data[Number(id)];
  if (!blogData) {
    return <div>Blog post not found</div>;
  }
  return (
    <>
      <div>
        <img className={`rounded-md w-full`} src={blogData.img} alt="" />
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
}
