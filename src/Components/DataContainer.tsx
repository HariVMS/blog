import { UserContext } from '@/app/layout';
import React, { useContext } from 'react'

export const DataContainer = ({design}:any) => {
    const user = useContext(UserContext);
    console.log("Parent sss",user.data)
    
    
  return (
    <>
     <div className={design.parent}>
        <div className={design.child1}>
          <div className="image">
            <img
              className={design.img}
              src="https://static.vecteezy.com/system/resources/thumbnails/024/669/489/small_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg"
              alt="Scenic mountain landscape at sunset"
            />
          </div>
          <div className="heading">
            <h2 className={design.heading}>This is a Pic of Nature</h2>
          </div>
          <div className="content text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque odio
            provident voluptatem quibusdam placeat quam cumque quia, laborum
            veritatis ratione at, deserunt unde hic ducimus eum error molestias
            sed quas.
          </div>
          <div className={design.post}>
            <div className="posted">
              <h3>Posted By Someone</h3>
            </div>
            <div className="date">01/12/2024</div>
          </div>
          <div className="read">
            <button className={design.button}>Read More</button>
          </div>
        </div>
      </div></>
  )
}
