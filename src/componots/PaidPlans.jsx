import img1 from "../../public/65aafbf0c75a4375e7c51918_Rectangle 439 (1).png"
import img2 from "../../public/65aafbf0c75a4375e7c518db_logan-weaver-brI7nj3kju8-unsplash-p-500.jpeg"
import img3 from "../../public/65aafbf0c75a4375e7c5192b_logan-weaver-RBbwGEKBbD8-unsplash-p-500.jpeg"
import PaidPlansItem from "./PaidPlansItem";
const workoutData = [
  {
    time: "3 DAYS A WEEK",
    type: "$ 19.99 USD",
    name: "Home Burn",
    img: img1,
    id: 1,
  },
  {
    time: "30 DAYS",
    type: "$ 29.99 USD",
    name: "Shedded Meal Plan",
    img: img3,
    id: 2,
  },
  {
    time: "7 DAYS A WEEK",
    type: "$ 89.99 USD",
    discount: "$ 129.99 USD",
    name: "High Itensity Training",
    img: img2,
    id: 3,
  },
];
function PaidPlans() {
  return (
    <div className="  py-44 px-4 bg-omar grid grid-cols-1 md:grid-cols-3 gap-10 ">
      {workoutData.map((card) => (
        <PaidPlansItem key={card.id} card={card} />
      ))}
    </div>
  );
}

export default PaidPlans;
