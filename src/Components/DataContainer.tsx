"use client";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { UserContext } from "./HomeContainer";
import Image from "next/image";

export const DataContainer = () => {
  const currentDate = new Date().toLocaleDateString();
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }

  const blogDatas = userContext;

  const design = {
    parentContainer:
      "flex-wrap bg-slate-200 basis-[calc(33.333%-14px)] min-w-[150px] flex flex-col box-border border-gray-400 border-2 rounded-lg",
    childContainer: " flex flex-col gap-4 p-4",
    img: "h-full rounded-lg w-full",
    readButton: "bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700",
    heading: "text-xl font-semibold",
    post: "flex justify-between text-sm text-gray-500",
  };

  useEffect(() => {
    blogDatas.setCss(design);
  }, []);
  return (
    <>
      <div className={design.parentContainer}>
        <div className={design.childContainer}>
          <div className="image">
            <Image
              className={design.img}
              src="https://static.vecteezy.com/system/resources/thumbnails/024/669/489/small_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg"
              alt="Scenic mountain landscape at sunset"
              width={600}
              height={600}
            />
          </div>
          <div className="heading">
            <h2 className={design.heading}>This is a Pic of Nature</h2>
          </div>
          <div className="content text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque odio
            provident voluptatem quibusdam placeat quam cumque quia, laborum
            veritatis ratione at, deserunt unde hic ducimus eum error molestias
            sed quas.
          </div>
          <div className={design.post}>
            <div className="posted">
              <h3>Posted By Someone</h3>
            </div>
            <div className="date">{currentDate}</div>
          </div>
          <div className="read">
            <Link href={`/personal-blog/${"01"}`}>
              <button className={design.readButton}>Read More</button>
            </Link>
          </div>
        </div>
      </div>
      {blogDatas.data.map((item: Item, index: number) => (
        <div className={design.parentContainer} key={index}>
          <div className={design.childContainer}>
            <div className="image">
              <Image
                className={design.img}
                src={item.img}
                alt="Scenic mountain landscape at sunset"
                width={600}
                height={600}
              />
            </div>
            <div className="heading">
              <h2 className={design.heading}>{item.title}</h2>
            </div>
            <div className="content text-gray-700">{item.descriptions}</div>
            <div className={design.post}>
              <div className="posted">
                <h3>Posted By {item.author}</h3>
              </div>
              <div className="date">{currentDate}</div>
            </div>
            <div className="read">
              <button className={design.readButton}>
                <Link href={`/personal-blog/${index}`}>Read More</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
