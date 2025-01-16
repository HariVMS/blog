"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserContext } from "./HomeContainer";

export const DataContainer = () => {
  const currentDate = new Date().toLocaleDateString();
  const userContext = useContext(UserContext);
  const [showPopup, setShowPopup] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  if (!userContext) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }

  const blogDatas = userContext;

  const design = {
    parentContainer:
      "flex-wrap bg-slate-200 basis-[calc(33.333%-14px)] min-w-[150px] h-[515px] flex flex-col box-border border-gray-400 border-2 rounded-lg",
    childContainer: " flex flex-col gap-4 p-3 h-full",
    img: "h-80 rounded-lg w-full border-2 border-gray-400 rounded-3xl",
    readButton:
      "bg-blue-600 p-1 rounded-md text-white hover:bg-blue-700 mr-4 h-9 w-28",
    heading: "text-xl font-semibold",
    post: "flex justify-between text-sm text-gray-500",
    description: "text-gray-700 line-clamp-3 w-[400px]",
  };

  useEffect(() => {
    blogDatas.setCss(design);
  }, []);

  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updatedData = blogDatas.data.filter((_, i) => i !== deleteIndex);
      blogDatas.setData(updatedData);
      setShowPopup(false); // Close the popup
      setDeleteIndex(null); // Reset the deleteIndex
    }
  };

  const openPopup = (index: number) => {
    setDeleteIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setDeleteIndex(null);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
            <p className="text-gray-600 mb-6">
              Do you really want to delete this item? This action cannot be
              undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
                onClick={closePopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {blogDatas.data.length === 0 && (
        <div className={design.parentContainer}>
          <div className={design.childContainer}>
            <div className="image">
              <Image
                className={design.img}
                src="https://static.vecteezy.com/system/resources/thumbnails/024/669/489/small_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg"
                alt="Scenic mountain landscape at sunset"
                width={1000}
                height={1000}
              />
            </div>
            <div className="heading">
              <h2 className={design.heading}>This is a Pic of Nature</h2>
            </div>
            <div className="text-gray-700 line-clamp-4 w-[400px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              odio provident voluptatem quibusdam placeat quam cumque quia,
              laborum veritatis ratione at, deserunt unde hic ducimus eum error
              molestias sed quas.
            </div>
            <div className={design.post}>
              <div className="posted">
                <h3>Posted By Someone</h3>
              </div>
              <div className="date">{currentDate}</div>
            </div>
            <div className="read">
              <button className={design.readButton}>
                <Link href={`/blog-details/${"01"}`}>Read More</Link>
              </button>
              <button className={design.readButton}>
                <Link href={`/edit-blog/${"01"}`}>Edit</Link>
              </button>
              <button className={design.readButton}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {blogDatas.data.map((item: Item, index: number) => (
        <div className={design.parentContainer} key={index}>
          <div className={design.childContainer}>
            <div className="image">
              <Image
                className={design.img}
                src={item.img}
                alt="No image Found"
                width={600}
                height={600}
              />
            </div>
            <div className="heading">
              <h2 className={design.heading}>{item.title}</h2>
            </div>
            <div className={design.description}>{item.descriptions}</div>
            <div className={design.post}>
              <div className="posted">
                <h3>Posted By {item.author}</h3>
              </div>
              <div className="date">{currentDate}</div>
            </div>
            <div className="read">
              <button className={design.readButton}>
                <Link href={`/blog-details/${index}`}>Read More</Link>
              </button>
              <button className={design.readButton}>
                <Link href={`/edit-blog/${index}`}>Edit</Link>
              </button>
              <button
                className={design.readButton}
                onClick={() => openPopup(index)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
