import Image from "next/image"

const CardExcess = () => {
    return (
        <div className="bg-[#FF7420] text-white rounded-lg xl:px-9 xl:py-12 px-7 py-8 xl:text-lg w-full sm:w-max absolute right-0 xl:-bottom-56 lg:-bottom-40 sm:-bottom-56 -bottom-72">
            <p className="flex items-center mb-4"><Image src='/icons/check.png' alt="" width={20} height={0} className="mr-3" /> Quality Control System, 100% Satisfaction Guarantee</p>
            <p className="flex items-center mb-4"><Image src='/icons/check.png' alt="" width={20} height={0} className="mr-3" /> Highly Proffesional Staff, Accurate Testing Processes</p>
            <p className="flex items-center"><Image src='/icons/check.png' alt="" width={20} height={0} className="mr-3" /> Unrivalled Workmanship, Proffesional and Qualified</p>
        </div>
    )
}

export default CardExcess