'use client'
import { UserContext } from "@/Components/HomeContainer";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";

export default function BlogPage() {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }

  const [description, setDescription] = useState("");
  const [blogData, setBlogData] = useState<{ [k: string]: FormDataEntryValue }[]>([]);

  // Store the updated blog data in state, but update user data after render
  useEffect(() => {
    if (blogData.length > 0) {
      user.setData(blogData);
    }
  }, [blogData, user]); // Runs after blogData changes

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    // Use functional state update to ensure the latest state
    setBlogData((prevBlogData) => {
      const updatedBlogData = [...prevBlogData, formObject];
      return updatedBlogData;
    });

    alert('Added Successfully');
  };

  console.log("blogData", blogData);

  return (
    <>
      <form
        className="deatils flex flex-col gap-2 w-full "
        onSubmit={handleSubmit}
      >
        <label htmlFor="author">Author :</label>
        <input type="text" name="author" id="author" placeholder="Author" />
        <label htmlFor="title">Title :</label>
        <input type="text" name="title" id="title" placeholder="Title" />
        <label htmlFor="Descriptions">Description : </label>
        <textarea
          name="descriptions"
          id="Descriptions"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
        ></textarea>
        <label htmlFor="img">Image URL : </label>
        <input type="text" name="img" id="img" placeholder="Image URL" />
        <div>
          <button className="bg-blue-600 mt-2 p-2 rounded-md text-white">
            Add Data
          </button>
        </div>
        <Link href='/'>
          <button type="button" className="bg-blue-600 mt-2 p-2 rounded-md text-white">
            Home
          </button>
        </Link>
      </form>
    </>
  );
}
