import Image from "next/image"
import CardExcess from "./CardExcess"

const Main = () => {
    return (
        <div className="bg-[url('/img/main.png')] bg-cover bg-center py-32" id="home" >
            <div className="text-white relative container mx-auto">
                <p className="text-6xl mb-6 font-semibold w-[450px] leading-[60px]">We Prepare For The <o className="text-[#FF7420]">Future</o></p>
                <p className="w-[480px]">We provide the best architectural design, contruction, and building maintance services for you.</p>
                <div className="flex items-center mt-16">
                    <button className="py-3 px-6 rounded-lg bg-[#FF7420] text-white flex items-center font-medium mr-5">Our Services <Image src='/icons/right-bunder.png' className="ml-2" width={22} height={0} alt="" /></button>
                    <button className="py-3 px-6 rounded-lg bg-white flex text-black items-center font-medium">View Project</button>
                </div>
            
                <CardExcess />
            </div>
        </div>
    )
}

export default Main