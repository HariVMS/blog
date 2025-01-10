"use client";
import { useContext } from "react";
import { UserContext } from "./HomeContainer";
import Link from "next/link";

export const DataContainer = () => {
  const allDatas = useContext(UserContext);
  const { data, css }: any = allDatas;
  const currentDate = new Date().toLocaleDateString();
  return (
    <>
      <div className={css.parent}>
        <div className={css.child1}>
          <div className="image">
            <img
              className={css.img}
              src="https://static.vecteezy.com/system/resources/thumbnails/024/669/489/small_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg"
              alt="Scenic mountain landscape at sunset"
            />
          </div>
          <div className="heading">
            <h2 className={css.heading}>This is a Pic of Nature</h2>
          </div>
          <div className="content text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque odio
            provident voluptatem quibusdam placeat quam cumque quia, laborum
            veritatis ratione at, deserunt unde hic ducimus eum error molestias
            sed quas.
          </div>
          <div className={css.post}>
            <div className="posted">
              <h3>Posted By Someone</h3>
            </div>
            <div className="date">{currentDate}</div>
          </div>
          <div className="read">
            <button className={css.button}>Read More</button>
          </div>
        </div>
      </div>
      {/* Dynamically rendering form data */}
      {data.map((item: any, index: any) => (
        <div className={css.parent} key={index}>
          <div className={css.child1}>
            <div className="image">
              <img
                className={css.img}
                src="https://static.vecteezy.com/system/resources/thumbnails/024/669/489/small_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg"
                alt="Scenic mountain landscape at sunset"
              />
            </div>
            <div className="heading">
              <h2 className={css.heading}>{item.title}</h2>
            </div>
            <div className="content text-gray-700">{item.descriptions}</div>
            <div className={css.post}>
              <div className="posted">
                <h3>Posted By {item.author}</h3>
              </div>
              <div className="date">{currentDate}</div>
            </div>
            <div className="read">
              <button className={css.button}>
                <Link href={index?`/blog/${index}`:`/blog/${"01"}`}>Read More</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
