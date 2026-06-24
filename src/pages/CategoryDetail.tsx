import { useNavigate, useParams } from 'react-router-dom';
import menu from '../data/menu.json'
import type { MenuCategory } from '../types/menu'
import Navbar from '../components/Navbar';
import NavButton from '../components/NavButton';
import { IoArrowBackOutline } from "react-icons/io5";

//image import 
import img1 from '../assets/category1.png'
import img2 from '../assets/category2.png'
import img3 from '../assets/category3.png'
import img4 from '../assets/category5.png'
import img5 from '../assets/category4.png'
import img6 from '../assets/category6.png'
import bgDetail from '../assets/bg-detail2.png'

type CategoryName = | "SUSHI" | "SIGNATURE ROLLS" | "APPETIZERS" | "RAMEN" | "SPECIALS" | "DRINKS";




const data = menu as MenuCategory[];

export default function CategoryDetail() {
    const { name } = useParams();
    const navigate = useNavigate();

    // FUNGSI NAVIGATE TO WELCOME 
    const navigateToCategory = () => {
        navigate('/category')
    }

    //FUNGSI MENDAPATKAN DATA PER CATEGORY
    const category = data.find(
        (c) => c.category.toLowerCase() === name?.toLowerCase()
    );

    if (!category) {
        return <div className='p-6'>Category not found</div>
    }

    const categoryPic: Record<CategoryName, string> = {
        "SUSHI": img1,
        "SIGNATURE ROLLS": img2,
        "APPETIZERS": img3,
        "RAMEN": img4,
        "SPECIALS": img5,
        "DRINKS": img6
    }

    return (
        <div
            className=" flex flex-col items-center justify-between w-[360px]  h-screen gap-2.5 pt-4 pb-4 border shadow-md border-primary bg-cover bg-no-repeat text-white"
            style={{ backgroundImage: `url(${bgDetail})` }}
        >

            <Navbar />

            <div className=' h-[80vh] w-[90%] overflow-y-auto font-[Lora] flex flex-col items-center pt-4'>

                {/* HEADER CATEGORY  */}
                <div className='w-[90%] flex flex-col justify-start'>
                    <h1 className='text-card font-bold mb-2 bg-red-950 w-fit px-3 pl-0 flex items-center justify-start gap-5 '>
                        <IoArrowBackOutline className='text-2xl' onClick={navigateToCategory} />
                        {category.category}
                    </h1>
                    {/* <p className='text-xs mb-3'>
                        {category.catDesc}
                    </p> */}
                </div>

                {/* IMAGE CATEGORY  */}
                <div className='flex items-center justify-center w-[97%]'>
                    <img src={categoryPic[category.category as CategoryName]} alt="" />
                </div>


                <div className='w-[95%] grid gap-4 '>
                    {category.items.map((item) => (
                        <div
                            key={item.title}
                            className='flex items-center justify-between  border-b-gray-500 border-b pb-3 '
                        >
                            <div className='flex flex-col justify-start'>
                                <h3 className='font-semibold pb-0 mb-0'>{item.title}</h3>
                                <p className='text-gray-400 text-sm  w-[90%] text-left'>{item.desc}</p>
                            </div>
                            <span className='bg-red-600 py-1 px-2 text-lg rounded-md'>{item.price}</span>


                            {/* BADGE PICK  */}
                            {/* {item.pick.length > 0 && (
                                <p className='text-yellow-400 text-xs mt-2'>
                                    {item.pick.includes("chef") && "Chef pick"}
                                    {item.pick.includes("guest") && "Gues favourite"}
                                </p>
                            )} */}
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full flex items-center justify-center gap-6'>
                <NavButton />
            </div>


        </div>
    )
}