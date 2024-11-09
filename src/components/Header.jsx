// node Modules
import { useState } from "react";

// components 
import Navbar from "./Navbar";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-white to-white/70 shadow-md">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,3rf,1fr]">
                <h1>
                    <a href="/" className="logo">
                        <img src="/images/logo.jpg" className="bg-gray-500 rounded-md p-1 shadow-md" width={50} height={50} alt="Prakhar Srivastava" />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button
                        className="menu-btn md:hidden text-gray-700 bg-gray-100 rounded-lg p-2 hover:bg-gray-200 active:bg-gray-300 transition-transform"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>
                <a
                    href="#contact"
                    className="btn btn-secondary max-md:hidden md:justify-self-end text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors rounded-lg shadow-md"
                >
                    Contact Me
                </a>
            </div>
        </header>
    );
};

export default Header;
