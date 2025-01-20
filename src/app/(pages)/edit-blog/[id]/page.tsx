import BlogForm from '@/Components/BlogForm';
import ContentContainer from '@/Components/ContentContainer';

const editBlog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const parameter = await params;
  return (
    <>
      <ContentContainer
        design={`bg-[#e5e8eb] flex flex-wrap p-8 rounded-md gap-3 justify-center `}
      >
        <BlogForm mode="edit" id={parameter.id} />
      </ContentContainer>
    </>
  );
};

export default editBlog;
