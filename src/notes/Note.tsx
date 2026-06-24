import { BiSolidFoodMenu } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaHouseCircleExclamation } from "react-icons/fa6";

type Tab = "menu" | "recommendation" | "about";

interface NavigasiBottomProps {
    activeTab: Tab;
    setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
}

const NavigasiBottom = ({
    activeTab,
    setActiveTab,
}: NavigasiBottomProps) => {
    return (
        <div className="navigasi-bottom">
            <button
                className={activeTab === "menu" ? "active" : ""}
                onClick={() => setActiveTab("menu")}
            >
                <BiSolidFoodMenu />
            </button>

            <button
                className={activeTab === "recommendation" ? "active" : ""}
                onClick={() => setActiveTab("recommendation")}
            >
                <FaStar />
            </button>

            <button
                className={activeTab === "about" ? "active" : ""}
                onClick={() => setActiveTab("about")}
            >
                <FaHouseCircleExclamation />
            </button>
        </div>
    );
};

export default NavigasiBottom;