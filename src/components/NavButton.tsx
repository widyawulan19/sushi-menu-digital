import { BiSolidFoodMenu } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaHouseCircleExclamation } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

export type Tab = "menu" | "recommendation" | "about";

const NavButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let activeTab: Tab = "menu";

    if (location.pathname === "/recommendation") {
        activeTab = "recommendation";
    } else if (location.pathname === "/about") {
        activeTab = "about";
    } else {
        // aktif untuk /category maupun /category/:name
        activeTab = "menu";
    }

    return (
        <div className="border border-bg-button bg-bg-button w-[80%] flex items-center justify-between px-10 h-[50px] rounded-3xl">
            <button
                onClick={() => navigate("/category")}
                className={`
                    flex items-center justify-center
                    w-10 h-10 rounded-2xl
                    transition-all duration-200
                    cursor-pointer

                    ${activeTab === "menu"
                        ? "bg-accent text-white shadow-md scale-110"
                        : "text-gray-400 hover:text-text active:text-text"
                    }
                `}
            >
                <BiSolidFoodMenu size={22} />
            </button>

            <button
                onClick={() => navigate("/recommendation")}
                className={`
                    flex items-center justify-center
                    w-10 h-10 rounded-xl
                    transition-all duration-200
                    cursor-pointer

                    ${activeTab === "recommendation"
                        ? "bg-accent text-white shadow-md scale-110"
                        : "text-gray-400 hover:text-white"
                    }
                `}
            >
                <FaStar size={20} />
            </button>

            <button
                onClick={() => navigate("/about")}
                className={`
                    flex items-center justify-center
                    w-10 h-10 rounded-xl
                    transition-all duration-200
                    cursor-pointer

                    ${activeTab === "about"
                        ? "bg-accent text-white shadow-md scale-110"
                        : "text-gray-400 hover:text-white"
                    }
                `}
            >
                <FaHouseCircleExclamation size={20} />
            </button>
        </div>
    );
};

export default NavButton;