import img1 from "../../public/65aafbf0c75a4375e7c5198d_angelos-michalopoulos-S3Rs0DcvvK0-unsplash-p-500.jpeg"
import img2 from "../../public/65aafbf0c75a4375e7c5198f_logan-weaver-BvXh8e5M8YM-unsplash-p-500.jpeg"
import img3 from "../../public/65aafbf0c75a4375e7c51992_guillaume-bolduc-cfmBbDcCAQo-unsplash-p-500.jpeg"
import FreeWorkoutItem from "./FreeWorkoutItem";

const workoutData= [
    { time : "30 MINUTES",
type : "free",
name : "The Perfect Outdoor Workout" ,
img : img1 ,
id : 1

},
    { time : "1 HOUR",
type : "free",
name : "Back Day" ,
img : img2 ,
id : 2

},
    { time : "40 MINUTES",
type : "free",
name : "The Ultimate Abs Tanata" ,
img : img3 ,
id : 3

},

]
function FreeWorkouts() {
    return (
        <div className=" my-20 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {workoutData.map(card=> <FreeWorkoutItem key={card.id} card={card}/>)}

            
        </div>
    )
}

export default FreeWorkouts
