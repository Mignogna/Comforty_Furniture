import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import sofa1 from "../../assets/sofa1.jpg";
import chair1 from "../../assets/chair1.jpg";
import wingChair1 from "../../assets/wingChair1.jpg";
import deskChair1 from "../../assets/deskChair1.jpg";
import parkBench1 from "../../assets/parkBench1.jpg";
import armchair1 from "../../assets/armchair1.jpeg";

const Categories = () => {
    const categories = [
        {
            title: "chairs",
            products: "891 products",
            image: chair1,

        },
        {
            title: "wing chairs",
            products: "613 products",
            image: wingChair1,

        },
        {
            title: "desk chairs",
            products: "798 products",
            image: deskChair1,

        },
        {
            title: "sofa",
            products: "112 products",
            image: sofa1,

        },
        {
            title: "park bench",
            products: "231 products",
            image: parkBench1,

        },
        {
            title: "armchairs",
            products: "523 products",
            image: armchair1,

        },
    ]
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "24px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div>
            <div className="lg:container mx-auto mt-56">
                <SectionTitle title="Top categories" ></SectionTitle>
                <div className="slider-container features_slider w-[90%] h-full">
                    <Slider {...settings}>
                        {categories?.map((category, index) => (
                            <div key={index} className="p-6 " >
                                <div className="feature_image  relative">
                                    <img className="h-72 w-full object-fill mb-4  rounded-lg shadow-2xl" src={category?.image} alt={category?.title} />
                                    <div className="text-yellow-900 font-inter capitalize text-base mb-2">
                                        <h4 className="font-semibold">{category?.title}</h4>
                                        <p>{category?.products}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Categories;