import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react"


const Delivery = () => {
    return (
        <div className="lg:container p-12 shadow-md rounded-b-lg  ">
            <div className="grid grid-cols-4">
                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p className="text-yellow-800"><Percent size="3rem" /></p>
                        <div>
                            <h4 className="text-base text-yellow-600  font-inter font-medium mb-2.5">Discount</h4>
                            <h5 className="text-sm text-yellow-900 font-inter font-normal">Every Week New Sales</h5>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p className="text-yellow-800"><Truck size="3rem" /></p>
                        <div>
                            <h4 className="text-base text-yellow-600 font-inter font-medium mb-2.5">Free Delivery</h4>
                            <h5 className="text-sm text-yellow-900 font-inter font-normal">100% Free For All Orders</h5>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p className="text-yellow-800"><Clock3 size="3rem" /></p>
                        <div>
                            <h4 className="text-base text-yellow-600 font-inter font-medium mb-2.5">Great Support 24/7</h4>
                            <h5 className="text-sm text-yellow-900 font-inter font-normal">We Care Your Experiences</h5>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p className="text-yellow-800"><ShieldCheck size="3rem" /></p>
                        <div>
                            <h4 className="text-base text-yellow-600 font-inter font-medium mb-2.5">Secure Payment</h4>
                            <h5 className="text-sm text-yellow-900 font-inter font-normal">100% Secure Payment Method</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery