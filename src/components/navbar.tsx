import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from 'react';
import { Link } from "react-scroll";

export const Navbar = () => {
    const [isNavbarFixed, setNavbarFixed] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            setNavbarFixed(true);
          } else {
            setNavbarFixed(false);
          }
        const sectionElements = document.querySelectorAll('section');
        
        sectionElements.forEach((sectionElement) => {
          const { top, bottom} = sectionElement.getBoundingClientRect();
          const offset = window.innerHeight * 0.5; // Adjust the offset as needed
          const id = sectionElement.getAttribute('id')  || '';
  
          if (top - offset <= 0 && bottom - offset > 0) {
            setActiveSection (id);
          }
        });
      };
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);




const [nav, setNav] = useState(false);
const handleNav = () => {
    setNav(!nav);
};



return (
    <nav  className={`text-white  items-center z-50 flex h-10 bg-[#222222] ${isNavbarFixed ? 'fixed top-0 left-0 right-0' : ''}`}>
        <h1 className="   text-[#FF6000] text-3xl title pl-3 sm:ml-[25%] mr-[190px]">FoodKa</h1>
        <ul className="md:flex hidden">
            <li className="px-6 cursor-pointer font-medium"><Link to="home" smooth={true} duration={500} spy={true}  isDynamic={true}> Home</Link></li>
            <li className="px-6 cursor-pointer  font-medium"><Link to="about" smooth={true} duration={500} spy={true} isDynamic={true}> About</Link></li>
            <li className="px-6 cursor-pointer font-medium"><Link to="appdev" smooth={true} duration={500} spy={true} isDynamic={true}> Catalog</Link></li>
            <li className="px-6 cursor-pointer font-medium"><Link to="contact" smooth={true} duration={500} spy={true}  isDynamic={true}> Contact Us</Link></li>
            
        </ul>
        <button className="bg-[#FF6000] ml-10 font-medium rounded-lg hover:bg-transparent hover:text-[#FF6000] px-2 py-1">Order Now</button>
        <div onClick={handleNav} className=" ms-auto md:hidden">
            {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}

        </div>
        <div className={nav ? "fixed left-0 top-0 py-10" : "fixed left-[-100%]"}>
            <ul>
             <li className="px-6 cursor-pointer py-6 border-b w-[200%] font-medium"><Link to="home" smooth={true} duration={500} spy={true} isDynamic={true}> Home</Link></li>
                <li className="px-6 cursor-pointer py-6 border-b w-[200%] font-medium"><Link to="about" smooth={true} duration={500} spy={true} isDynamic={true}> About</Link></li>
                <li className="px-6 cursor-pointer py-6 border-b w-[200%] font-medium"><Link to="appdev" smooth={true} duration={500} spy={true} isDynamic={true}> Services</Link></li>
                <li className="px-6 cursor-pointer py-6 border-b w-[200%] font-medium"><Link to="contact" smooth={true} duration={500} spy={true}  isDynamic={true}> Contact Us</Link></li>
               
            </ul>
        </div>


    </nav>

)
}