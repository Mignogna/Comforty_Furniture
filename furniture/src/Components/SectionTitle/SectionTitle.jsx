

const SectionTitle = ({ title, textAlign }) => {

    return (
        <div>
            <div className={`w-full flex items-center  ml-[6rem] mt-[-13rem] 
                ${textAlign === 'center' ? `justify-${textAlign}` : 'justify-start'}`}>
                <h3 className="text-4xl text-yellow-900 font-semibold items-center font-inter capitalize">{title}</h3>
            </div>
        </div>
    )
}

export default SectionTitle