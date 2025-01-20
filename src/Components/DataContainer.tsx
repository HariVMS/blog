'use client';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserContext } from './HomeContainer';
import DeletePopup from './DeletePopup';
import EmptyBlogContainer from './EmptyBlogContainer';
import { Item } from '@/interface';

export const DataContainer = () => {
  const currentDate = new Date().toLocaleDateString();
  const userContext = useContext(UserContext);
  const [showPopup, setShowPopup] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<string | null>(null);

  if (!userContext) {
    throw new Error('UserContext must be used within a UserContext.Provider');
  }

  const blogDatas = userContext;

  const design = {
    parentContainer:
      'flex-wrap bg-slate-200 basis-[calc(33.333%-14px)] min-w-[150px] h-[515px] flex flex-col box-border border-gray-400 border-2 rounded-lg sm:min-w-[570px] md:min-w-[695px] lg:min-w-[456px] xl:min-w-[570px]',
    childContainer: ' flex flex-col gap-4 p-3 h-full',
    img: 'h-80 rounded-lg w-full border-2 border-gray-400 rounded-3xl',
    readButton:
      'bg-blue-600 p-1 rounded-md text-white hover:bg-blue-700 mr-4 h-9 w-28',
    heading: 'text-xl font-semibold',
    post: 'flex justify-between text-sm text-gray-500',
    description: 'text-gray-700 line-clamp-3 w-[400px]',
  };

  useEffect(() => {
    blogDatas.setCss(design);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updatedData = blogDatas.data.filter(
        (blog) => blog.id !== deleteIndex,
      );
      blogDatas.setData(updatedData);
      setShowPopup(false);
      setDeleteIndex(null);
    }
  };

  const openPopup = (index: string) => {
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
        <DeletePopup handleDelete={handleDelete} closePopup={closePopup} />
      )}

      {blogDatas.data.length === 0 && (
        <EmptyBlogContainer
          message="There are no blogs created yet. Please create a new blog to get started!"
          buttonMessage="Create Blog"
        />
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
                <Link href={`/blog-details/${item.id}`}>Read More</Link>
              </button>
              <button className={design.readButton}>
                <Link href={`/edit-blog/${item.id}`}>Edit</Link>
              </button>
              <button
                className={design.readButton}
                onClick={() => openPopup(item.id)}
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

export default DataContainer;
