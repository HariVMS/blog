import ContentContainer from "@/Components/ContentContainer";
import EditBlog from "@/Components/EditBLog";

const editBlog = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <ContentContainer design={null}>
        <EditBlog id={params.id} />
      </ContentContainer>
    </>
  );
};

export default editBlog;
