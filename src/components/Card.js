import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
import { FaCircleChevronLeft,FaCircleChevronRight } from "react-icons/fa6";

function Card(props){
    const info=props.review;
    const LeftHandler=props.LeftHandler;
    const RightHandler=props.RightHandler;
    const surpriseHandler=props.surpriseHandler;

    
    return (
        <div className="flex flex-col relative p-10 justify-center items-center">
            {/* <div className="absolute z-[10] top-[-6rem] mx-auto left-[40px]">
                <img 
                 className="aspect-square rounded-full w-[140px] h-[140px] z-[20]"
                 src={info.image}/>
                 <div className=" absolute rounded-full w-[140px] h-[140px] bg-violet-500 z-[-10]
                 left-[10px] top-[-7px]"></div>
            </div> */}
            
            <div className="md:absolute z-[10] md:top-[-6rem] top-[40px] mx-auto md:left-[40px]">
                <img 
                 className="aspect-square rounded-full w-[140px] h-[140px] z-[20] border-violet-400 border-[9px] shadow-2xl"
                 src={info.image}/>
            </div>

            <div className="text-center">
                <p className="font-bold text-3xl">{info.name}</p>
                <div className="text-violet-400  mt-2 text-sm">{info.job.toUpperCase()}</div>
            </div>

            <div className="flex flex-col justify-center items-center space-y-4 my-7">
                   <FaQuoteLeft className="text-violet-400"/>

                <div className="text-slate-500">{info.text}</div>

                   <FaQuoteRight className="text-violet-400"/>
            </div>

            <div className="flex flex-row justify-center items-center gap-6">
                <button className="text-4xl text-violet-400 hover:text-violet-500" onClick={()=>LeftHandler()}>
                   <FaCircleChevronLeft/>
                </button>
                <button className="text-4xl text-violet-400 hover:text-violet-500" onClick={()=>RightHandler()}>
                   <FaCircleChevronRight/>
                </button>
            </div>

            <div className="bg-violet-400 my-8 rounded-md text-white font-bold hover:bg-violet-500 
            transition-all duration-200 cursor-pointer px-10 py-2" onClick={()=>surpriseHandler()}>Surprise Me</div>
        </div>
    )
}
export default Card;