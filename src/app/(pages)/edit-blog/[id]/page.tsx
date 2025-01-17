import ContentContainer from '@/Components/ContentContainer';
import EditBlog from '@/Components/EditBlog';

const editBlog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const parameter = await params;
  return (
    <>
      <ContentContainer design={null}>
        <EditBlog id={parameter.id} />
      </ContentContainer>
    </>
  );
};

export default editBlog;
