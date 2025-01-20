import ContentContainer from '@/Components/ContentContainer';
import ViewBlog from '@/Components/ViewBlog';

const blogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const parameter = await params;
  return (
    <>
      <ContentContainer
        design="rounded-md w-full max-h-[549px] sm:max-h-[750px] w-[600px] md:w-[760px] lg:w-[990px] max-h-[820px] xl:w-[1450px]
       2xl:w-[1530px] max-h-[1209px] 2xl:max-h-[1500px] min-[1800px]:w-[1890px] p-8 overflow-y-auto"
      >
        <ViewBlog id={parameter.id} />
      </ContentContainer>
    </>
  );
};

export default blogPage;
