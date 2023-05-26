import Image from "next/image"

const Contact = () => {
    return (
        <div className="bg-[url('/img/bluri.png')] bg-cover bg-center relative">
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[#191A19] to-[#FFFFFF00]"></div>
            <div className="container mx-auto text-white py-16 z-10 relative">
                <p className="font-semibold px-2 text-2xl sm:text-6xl text-center mb-8">Leading Way In Building & Civil Construction</p>
                <div className="flex items-center justify-evenly mb-14 lg:px-0 px-3 sm:flex-row flex-col">
                    <p className="flex items-center text-lg font-medium sm:mb-0 mb-4"><Image src='/icons/check.png' alt="" width={20} height={0} className="mr-2" /> Proffesional Staff</p>
                    <p className="flex items-center text-lg font-medium sm:mb-0 mb-4"><Image src='/icons/check.png' alt="" width={20} height={0} className="mr-2" /> 100% Satisfacion</p>
                    <p className="flex items-center text-lg font-medium sm:mb-0 mb-4"><Image src='/icons/check.png' alt="" width={20} height={0} className="mr-2" /> Accurate Testing</p>
                    <p className="flex items-center text-lg font-medium"><Image src='/icons/check.png' alt="" width={20} height={0} className="mr-2" /> Transparent Pricing</p>
                </div>

                <div className="flex mx-auto w-full lg:w-max xl:flex-row flex-col items-center lg:items-start">
                    <div className="bg-[#FF7420] p-8 rounded-xl lg:w-[800px] w-[90%] xl:mr-10 xl:mb-0 mb-7">
                        <p className="font-medium text-lg mb-4">Request A Quote</p>
                        <p className="font-light mb-4">Complete control over products allow us to our customers the best quality prices and services. We take great pride in everything that we do in Jhontraktor</p>
                        <div className="flex items-center mb-3">
                            <input type="text" name="name" placeholder="Name" className="w-full py-4 pl-9 rounded-xl mr-3" id="" />
                            <input type="text" name="email" placeholder="Email" className="w-full py-4 pl-9 rounded-xl" id="" />
                        </div>
                        <div className="flex items-center mb-3">
                            <input type="text" name="phone" placeholder="Phone" className="w-full py-4 pl-9 rounded-xl mr-3" id="" />
                            <select name="" id="" className="text-gray-400 w-full py-4 pl-9 rounded-xl">
                                <option value="">Select Your Service</option>
                                <option value="">Menggokil</option>
                                <option value="">Mengiyah</option>
                            </select>
                        </div>
                        <textarea name="" placeholder="Additional Details!" id="" cols="30" rows="6" className="w-full rounded-xl pt-4 pl-9 mb-3" ></textarea>
                        <button className="w-full bg-[#191A19] rounded-xl py-4 font-light">Submit Request</button>
                    </div>
                    <div className="bg-[#FF7420] xl:w-[400px] w-[90%] p-8 rounded-xl">
                        <p className="font-medium text-lg mb-4">Contact Info</p>
                        <div className="mb-6">
                            <p className="mb-1 font-light">Our Location</p>
                            <p className="text-sm font-extralight">18 Office Park Building 21th Floor Unit C. Jl. TB Simatupang Kav. 18, Jakarta Selatan ,12520</p>
                        </div>
                        <div className="mb-6">
                            <p className="mb-1 font-light">Quick Contact</p>
                            <p className="text-sm font-extralight">Email : (+62) 877-2469-7246</p>
                            <p className="text-sm font-extralight">Call Us : contact@jhontraktor.co</p>
                        </div>
                        <div className="mb-6">
                            <p className="mb-1 font-light">Opening Hours</p>
                            <p className="text-sm font-extralight">Monday - Friday</p>
                            <p className="text-sm font-extralight">09:00 AM - 06:00 PM</p>
                        </div>
                        <p className="text-lg font-light mb-12">Do You Have Any Question, Just Contact Us To Get Help!</p>
                        <button className="w-full bg-[#191A19] rounded-xl py-4 font-light">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact