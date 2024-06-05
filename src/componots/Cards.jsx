import CardItem from "./CardItem";
import img1 from "../../public/65aafbf0c75a4375e7c51918_Rectangle 439 (1).png"
import img2 from "../../public/65aafbf0c75a4375e7c51962_logan-weaver-24LpwagvuDY-unsplash-p-500.jpeg"
import img3 from "../../public/65aafbf0c75a4375e7c51961_logan-weaver-Oyw8t2UTUWQ-unsplash-p-500.jpeg"
import img4 from "../../public/65aafbf0c75a4375e7c51912_Rectangle 441.png"

const data = [
  {
    img: img1,
    heading: "Learn to live a healthy life ",
    headingTwo: "with fitness",
    subHeading:
      "Changing your lifestyle with a fast paced life may seem hard or impossible, but with small steps each week you can achieve your dream physique and live a healthier life. ",
    id: 1,
  },
  {
    img: img2,
    heading: "Understand how to do ",
    headingTwo: "excercises properly",
    subHeading:
      "Just going to the gym and lifting weights won't make you healthy, after all it may even cause some harm to your body. We teach proper exercise techniques ",
    id: 2,
  },
  {
    img: img3,
    heading: "Track your progress ",
    headingTwo: "weekly",
    subHeading:
      "We're tracking your goal weight with body fat measures, weight and general feeling. You may have the same body weight but feel 10x better. ",
    id: 3,
  },
  {
    img: img4,
    heading: "Follow a specific plan ",
    headingTwo: "made just for you",
    subHeading:
      "Everyone is different, and we know it. That's why all of our clients get a programme specific just for their lifestyle and body tipe. This give the best possible results. ",
    id: 4,
  },
];
function Cards() {
    return (
        <div className=" px-2 md:px-0  my-2 grid grid-cols-1 md:grid-cols-2 gap-10">
            {data?.map(card => <CardItem key={card.id} card={card}/>)}
            
        </div>
    )
}

export default Cards
