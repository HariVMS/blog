'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { UserContext } from './HomeContainer';
import { UserContextDataCssType } from '@/interface';

const ViewBlog = ({ id }: { id: string }) => {
  const currentDate = new Date().toLocaleDateString();
  const userContextData = useContext(UserContext);
  if (!userContextData) {
    throw new Error('UserContext is not provided!');
  }
  const { data, css }: UserContextDataCssType = userContextData;
  const blogData = data.find((blog) => blog.id === id);

  if (!blogData) {
    return <div className="text-center text-gray-600">Blog post not found</div>;
  }
  const blogDetails = [
    { label: 'Name', value: blogData.author },
    { label: 'Email', value: blogData.email },
    { label: 'Phone', value: blogData.phone },
    { label: 'Gender', value: blogData.gender },
  ];

  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <Image
        className="rounded-md ml-[190px]"
        src={blogData.img}
        alt="Blog Image"
        width={1000}
        height={1000}
      />
      <div className="mt-6 flex flex-col gap-6 w-full">
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
            {blogDetails.map((detail, index) => (
              <div key={index}>
                <p className="font-medium">{detail.label}:</p>
                <p>{detail.value}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-around pt-14">
            <button className={css.readButton}>
              <Link href={`/edit-blog/${blogData.id}`}>Edit</Link>
            </button>
            <button className={css.readButton}>
              <Link href={`/view-blog`}>Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
