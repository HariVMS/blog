import ContentContainer from '@/Components/ContentContainer';
import ViewBlog from '@/Components/ViewBlog';

const blogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const parameter = await params;
  return (
    <>
      <ContentContainer design="rounded-md w-full max-h-[549px] p-8 overflow-y-auto">
        <ViewBlog id={parameter.id} />
      </ContentContainer>
    </>
  );
};

export default blogPage;
