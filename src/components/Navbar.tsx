import { NavLink } from "react-router-dom";
import { IoHome, IoAlertCircleOutline } from "react-icons/io5";
import logo from '../assets/haruki-logo.png'




export default function Navbar() {
    const linkStyle = "px-4 py-2 text-red-700";


    return (
        <nav className="w-full">
            <div className="w-full flex items-center justify-between gap-4">
                <NavLink to="/" className={linkStyle}><IoHome size={20} /></NavLink>
                <div className="w-[120px] h-[50px]">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <NavLink to="/about" className={linkStyle}><IoAlertCircleOutline size={20} /></NavLink>
            </div>
        </nav>
    )
}