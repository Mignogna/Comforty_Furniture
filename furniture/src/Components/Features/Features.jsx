import { ShoppingCart } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chair2 from "../../assets/chair2.jpg";
import chair3 from "../../assets/chair3.jpeg";
import chair4 from "../../assets/chair4.jpg";
import deskChair2 from "../../assets/deskChair2.jpeg";
import sofa2 from "../../assets/sofa2.jpg";
import sofa3 from "../../assets/sofa3.jpeg";
import parkBench2 from "../../assets/parkBench2.jpg";


const Features = () => {
    const features = [
        {
            title: "chairs",
            status: "Sales",
            image: chair2,
            currentPrice: "$250",
            price: "$290"
        },
        {
            title: "wing chairs",
            status: "Sales",
            image: chair3,
            currentPrice: "$310",
            price: "$340"
        },
        {
            title: "chairs",
            status: "New",
            image: chair4,
            currentPrice: "$200",
        },
        {
            title: "desk chairs",
            status: "New",
            image: deskChair2,
            currentPrice: "$350",
        },
        {
            title: "sofa",
            status: "New",
            image: sofa2,
            currentPrice: "$1180",
        },
        {
            title: "sofa",
            status: "New",
            image: sofa3,
            currentPrice: "$1350",
        },
        {
            title: "park bench",
            status: "New",
            image: parkBench2,
            currentPrice: "$900",
        },
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div>
            <div className="lg:container mx-auto">
                <SectionTitle title="Featured Products" ></SectionTitle>
                <div className="slider-container features_slider w-[90%] h-full">
                    <Slider {...settings}>
                        {features?.map((feature, index) => (
                            <div key={index} className="p-6" >
                                <div className="feature_image  relative">
                                    <img className="h-72 w-full object-fill mb-4  rounded-lg shadow-2xl" src={feature?.image} alt={feature?.title} />
                                    {
                                        feature?.status && (
                                            <div className="absolute top-4 left-4 bg-yellow-600 text-white rounded-lg px-2 py-1">
                                                <button className="font-bold text-sm font-inter">{feature?.status}</button>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="feature_content">
                                    <div className="flex items-center justify-between w-full">
                                        <h4 className="text-base text-yellow-900 capitalize font-inter font-normal mb-2">{feature?.title}</h4>
                                        <span className="bg-yellow-600 h-[44px] w-[44px] rounded-lg flex items-center justify-center"><ShoppingCart size="1.5rem" color="white" /></span>
                                    </div>
                                    <p className="text-base flex items-center gap-2 text-yellow-700 font-semibold font-inter">
                                        {feature?.price}
                                        {
                                            feature?.currentPrice && (
                                                <span className="text-yellow-900 text-xl">{feature?.currentPrice}</span>
                                            )
                                        }
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Features