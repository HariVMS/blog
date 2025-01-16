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

  if (id === "01") {
    return (
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-lg font-medium text-gray-600">
          This Blog Post is only for sample preview. Please create a new blog.
        </p>
        <button className={`${css.readButton} max-w-[560px]`}>
          Create Blog
        </button>
      </div>
    );
  } else if (!blogData) {
    return <div className="text-center text-gray-600">Blog post not found</div>;
  }

  return (
    <div className="w-full max-w-[900px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <Image
        className="rounded-md"
        src={blogData.img}
        alt="Blog Image"
        width={1000}
        height={1000}
      />
      <div className="mt-6 flex flex-col gap-6">
        <h2 className={`${css.heading} text-2xl font-semibold text-gray-800`}>
          {blogData.title}
        </h2>
        <p className="text-gray-700">{blogData.descriptions}</p>
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <span>Posted By: {blogData.author}</span>
          <span>{currentDate}</span>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">Author Details</h3>
          <div className="grid grid-cols-2 gap-4 mt-2 text-gray-700">
            <div>
              <p className="font-medium">Name:</p>
              <p>{blogData.author}</p>
            </div>
            <div>
              <p className="font-medium">Email:</p>
              <p>{blogData.email}</p>
            </div>
            <div>
              <p className="font-medium">Phone:</p>
              <p>{blogData.phone}</p>
            </div>
            <div>
              <p className="font-medium">Gender:</p>
              <p>{blogData.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
