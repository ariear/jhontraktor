import Image from "next/image"

const Footer = () => {
    return (
        <footer className="bg-[#191A19] text-white xl:px-0 px-8">
            <footer className="container mx-auto py-8">
                <div className="flex items-center justify-between mb-8 flex-wrap">
                    <Image src='/icons/logo-white.png' className="sm:mb-0 mb-5" alt="" width={200} height={0} />
                    <div className="flex items-center">
                        <p className="font-light">Subscribe To Our Newslatter :</p>
                        <input type="text" placeholder="Enter your email address" className="bg-transparent ml-4 text-sm border-b border-[#FFFFFF50] pb-1 w-[230px]" name="" id="" />
                        <Image src='/icons/arrow-white.png' alt="" width={15} height={0} className="-translate-x-3" />
                    </div>
                </div>
                <div className="flex items-start justify-between flex-wrap">
                    <div className="xl:m-0 m-2">
                        <p className="mb-4">About Us</p>
                        <p className="text-sm font-light xl:w-[450px] mb-5">We have the confidence to provide the best service for you, with the support of Professional and Certified HR that we currently have and the high-quality materials we use and structured work techniques, we will be able to realize timely completion of work.</p>
                        <div className="flex items-center">
                            <Image src='/icons/linked.png' alt="" width={25} className="mr-2" height={0} />
                            <Image src='/icons/Medium.png' alt="" width={25} className="mr-2" height={0} />
                            <Image src='/icons/Instagram.png' alt="" width={25} className="mr-2" height={0} />
                            <Image src='/icons/Twitter.png' alt="" width={25} className="mr-2" height={0} />
                            <Image src='/icons/fb.png' alt="" width={25} className="mr-2" height={0} />
                        </div>
                    </div>
                    <div className="xl:m-0 m-2">
                        <p className="mb-4">Office</p>
                        <p className="text-sm font-light">18 Office Park Building 21th Floor Unit C.</p>
                        <p className="text-sm font-light w-[180px]">Jl. TB Simatupang Kav. 18, Jakarta Selatan ,12520</p>
                    </div>
                    <div className="xl:m-0 m-2">
                        <p className="mb-4">Contact</p>
                        <p className="text-sm font-light">Email : contact@jhontracktor.co</p>
                        <p className="text-sm font-light">Phone : (+62) 877-2469-7246</p>
                    </div>
                    <div className="xl:m-0 m-2">
                        <p className="mb-4">Link</p>
                        <p className="text-sm font-light">Home</p>
                        <p className="text-sm font-light">About Us</p>
                        <p className="text-sm font-light">Service</p>
                        <p className="text-sm font-light">Project</p>
                    </div>
                </div>
            </footer>
                <p className="text-xs text-center text-[#FFFFFF50] py-3">Copyright © 2023 CandyAP. All Rights Reserved & Slicing By ArieAr </p>
        </footer>
    )
}

export default Footer