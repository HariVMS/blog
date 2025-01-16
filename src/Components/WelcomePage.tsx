"use client";
import { useRouter } from "next/navigation";

const WelcomePage = () => {
  const router = useRouter();

  const handleEnterClick = () => {
    router.push("/create-blog"); // Navigate to the "create-blog" page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to the Blog
      </h1>
      <button
        onClick={handleEnterClick}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all"
      >
        Enter
      </button>
    </div>
  );
};

export default WelcomePage;
