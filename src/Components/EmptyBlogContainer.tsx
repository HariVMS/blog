import Link from 'next/link';

const EmptyBlogContainer = ({
  message,
  buttonMessage,
}: {
  message: string;
  buttonMessage: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[570px] gap-6 p-6 w-full bg-gray-50">
      <p className="text-xl font-semibold text-gray-700 text-center max-w-md">
        {message}
      </p>
      <Link href={'/create-blog'}>
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg transform transition-all hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
          {buttonMessage}
        </button>
      </Link>
    </div>
  );
};

export default EmptyBlogContainer;
