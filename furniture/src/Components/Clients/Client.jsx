import { Armchair, User } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Client = () => {
    const clientSays = [
        {
            id: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper leo a viverra molestie. Donec ultrices sit amet magna in interdum. Lorem ipsum dolor sit ame, consectetur adipiscing elit. Mauris semper leo a viverra molestie. Donec ultrices sit amet magna in interdum.",
            name: "Jonh Doe",
            position: "Doctor"
        },
        {
            id: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper leo a viverra molestie. Donec ultrices sit amet magna in interdum. Lorem ipsum dolor sit ame, consectetur adipiscing elit. Mauris semper leo a viverra molestie. Donec ultrices sit amet magna in interdum.",
            name: "Helen Migs",
            position: "CEO, Company",
        },
        {
            id: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper leo a viverra molestie. Donec ultrices sit amet magna in interdum. Lorem ipsum dolor sit ame, consectetur adipiscing elit. Mauris semper leo a viverra molestie. Donec ultrices sit amet magna in interdum.",
            name: "Michael Douglas",
            position: "Actor"
        },
        {
            id: 4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper leo a viverra molestie. Donec ultrices sit amet magna in interdum. Lorem ipsum dolor sit ame, consectetur adipiscing elit. Mauris semper leo a viverra molestie. Donec ultrices sit amet magna in interdum.",
            name: "Elizabeth Taylor",
            position: "Teacher"
        },
        {
            id: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper leo a viverra molestie. Donec ultrices sit amet magna in interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper leo a viverra molestie. Donec ultrices sit amet magna in interdum.",
            name: "George Cloney",
            position: "Dentist"
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,

    };
    return (
        <div className="lg:container  mt-56 mb-8">
            <SectionTitle title="What clients says about us"></SectionTitle><Armchair className="ml-6" size="3rem" color="#d2691e" />

            <div className="slider-container mt-8 features_slider w-[90.3%] h-full">
                <Slider {...settings}>
                    {clientSays?.map((client, index) => (
                        <div key={index} className="p-4 client-say ">
                            <p className="text-base font-inter text-yellow-600">{client?.description}</p>
                            <div className="flex items-center">
                                <h4 className="text-yellow-900"><User size="4rem" /></h4>
                                <div>
                                    <h4 className="text-2xl text-yellow-600 font-inter font-medium mb-1 ml-3">{client?.name}</h4>
                                    <p className="text-base text-yellow-600 font-interfont-normal ml-3 ">{client?.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Client;