'use client';
import Link from "next/link";

export default function NavBar() {
    
    return (
      <>
      <div className="nav h-24 bg-gray-400 flex flex-row gap-8 pl-10 p-5">
        <Link href='/'>
        <button className="p-2.5">MYBlog</button></Link>
        <Link href={'/'}><button className="p-2.5">Home</button></Link>
        <Link href='/create'><button className="p-2.5">Create</button></Link>
        
      </div>
      <div>
      </div>
      </>
    );
  }
   