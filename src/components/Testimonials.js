import { useState } from "react";
import Card from "./Card";

function Testimonials(props){
    const reviews=props.reviews;
    const [index,setIndex]=useState(0);
    
    function leftHandler(){
        if(index===0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }
    function rightHandler(){
        if(index===reviews.length-1)
          setIndex(0);
        else 
          setIndex(index+1);
    }

    function surpriseHandler(){
         let randmIndx=Math.floor(Math.random() * reviews.length);
         setIndex(randmIndx);
    }

    return(
        <div className="bg-gray-200 w-[85vw] md:w-[700px] my-10 rounded-md hover:shadow-xl transition-all duration-700">
            <Card review={reviews[index]} LeftHandler={leftHandler} RightHandler={rightHandler} surpriseHandler={surpriseHandler}/>
        </div>
    )
}
export default Testimonials;