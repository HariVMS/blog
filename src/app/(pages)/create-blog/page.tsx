import BlogForm from '@/Components/BlogForm';
import ContentContainer from '@/Components/ContentContainer';

const createBlog = () => {
  return (
    <>
      <ContentContainer
        design={`bg-[#e5e8eb] flex flex-wrap p-8 rounded-md gap-3 justify-center `}
      >
        <BlogForm mode="create" />
      </ContentContainer>
    </>
  );
};

export default createBlog;
