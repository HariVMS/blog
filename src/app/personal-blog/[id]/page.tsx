import ContentContainer from "@/Components/ContentContainer";
import ViewBlog from "@/Components/ViewBlog";

export default async function blogPage({ params }: { params: { id: string } }) {
  const id = await params.id;
  return (
    <>
      <ContentContainer design="rounded-md w-2/3 ml-56">
        <ViewBlog id={id} />
      </ContentContainer>
    </>
  );
}
