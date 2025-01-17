import ContentContainer from '@/Components/ContentContainer';
import CreateBolg from '@/Components/CreateBlog';

const createBlog = () => {
  return (
    <>
      <ContentContainer
        design={`bg-[#e5e8eb] flex flex-wrap p-8 rounded-md gap-3 justify-center `}
      >
        <CreateBolg />
      </ContentContainer>
    </>
  );
};

export default createBlog;
