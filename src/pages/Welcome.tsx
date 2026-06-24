import { useNavigate } from "react-router-dom";
import welcomeImg from '../assets/WELCOME.png'

export default function Welcome() {
    const navigate = useNavigate();

    const navigateToMenu = () => {
        navigate('/category')
    }
    return (
        <div className=" flex flex-col justify-end w-[360px]  h-screen gap-2.5 p-4  border shadow-md border-primary bg-cover bg-no-repeat text-white"
            style={{ backgroundImage: `url(${welcomeImg})` }}
        >

            {/* <NavButton to="/category" label="EXPLORE OUR MENU" /> */}
            <div className="py-2 w-full flex flex-col items-center justify-center gap-4">
                <button className="font-[Lora] font-bold text-lg bg-red-700 px-8 py-2 rounded-3xl cursor-pointer hover:bg-red-900 active:bg-red-900"
                    onClick={navigateToMenu}
                >
                    EXPLORE OUR MENU
                </button>
                <p className="text-center text-xs text-gray-400">created by luminousid</p>
            </div>
        </div>
    )
}