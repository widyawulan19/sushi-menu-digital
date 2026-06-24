import Navbar from "../components/Navbar";
import NavButton from "../components/NavButton";

import img from '../assets/loca.png'

export default function AboutPage() {

    return (
        <div className='bg-primary h-screen w-[360px] pt-4 pb-4 flex flex-col items-center gap-4 font-[Lora] text-white'>
            <Navbar />

            <div className="t w-[80%] h-[80vh] mb-4 mt-4 flex flex-col items-center overflow-y-auto">
                <div className='flex flex-col items-center justify-center  mt-6 mb-6 gap-4'>
                    <h1 className='w-full text-lg text-center font-bold '>ABOUT HARUKI</h1>

                    <p className='w-full text-justify text-sm leading-7'>
                        At Tokyo Restaurant, we celebrate authentic Japanese cuisine with carefully selected ingredients and traditional preparation techniques. <br /> From handcrafted sushi rolls to comforting ramen bowls, every dish is prepared with attention to detail and respect for Japanese culinary heritage.
                    </p>
                </div>

                {/* <div className=" w-full">
                    <h3 className="bg-red-950 text-center p-1.5">Why Choose Us</h3>
                    <div className=" p-2 text-sm">
                        <p> Fresh ingredients daily</p>
                        <p> Skilled chefs</p>
                        <p> Signature specialties</p>
                        <p> Authentic recipes</p>
                    </div>
                </div> */}

                <div className=" w-full">
                    <h3 className="bg-red-950 text-center p-1.5">Opening Hours</h3>
                    <div className=" p-2 text-sm flex flex-col items-center justify-center mt-3 mb-3">
                        <p> Monday - Friday</p>
                        <p className="text-lg mt-1.5"> 11:00 AM — 10:00 PM</p>
                    </div>
                    <div className=" p-2 text-sm  flex flex-col items-center justify-center mt-3 mb-3">
                        <p> Saturday - Sunday</p>
                        <p className="text-lg mt-1.5"> 11:00 AM — 11:00 PM </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 w-full">
                    <h3 className="bg-red-950 text-center p-1.5 w-full">Our Location</h3>
                    <p className='w-full text-center text-xs mt-3'>
                        📍 42 Floral Street, Covent Garden, London WC2E 9DA, United Kingdom
                    </p>
                    <img src={img} alt="" />
                </div>

            </div>

            <NavButton />
        </div>
    )
}
