import { Armchair, Check, Heart, Info, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router";

function Navbar() {
    return (
        <div>
            {/* navbar top */}
            <div className="navbar_top flex justify-center items-center bg-[#d2691e] h-[45px] w-full">
                <div className="lg:container flex justify-between items-center p-16">
                    <p className="flex items-center gap-2 text-sm font-inter font-normal text-white"><Check />Free on all orders over $50</p>
                    <div className="navbar_top_right flex items-center gap-12">
                        <select defaultValue="Server location" className="bg-none h-[30px] w-[50px] text-sm font-inter font-normal text-gray-200">
                            <option>Eng</option>
                            <option>Port</option>
                        </select>
                        <button><Link className="text-sm text-white font-inter font-normal">Faqs</Link></button>
                        <button><Link className="flex items-center gap-1 text-sm text-white font-inter font-normal"><Info />Need Help?</Link></button>
                    </div>
                </div>
            </div>
            {/* navbar middle */}
            <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px]">
                <div className="lg:container grid grid-cols-3 items-center p-16">
                    <div className="logo_wrapper">
                        <Link to="/" className="text-3xl text-black font-inter font-normal flex items-center gap-2"><Armchair size="2rem" color="#d2691e" />Comforty</Link>
                    </div>
                    <div className="search-box">
                        <form action="#" className="max-w-[443px] h-[44px] relative">
                            <input type="text" placeholder="Search here..." className="w-full h-full bg-white rounded-lg pl-4" />
                            <button className="absolute to-50% right-4 translate-y-1/2"><Search size="22px" color="#272343" /></button>
                        </form>
                    </div>
                    {/* navbar middle right*/}
                    <div className="navbar_middle_right flex items-center gap-4">
                        <button className="btn">
                            <ShoppingCart /> Cart <div className="badge badge-sm bg-yellow-500">2</div>
                        </button>
                        <button className="btn capitalize">
                            <Heart />
                        </button>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1"><User /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a><Link>Account</Link></a></li>
                                <li><a><Link>Logout</Link></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* navbar bottom */}
            <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white p-12 border-b-[1px] border-[#ele3e5]">
                <div className="lg:container flex items-center justify-between">
                    <div className="navbar-bottom-left flex items-center gap-12">
                        <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-5 text-[#868597]"><Menu />All Categories</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Armchair</a></li>
                                <li><a>Wing Chair</a></li>
                                <li><a>Chair</a></li>
                                <li><a>Desk Chair</a></li>
                                <li><a>Park Bench</a></li>
                                <li><a>Sofa</a></li>
                            </ul>
                        </div>

                        <nav className="flex items-center gap-8  ">
                            <NavLink to="/" className="text-sm text-[#868597]  hover:text-yellow-500 font-inter font-medium">Home</NavLink>
                            <NavLink className="text-sm text-[#868597] hover:text-yellow-500 font-medium font-inter">Shop</NavLink>
                            <NavLink className="text-sm text-[#868597]  hover:text-yellow-500 font-medium font-inter">Product</NavLink>
                            <NavLink className="text-sm text-[#868597]  hover:text-yellow-500 font-medium font-inter">Pages</NavLink>
                            <NavLink className="text-sm text-[#868597]  hover:text-yellow-500 font-medium font-inter">About</NavLink>
                        </nav>
                    </div>
                    <div className="navbar-bottom-right">
                        <p className="text-sm text-[#868597] font-inter font-normal">Contact:
                            <span className="text-[#636270]"> (808)555-0111</span></p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar