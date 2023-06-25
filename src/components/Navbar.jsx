import { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import Logo from "../assets/img/logo.jpg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="w-screen flex place-content-between md:px-16 md:py-6 px-8 py-4 bg-white fixed z-10 border-b-2">
            <div className='w-28 md:w-40'>
                <a href="#home"><img src={Logo} alt="" className='bg-cover' /></a>
            </div>
            <div style={{right: isOpen ? "0" : "-100%", transition: ".3s"}} className="text-center md:border-x-0 border-x-2 bg-white md:py-0 py-12 w-2/3 h-screen md:flex md:h-full gap-8 md:justify-end absolute md:static top-0">
                <a href="#services" className='py-4 text-sky-800 after:content-[""] after:block after:scale-x-0 after:duration-300 after:ease-linear block text-base after:border-2 after:border-solid after:border-sky-600 hover:duration-300 hover:text-sky-600 md:hover:after:scale-50 hover:after:scale-[20%] md:py-0'>Layanan</a>
                <a href="#join" className='py-4 text-sky-800 after:content-[""] after:block after:scale-x-0 after:duration-300 after:ease-linear block text-base after:border-2 after:border-solid after:border-sky-600 hover:duration-300 hover:text-sky-600 md:hover:after:scale-50 hover:after:scale-[20%] md:py-0'>Bergabung</a>
                <a href="#about" className='py-4 text-sky-800 after:content-[""] after:block after:scale-x-0 after:duration-300 after:ease-linear block text-base after:border-2 after:border-solid after:border-sky-600 hover:duration-300 hover:text-sky-600 md:hover:after:scale-50 hover:after:scale-[20%] md:py-0'>Tentang Kami</a>
                <a href="https://wa.me/6283838719333" className='py-4 md:py-0 text-sky-800 after:content-[""] after:block after:scale-x-0 after:duration-300 after:ease-linear block text-base after:border-2 after:border-solid after:border-sky-600 hover:duration-300 hover:text-sky-600 md:hover:after:scale-50 hover:after:scale-[20%]'>Kontak</a>
            </div>
            <AiOutlineMenu className='z-10 md:hidden cursor-pointer' onClick={toggle} />
        </nav>
    )
}

export default Navbar;