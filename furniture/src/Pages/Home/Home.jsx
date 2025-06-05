import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Categories from "../../Components/Categories/Categories";
import Delivery from "../../Components/Delivery/Delivery";
import Features from "../../Components/Features/Features";
import Product from "../../Components/Product/Product";
import Client from "../../Components/Clients/Client";


const Home = () => {
    return (
        <div>
            <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center">
                <Banner></Banner>
            </div>

            <div className="w-[95%] delivery m-auto min-h-[350px] bg-white">
                <Delivery></Delivery>
            </div>

            <div className="brand flex items-center justify-center w-full">
                <Brand></Brand>
            </div>

            <div className="w-full flex items-center justify-center">
                <Features></Features>
            </div>

            <div className="w-full flex items-center justify-center">
                <Categories></Categories>
            </div>

            <div className="w-full flex items-center justify-center">
                <Product></Product>
            </div>

            <div className="w-full flex items-center justify-center ">
                <Client></Client>
            </div>
        </div>
    )
}
export default Home;