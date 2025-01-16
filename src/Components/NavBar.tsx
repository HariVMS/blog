import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="h-24 bg-gray-400 flex flex-row gap-8 pl-10 p-5 items-center">
        <Link href="/">
          <Image
            src="/assets/blog.png"
            width={50}
            height={50}
            alt="Blog Logo"
            className="cursor-pointer"
          />
        </Link>
        <Link href="/view-blog">
          <button className="p-2.5">Home</button>
        </Link>
        <Link href="/create-blog">
          <button className="p-2.5">Create</button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
