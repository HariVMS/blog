import Link from "next/link";
const NavBar = () => {
  return (
    <>
      <div className="h-24 bg-gray-400 flex flex-row gap-8 pl-10 p-5">
        <Link href="/">
          <button className="p-2.5">MYBlog</button>
        </Link>
        <Link href={"/"}>
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
