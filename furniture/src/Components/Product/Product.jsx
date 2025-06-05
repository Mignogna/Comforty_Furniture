import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import wingChair1 from "../../assets/wingChair1.jpg";
import deskChair1 from "../../assets/deskChair1.jpg";
import deskChair2 from "../../assets/deskChair2.jpeg";
import parkBench1 from "../../assets/parkBench1.jpg";
import parkBench2 from "../../assets/parkBench2.jpg";
import parkBench3 from "../../assets/parkBench3.jpeg";
import parkBench4 from "../../assets/parkBench4.webp";
import armchair1 from "../../assets/armchair1.jpeg";
import chair1 from "../../assets/chair1.jpg";
import chair2 from "../../assets/chair2.jpg";
import chair3 from "../../assets/chair3.jpeg";
import chair4 from "../../assets/chair4.jpg";
import sofa1 from "../../assets/sofa1.jpg";
import sofa2 from "../../assets/sofa2.jpg";
import sofa3 from "../../assets/sofa3.jpeg";
import sofa4 from "../../assets/sofa4.webp"
import { ShoppingCart } from "lucide-react";


const Product = () => {
    const [active, setActive] = useState({ id: 0, product: "all" })
    const productTitle = [
        {
            id: 0,
            title: "all",
            product: 'all',
        },
        {
            id: 1,
            title: "newest",
            product: 'newest',
        },
        {
            id: 2,
            title: "trending",
            product: 'trending',
        },
        {
            id: 3,
            title: "best seller",
            product: 'best_seller',
        },
    ]
    const products = [
        {
            title: "chairs",
            status: "new",
            image: chair1,
            currentPrice: "$250",
            price: "$290",
            product: "newest",
        },
        {
            title: "wing chairs",
            status: "Sales",
            image: wingChair1,
            currentPrice: "$510",
            price: "$340",
            product: "trending"
        },
        {
            title: "chairs",
            status: "New",
            image: chair2,
            currentPrice: "$200",
            product: "best_seller"
        },
        {
            title: "sofa",
            status: "New",
            image: sofa3,
            currentPrice: "$2350",
            product: "newest",
        },
        {
            title: "sofa",
            status: "New",
            image: sofa1,
            currentPrice: "$1780",
            product: "trending",
        },
        {
            title: "armchair",
            status: "New",
            image: armchair1,
            currentPrice: "$1050",
            product: "best_seller"
        },
        {
            title: "park bench",
            status: "New",
            image: parkBench1,
            currentPrice: "$900",
            product: "newest",
        },
        {
            title: "sofa",
            products: "891 products",
            image: sofa4,
            currentPrice:"$1590",
            product: "trending",
        },
        {
            title: "park bench",
            products: "613 products",
            image: parkBench3,
            currentPrice: "$850",
            product: "best_seller",
        },
        {
            title: "desk chairs",
            status: "new",
            products: "798 products",
            image: deskChair1,
            currentPrice: "$285",
            product: "newest",
        },
        {
            title: "sofa",
            products: "112 products",
            image: sofa2,
            currentPrice: "$1750",
            product: "trending",
        },
        {
            title: "park bench",
            products: "231 products",
            image: parkBench2,
            currentPrice:"$790",
            product: "best_seller,"
        },
        {
            title: "armchairs",
            status:"new",
            products: "523 products",
            image: chair3,
            currentPrice:"$1180",
            product: "newest",
        },
        {
            title: "desk chairs",
            status: "sale",
            image: deskChair2,
            currentPrice: "$350",
            product: "trending",
        },
        {
            title: "chairs",
            status: "Sales",
            image: chair4,
            currentPrice: "$250",
            price: "$290",
            product: "best_seller",
        },
        {
            title: "park bench",
            status: "Sales",
            image: parkBench4,
            currentPrice: "$450",
            price: "$490",
            product: "best_seller",
        },
    ];

        const productFilter = active?.product === "all"? products 
    : products.filter(item => item.product === active?.product); 
       
    return (
        <div className="lg:container mx-auto mt-56">
            <div className="flex flex-col items-center justify-center">
                <SectionTitle title="our product" textAlign={"center"}></SectionTitle>
                <div className="flex items-center justify-center gap-7 mt-[-9rem] productTypes">
                    {
                        productTitle?.map((title, index) => (
                            <button key={title?.id}
                                onClick={() => setActive({
                                    id: title?.id,
                                    product: title?.product
                                })}
                                className={`text-base font-inter uppercase cursor-pointer  ${active?.id === index ? "text-yellow-600" : "text-yellow-900"
                                    }`}>{title?.title}</button>
                        ))
                    }
                </div>
            </div>

            <div className="grid grid-cols-4 items-center w-[95%] mx-auto">
                {
                productFilter?.map((product,index) =>(
  <div key={index} className="p-6" >
                                <div className="feature_image  relative">
                                    <img className="h-72 w-full object-fill mb-4  rounded-lg shadow-2xl" src={product?.image} alt={product?.title} />
                                    {
                                        product?.status && (
                                            <div className="absolute top-4 left-4 bg-yellow-600 text-white rounded-lg px-2 py-1">
                                                <button className="font-bold text-sm font-inter">{product?.status}</button>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="feature_content">
                                    <div className="flex items-center justify-between w-full">
                                        <h4 className="text-base text-yellow-900 capitalize font-inter font-normal mb-2">{product?.title}</h4>
                                        <span className="bg-yellow-600 h-[44px] w-[44px] rounded-lg flex items-center justify-center"><ShoppingCart size="1.5rem" color="white" /></span>
                                    </div>
                                    <p className="text-base flex items-center gap-2 text-yellow-700 font-semibold font-inter">
                                        {products?.price}
                                        {
                                            product?.currentPrice && (
                                                <span className="text-yellow-900 text-xl">{product?.currentPrice}</span>
                                            )
                                        }
                                    </p>
                                </div>
                            </div>
                ))
                }
            </div>
        </div>
    )
}

export default Product;