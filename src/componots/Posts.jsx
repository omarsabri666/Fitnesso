import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img1 from "../../public/post1.jpeg"
import img2 from "../../public/post2.jpeg"
import img3 from "../../public/65aafbf0c75a4375e7c5198d_angelos-michalopoulos-S3Rs0DcvvK0-unsplash-p-500.jpeg";
import Links from "./Links";
import PostsList from "./PostsList";
import { useEffect } from "react";
const postsData = [
    {img:img1,text:"the 10 best exercises to do in your park",id:1},
    {img:img2,text:"Healthy breakfast ideas",id:2},
    {img:img3,text:"My lift changing experience",id:3},
]

function Posts() {
  useEffect(()=>{
    window.scrollTo({top:0})
  },[])
    return (
      <div className="  my-40">
        <div className=" text-center space-y-6">
          <h3 className=" text-omar text-6xl font-bold ">
            Read our tips and tricks
          </h3>
          <p className=" text-omar text-lg">
            We post a lot of free content around health fitness and general
            wellbeing. Make sure to <br /> check all of our posts down below.
          </p>
          <div className=" py-5"> 

          <Links text="VIEW ALL POSTS" type="big" to="/Blog" icon={<MdOutlineKeyboardArrowRight/>} />
          </div>
        </div>
        <div className=" gap-6 px-4 md:px-0 my-28 grid grid-cols-1 md:grid-cols-3">
            {postsData.map(card=> <PostsList key={card.id} card={card}/>)}

        </div>
      </div>
    );
}

export default Posts
