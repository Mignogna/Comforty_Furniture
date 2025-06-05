const brands = [
    {
        id: 1,
        image: "/src/Components/Brand/brand1.jpg",
    },
    {
        id: 2,
        image: "/src/Components/Brand/brand2.png"
    },
    {
        id: 3,
        image: "/src/Components/Brand/brand3.png"
    },
    {
        id: 4,
        image: "/src/Components/Brand/brand4.jpg"
    },
    {
        id: 5,
        image: "/src/Components/Brand/brand5.png"
    },


]

const Brand = () => {
    return (
        <div className="lg:container ">
            <div className="grid grid-cols-5">
                {brands?.map((brand) => (
                    <div key={brand?.id} className="brand_item">
                        <img src={brand?.image} alt={brand?.id} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Brand