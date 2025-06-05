import { Armchair, Facebook, FacebookIcon, Instagram, Twitter, Youtube, } from "lucide-react";
import { Link } from "react-router";


const Footer = () => {
  return (
    <footer className=" bg-[#f0f2f3] mt-5 border-t-2 border-[#e1e3e5]">
      <div className="logo_wrapper">
        <Link to="/" className="text-3xl text-black font-inter font-normal flex items-center gap-2 ml-12 mt-5"><Armchair size="2rem" color="#d2691e" />Comforty</Link>
      </div>
      <div className="footer mx-h-[343px] w-full pt-8 pb-5 pl-40">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-4">
            <div className="footer_wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium">CATEGORY</h3>
              <ul className="space-y-2 mt-4">
                <li><Link className="text-base  text-[#868597]  hover:text-yellow-500 font-inter font-normal">Armchair</Link></li>
                <li><Link className="text-base  text-[#868597]  hover:text-yellow-500 font-inter font-normal">Chair</Link></li>
                <li><Link className="text-base  text-[#868597]  hover:text-yellow-500 font-inter font-normal">Wing Chair</Link></li>
                <li><Link className="text-base  text-[#868597]  hover:text-yellow-500 font-inter font-normal">Desk Chair</Link></li>
                <li><Link className="text-base  text-[#868597]  hover:text-yellow-500 font-inter font-normal">Sofa</Link></li>
                <li><Link className="text-base  text-[#868597]  hover:text-yellow-500 font-inter font-normal">Park Bench</Link></li>
              </ul>
            </div>

            <div className="footer_wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium">SUPPORT</h3>
              <ul className="space-y-2 mt-4">
                <li><Link className="text-base  text-[#868597]  hover:text-yellow-500 font-inter font-normal">Help & Support</Link></li>
                <li><Link className="text-base  text-[#868597]  hover:text-yellow-500 font-inter font-normal">Terms & Condition</Link></li>
                <li><Link className="text-base  text-[#868597]  hover:text-yellow-500 font-inter font-normal">Privacy Policy</Link></li>
                <li><Link className="text-base  text-[#868597]  hover:text-yellow-500 font-inter font-normal">Help</Link></li>
              </ul>
            </div>

            <div className="newsletter">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium">NEWSLETTER</h3>
              <form className="max-w-[400px] w-full flex items-center gap-2 mt-4">
                <input type="email" placeholder="Enter your email..." className="max-w-[285px] outline-0 w-full h-[46px] bg-white border-[#e1e3e5] border-[1px] rounded-md pl-2" />
                <button type="submit" className="text-base text-white font-semibold w-[127px] h-[46px] bg-yellow-600 hover:bg-[#d2691e] rounded-lg cursor-pointer">SUBSCRIBE</button>
              </form>
            </div>

            <div className="ml-16">
              <p className="text-lg  text-[#9a9caa]  font-inter font-normal mb-4  max-w-[350px]">FOLLOW US: </p>
              <div className="footer_social flex items-center gap-2 ml-[-1rem]">
                <Link className="p-3 inline-block"><Facebook size="1.5rem"   className="text-[#868597] hover:text-yellow-600" /></Link>
                <Link className="p-3 inline-block"><Instagram size="1.5rem" className="text-[#868597] hover:text-yellow-600" /></Link>
                <Link className="p-3 inline-block"><Twitter size="1.5rem" className="text-[#868597] hover:text-yellow-600" /></Link>
                <Link className="p-3 inline-block"><Youtube size="1.5rem" className="text-[#868597] hover:text-yellow-600" /></Link>
              </div>
            </div>

          </div>
        </div>
      </div>


    </footer>
  )
}

export default Footer;