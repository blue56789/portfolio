import { useState } from 'react';
import burgerMenu from '../assets/burger-menu.svg';
export default function Navbar() {
    const [menu, setMenu] = useState(false);
    return (
        <nav className="fixed top-0 w-full bg-white border-b border-black shadow-lg z-10 transition-all">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center uppercase">
                <div className='flex justify-between items-center w-full'>
                    <label className='sm:hidden'>
                        <input type="checkbox" onChange={(e) => setMenu(e.target.checked)} className='hidden' />
                        <img src={burgerMenu} alt="Menu" className='size-8 m-4' />
                    </label>
                    <a href="#home" className="p-4 text-xl hover:text-neutral-500 transition-all">Yash Sawant</a>
                </div>
                <div className={`${menu ? 'max-h-screen' : 'max-h-0'} sm:max-h-screen transition-all duration-500 overflow-hidden sm:overflow-visible flex sm:flex flex-col sm:flex-row`}>
                    <a href="#projects" className="p-4 hover:text-neutral-500 transition-all" onClick={() => setMenu(false)}>Projects</a>
                    <a href="#contact" className="p-4 hover:text-neutral-500 transition-all" onClick={() => setMenu(false)}>Contact</a>
                </div>
            </div>
        </nav>
    )
}