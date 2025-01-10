import ContentContainer from "@/Components/ContentContainer";
import { UserContext } from "@/Components/HomeContainer";
import ViewBlog from "@/Components/ViewBlog";
import { useContext } from "react";

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
