import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../data/navLinks";

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    useEffect(() => {
        if (openMobileMenu) {
            document.body.classList.add("max-md:overflow-hidden");
        } else {
            document.body.classList.remove("max-md:overflow-hidden");
        }
    }, [openMobileMenu]);

    return (
        <div className="fixed z-50 top-4 left-0 right-0 flex justify-center w-full px-4">
            <nav className="flex items-center justify-between w-full max-w-6xl mx-auto px-6 py-4 border border-indigo-600/30 rounded-full text-black text-sm bg-slate-200/50 backdrop-blur-lg shadow-[0_0_10px_rgba(79,70,229,0.65)]">
                <a href="#">
                    <img className="h-8 w-auto" src="/assets/logo.svg" alt="Logo" />
                </a>
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                            className={`transition-transform duration-300 ease-out text-indigo-600 pb-1 hover:-translate-y-1 ${
                        link.href === window.location.pathname
                        ? "border-b-3 border-indigo-600 shadow-[0_4px_8px_rgba(79,70,229,0)]"
                        : "border-transparent"
                        }`}
                    >
                    {link.name}
                    </a>
                    ))}
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <button className="text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300 ease-out px-4 py-2 border border-indigo-600 rounded-full">Sign in</button>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 hover:shadow-[0_0_20px_rgba(79,70,229,0.8)] transition-shadow duration-300 rounded-full text-white">Get started</button>
                </div>
            
               <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="md:hidden text-white">
                    {openMobileMenu ? <XIcon size={24} /> : <MenuIcon size={24} />}
               </button>
            </nav>    
            {openMobileMenu && (
                <div className="absolute top-20 left-4 right-4 flex flex-col items-center gap-4 p-6 bg-slate-900/90 backdrop-blur-lg border border-slate-700 rounded-3xl md:hidden shadow-2xl">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            onClick={() => setOpenMobileMenu(false)} 
                            className="text-white hover:text-indigo-400 text-lg font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </div>    
    );
}