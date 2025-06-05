import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";


const Banner = () => {
    const products = [
        {
            id: 1,
            title: "Best Furniture Collection for your interior",
            subtitle: "Welcome to armchairs",
            image: "/src/Components/Banner/wood.armchair.png",
        },
        {
            id: 2,
            title: "Best Furniture Collection for your interior",
            subtitle: "Welcome to wing Chairs",
            image: "/src/Components/Banner/wing.chair.png",
        },
        {
            id: 3,
            title: "Best Furniture Collection for your interior",
            subtitle: "Welcome to Chairs",
            image: "/src/Components/Banner/chair.png",
        },
        {
            id: 4,
            title: "Best Furniture Collection for your office",
            subtitle: "Welcome to Desk chairs",
            image: "/src/Components/Banner/desk_chair.png",
        },
        {
            id: 5,
            title: "Best Furniture Collection for your garden",
            subtitle: "Welcome to Park Bench",
            image: "/src/Components/Banner/parkBench.png",
        },
        {
            id: 6,
            title: "Best Furniture Collection for your comfort",
            subtitle: "Welcome to Sofa",
            image: "/src/Components/Banner/sofa.png",
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <div className="lg:container">
            <div className="slider-container  ml-16 mt-[-16rem] w-[90%] h-full">
                <Slider {...settings}>
                    {products?.map((product) => (
                        <div key={product?.id} className="banner_slide_item">
                            {/* banner text */}
                            <div className="banner_text p-24">
                                <p className="text-sm font-inter text-yellow-950 uppercase font-normal">{product?.subtitle}</p>
                                <h3 className="text-6xl text-yellow-950 font-inter capitalize leading-16 max-w-[931px] w-full font-bold mb-5">{product?.title}</h3>
                                <buttton className="flex gap-3 capitalize max-w-[171px] w-full items-center justify-center h-[52px] bg-[#d2961e] rounded-lg text-white cursor-pointer text-lg">shop now <MoveRight /></buttton>
                            </div>
                            {/* banner image */}
                            <div className="banner_image w-full h-full flex items-center justify-end">
                                <img className="mr-30 h-[30rem]" src={product?.image} alt={product?.title} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Banner