import PostsList from "../componots/PostsList";
import img1 from "../../public/post1.jpeg";
import img from "../../public/blog pic.jpeg";
import img2 from "../../public/post2.jpeg";
import img4 from "../../public/blog pic 2.jpeg";
import img3 from "../../public/65aafbf0c75a4375e7c5198d_angelos-michalopoulos-S3Rs0DcvvK0-unsplash-p-500.jpeg";
import img5 from "../../public/65aafbf0c75a4375e7c51961_logan-weaver-Oyw8t2UTUWQ-unsplash-p-500.jpeg";
import Header from "./Header";
import { useEffect } from "react";
import HeroSlide from "../componots/HeroSlide";

const postsData = [
  { img: img1, text: "the 10 best exercises to do in your park", id: 1 },
  { img: img2, text: "Healthy breakfast ideas", id: 2 },
  { img: img3, text: "My lift changing experience", id: 3 },
  { img: img4, text: "The benefits of HIIT Workouts", id: 4 },
  { img: img5, text: "Can you have a good workout at home ? ", id: 5 },
];

function Blog() {
     useEffect(() => {
       window.scrollTo({ top: 0 });
     }, []);
    return (
      <div>
        <div className=" md:py-6 md:px-2">
          <Header />
        </div>
        <div
          role="img"
          aria-label="Decorative background image"
          aria-hidden="true"
          style={{ backgroundImage: `url("${img}")` }}
          className="  flex justify-center items-center  my-20 rounded-lg shadow-xl bg-cover bg-center w-screen h-screen"
        >
          <div className=" w-full h-[200px] skew-y-2  items-center  justify-center  flex  text-center bg-[#cfddee]">
            <h2 className="  text-omar text-7xl font-semibold">Blog </h2>
          </div>
        </div>
        <div className=" my-5 px-4   md:px-0 gap-6 grid grid-cols-1 md:grid-cols-3">
          {postsData.map((card) => (
            <PostsList key={card.id} card={card} />
          ))}
        </div>
        <div>
          <HeroSlide />
        </div>
      </div>
    );
}

export default Blog
