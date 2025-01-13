"use client";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "@/Components/HomeContainer";
import InputBox from "./ReusableComponents/InputBox";

const BlogPage = () => {
  const userBlogData = useContext(UserContext);
  const [description, setDescription] = useState("");
  const [blogData, setBlogData] = useState<Item[]>([]);
  if (!userBlogData) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }
  useEffect(() => {
    if (blogData.length > 0) {
      userBlogData.setData(blogData);
    }
  }, [blogData, userBlogData]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formObject: Item = {
      author: formData.get("author") as string,
      title: formData.get("title") as string,
      descriptions: formData.get("descriptions") as string,
      img: formData.get("img") as string,
    };
    setBlogData((prevBlogData) => {
      const updatedBlogData = [...prevBlogData, formObject];
      return updatedBlogData;
    });

    alert("Added Successfully");
  };
  return (
    <>
      <form className="flex flex-col gap-2 w-full " onSubmit={handleSubmit}>
        <label htmlFor="author">Author :</label>
        <InputBox boxName="author" id="author" placeholder="Author" />
        <label htmlFor="title">Title :</label>
        <InputBox boxName="title" id="title" placeholder="Title" />
        <label htmlFor="descriptions">Description : </label>
        <textarea
          className="border rounded-md px-3 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400"
          name="descriptions"
          id="descriptions"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
        ></textarea>
        <label htmlFor="img">Image URL : </label>
        <InputBox boxName="img" id="img" placeholder="Image URL" />
        <div>
          <button className="bg-blue-600 mt-2 p-2 rounded-md text-white">
            Add Data
          </button>
        </div>
        <Link href="/">
          <button
            type="button"
            className="bg-blue-600 mt-2 p-2 rounded-md text-white"
          >
            Home
          </button>
        </Link>
      </form>
    </>
  );
};

export default BlogPage;


