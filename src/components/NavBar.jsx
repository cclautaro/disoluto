import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"


const NavBar = () => {

    const navLinkClass = (navData) =>
        navData.isActive ? 'text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-600' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';


    return (
        <nav className="bg-gray-800">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                        <a href="/" className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Disoluto</span>
                        </a>
                        <div className="hidden sm:ml-6 sm:block">
                            <ul className="flex space-x-4">
                                <NavLink className={navLinkClass} to='/'>Home</NavLink>
                                <NavLink className={navLinkClass} to='/category/sillas'>Sillas</NavLink>
                                <NavLink className={navLinkClass} to='/category/sillones'>Sillones</NavLink>
                                <NavLink className={navLinkClass} to='/cart'>Acerca De</NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="bg-gray-800 p-1 text-gray-400 hover:text-white"
                        >
                            <span className="sr-only">Carrito</span>
                            <CartWidget />
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    )
}



export default NavBar