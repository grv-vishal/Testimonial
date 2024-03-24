import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";


const App = () => {
  return (
      <div className="flex flex-col justify-center items-center w-[100%] h-[100%]">
         <div className="text-center">
          <h2 className="font-bold text-4xl mt-4">Our Testimonials</h2>
          <div className="bg-violet-400 h-[4px] w-[150px] mx-auto mt-2"></div>
          <Testimonials reviews={reviews}/>
         </div>
         
      </div>
      );
};

export default App;
