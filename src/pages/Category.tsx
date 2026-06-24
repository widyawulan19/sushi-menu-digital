import Navbar from '../components/Navbar';
import NavButton from '../components/NavButton';
import menu from '../data/menu.json'
import type { MenuCategory } from '../types/menu'
import { useNavigate } from 'react-router-dom'


// image import 
import img1 from '../assets/category1.png'
import img2 from '../assets/category2.png'
import img3 from '../assets/category3.png'
import img4 from '../assets/category5.png'
import img5 from '../assets/category4.png'
import img6 from '../assets/category6.png'

type CategoryName = | "SUSHI" | "SIGNATURE ROLLS" | "APPETIZERS" | "RAMEN" | "SPECIALS" | "DRINKS";



const data = menu as MenuCategory[];

export default function Category() {
    const navigate = useNavigate();

    const navigateToCategory = (name: string) => {
        navigate(`/category/${encodeURIComponent(name)}`);
    }

    //pakai encodeURIComponent? karena kategori bisa mengandung spasi

    const categoryPic: Record<CategoryName, string> = {
        "SUSHI": img1,
        "SIGNATURE ROLLS": img2,
        "APPETIZERS": img3,
        "RAMEN": img4,
        "SPECIALS": img5,
        "DRINKS": img6
    };

    return (
        <div className='bg-primary h-screen w-[360px] pt-4 pb-4 flex flex-col items-center justify-between gap-4'>
            <Navbar />

            <div className='flex flex-col items-center justify-center text-text font-[Lora] gap-2'>
                <h3 className='text-section'>DISCOVER OUR MENU</h3>
                <p className='w-[80%] text-center text-xs'>
                    Browse authentic Japanese dishes crafted by our experienced chefs.
                </p>
            </div>
            <div className="p-6 flex flex-col gap-3  h-[75vh] overflow-y-auto">
                {data.map((item, index) => (
                    <div className="list-card" key={index}>
                        <div
                            className="list-img"
                            onClick={() => navigateToCategory(item.category)}
                        >
                            <img
                                src={categoryPic[item.category as CategoryName]}
                                alt={item.category}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className=' w-full flex items-center justify-center gap-6'>
                <NavButton />
            </div>


        </div>
    )
}