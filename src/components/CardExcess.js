import Image from "next/image"

const CardExcess = () => {
    return (
        <div className="bg-[#FF7420] text-white rounded-lg px-9 py-12 text-lg w-max absolute right-0 -bottom-56">
            <p className="flex items-center mb-4"><Image src='/icons/check.png' alt="" width={20} height={0} className="mr-3" /> Quality Control System, 100% Satisfaction Guarantee</p>
            <p className="flex items-center mb-4"><Image src='/icons/check.png' alt="" width={20} height={0} className="mr-3" /> Highly Proffesional Staff, Accurate Testing Processes</p>
            <p className="flex items-center"><Image src='/icons/check.png' alt="" width={20} height={0} className="mr-3" /> Unrivalled Workmanship, Proffesional and Qualified</p>
        </div>
    )
}

export default CardExcess