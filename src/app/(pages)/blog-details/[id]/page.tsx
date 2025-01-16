import ContentContainer from "@/Components/ContentContainer";
import ViewBlog from "@/Components/ViewBlog";

const blogPage = async ({ params }: { params: { id: string } }) => {
  const id = await params.id;
  return (
    <>
      <ContentContainer design="rounded-md w-[900px] max-h-[549px] p-8 overflow-y-auto ml-56 ">
        <ViewBlog id={id} />
      </ContentContainer>
    </>
  );
};

export default blogPage;
