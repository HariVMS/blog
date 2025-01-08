import { UserContext } from "@/app/layout";
import { useContext, useState } from "react";

export default function blogPage({data}:any) {

    const user = useContext(UserContext);

    
//   const router = useRouter();
  const [description , setDescription]=useState('')
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    // console.log(formObject.author);
    // console.log(formObject.title);
    // console.log("description",description); 
    console.log(formObject);
    user.setData(formObject)
    // router.push({
    //     pathname:"/",
    //     query:{
    //         author:`${formObject.author}`,
    //     }
    // })
    // {author: 'hari', title: 'tt', descriptions: 'sdsd', img: 'im'}
  };

  return (
    <>
        <form
          className="deatils flex flex-col gap-2 w-full "
          onSubmit={handleSubmit}
        >
          <label htmlFor="author">Author :</label>
          <input type="text" name="author" id="author" placeholder="Author" />
          <label htmlFor="title">Title :</label>
          <input type="text" name="title" id="title" placeholder="Title" />
          <label htmlFor="Descriptions">Description : </label>
          <textarea
            name="descriptions"
            id="Descriptions"
            value={description}
            onChange={(e)=>{
                setDescription(e.target.value)
            }}
            placeholder="Description"
          ></textarea>
          <label htmlFor="img">Image URL : </label>
          <input type="text" name="img" id="img" placeholder="image Url" />
          <div>
            <button className="bg-blue-600 mt-2 p-2 rounded-md text-white">
              Add Data
            </button>
          </div>
        </form>
    </>
  );
}
