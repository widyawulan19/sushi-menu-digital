import menu from '../data/menu.json'
import type { MenuCategory, MenuItem } from '../types/menu'

// import image 
import img1 from '../assets/rec1.png'
// img group 
import img2 from '../assets/group 1.png'
import img3 from '../assets/group2.png'
import img4 from '../assets/group3.png'

import img5 from '../assets/rec8.png'
import img6 from '../assets/rec9.png'
import img7 from '../assets/rec10.png'
import img8 from '../assets/rec11.png'


const galleryImages = [
    img2,
    img5,
    img3,
    img6,
    img4,
    img7,
    img8,
];


import NavButton from '../components/NavButton';
import Navbar from '../components/Navbar';

const data = menu as MenuCategory[];

export default function Reccomendation() {
    const allItems: MenuItem[] = data.flatMap((c) => c.items);

    const ourPick = allItems.find((item) =>
        item.pick.includes("Best Set")
    )

    // const chefPick = allItems.filter((item) =>
    //     item.pick.includes("chef")
    // );

    // const guestPick = allItems.filter((item) =>
    //     item.pick.includes("guest")
    // );


    return (
        <div className='bg-primary h-screen w-[360px] pt-4 pb-4 flex flex-col items-center justify-between font-[Lora]'>
            <Navbar />

            <div className=' w-full h-[80vh] w-[90%] flex flex-col items-center overflow-y-auto mb-2'>
                {ourPick && (
                    <div className='flex flex-col items-center justify-center text-white mt-6 mb-6 gap-1.5'>
                        <h1 className='w-full text-xl text-center font-bold '>FEATURED MENU</h1>
                        <p className='w-[80%] text-center text-xs'>
                            Discover our most loved dishes, carefully selected by our chefs and customers.
                        </p>

                        {/* IMAGE  */}
                        <div className='flex items-center justify-center w-[90%]'>
                            <img src={img1} alt="cheft pick" />
                        </div>

                        {/* DESKRIPSI  */}
                        <div className='flex flex-col items-center justify-center w-[85%]'>
                            <h1 className='text-xl font-bold '>{ourPick.title}</h1>
                            <span className='text-red-700 text-2xl font-bold'>{ourPick.price}</span>
                            {/* <p className='text-center text-xs'>{ourPick.desc}</p> */}
                        </div>
                    </div>
                )}

                {/* GUEST  */}
                <div className="flex flex-col items-center w-[90%] mt-4 text-white">
                    <h2 className="bg-red-950 w-full text-center text-lg p-1 mb-2">
                        Guest Pick
                    </h2>

                    <p className="text-center text-xs mb-5">
                        The dishes our guests order again and again.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6">
                        {galleryImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="rounded-xl"
                            />
                        ))}
                    </div>
                </div>

            </div>


            <NavButton />

        </div>
    )

}