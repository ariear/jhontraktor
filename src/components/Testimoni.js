import Image from "next/image"

const Testimoni = () => {
    return (
        <div className="bg-[#191A19] text-white text-center py-16 lg:px-0 px-5" id="service" >
            <p className="font-semibold text-2xl text-[#FF7420] mb-5">What Our Client Says</p>
            <p className="lg:w-[850px] mx-auto mb-4">I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.</p>
            <p className="font-medium mb-2">Tom DeLonge</p>
            <p className="text-sm mb-7">CEO, Lexmark</p>
            <div className="flex items-center mx-auto w-max">
                <p className="flex items-center text-sm mr-5"><Image src='/icons/row.png' alt="" width={7} height={0} className="rotate-180 mr-3" /> Prev</p>
                <Image src='/img/avatar1.png' alt="" width={45} height={0} className="opacity-70" />
                <Image src='/img/avatar2.png' alt="" width={70} height={0} className="mx-4 border-4 border-[#FF7420] rounded-full p-1" />
                <Image src='/img/avatar3.png' alt="" width={45} height={0} className="opacity-70" />
                <p className="flex items-center text-sm ml-5">Next <Image src='/icons/row.png' alt="" width={7} height={0} className="ml-3" /></p>
            </div>
        </div>
    )
}

export default Testimoni