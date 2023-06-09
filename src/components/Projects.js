import Image from "next/image"

const Projects = () => {
    return (
        <div className="bg-[#FF7420]" id="project">
            <div className="container mx-auto pt-16 pb-24 text-white xl:px-0 px-8">
                <div className="flex items-center justify-evenly sm:flex-row flex-col">
                    <div className="text-center w-max sm:mb-0 mb-8">
                        <p className="w-[190px] mb-3 font-medium">Evaluation And Signing Of The Contract</p>
                        <p className="text-sm">Step 1</p>
                        <Image src="/icons/dot.png" className="mx-auto translate-y-5 sm:block hidden" width={35} height={35} alt="" />
                    </div>
                    <div className="text-center w-max sm:mb-0 mb-8">
                        <p className="w-[190px] mb-3 font-medium">Preparation Of The Work Plan</p>
                        <p className="text-sm">Step 2</p>
                        <Image src="/icons/dot.png" className="mx-auto translate-y-5 sm:block hidden" width={35} height={35} alt="" />
                    </div>
                    <div className="text-center w-max sm:mb-0 mb-8">
                        <p className="w-[190px] mb-3 font-medium">Implementation Of Quality Works</p>
                        <p className="text-sm">Step 3</p>
                        <Image src="/icons/dot.png" className="mx-auto translate-y-5 sm:block hidden" width={35} height={35} alt="" />
                    </div>
                    <div className="text-center w-max sm:mb-0 mb-8">
                        <p className="w-[190px] mb-3 font-medium">Delivering The Project To The Customer</p>
                        <p className="text-sm">Step 4</p>
                        <Image src="/icons/dot.png" className="mx-auto translate-y-5 sm:block hidden" width={35} height={35} alt="" />
                    </div>
                </div>
                <div className="w-full h-1 rounded-full bg-white mb-20 sm:block hidden"></div>

                <div>
                    <div className="flex items-center justify-between sm:flex-row flex-col">
                        <p className="xl:text-6xl text-5xl text-[#191A19] font-semibold sm:mb-0 mb-5">Featured Project</p>
                        <ul className="flex items-center text-lg font-medium xl:overflow-hidden sm:overflow-auto pb-2 sm:flex-row flex-col">
                            <li className="text-[#191A19] sm:mr-6 sm:mb-0 mb-3 relative shrink-0">All Works <div className="absolute -bottom-2 rounded-full w-full h-1 bg-[#191A19]"></div></li>
                            <li className="sm:mr-6 sm:mb-0 mb-3">Construction</li>
                            <li className="sm:mr-6 sm:mb-0 mb-3">Architecture</li>
                            <li className="sm:mr-6 sm:mb-0 mb-3">Building</li>
                            <li className="sm:mr-6 sm:mb-0 mb-3">Renovations</li>
                            <li>Interior</li>
                        </ul>
                    </div>

                    <div className="sm:mt-20 mt-10 flex items-center overflow-x-scroll w-full scrollbar-hide">

                        <div className="bg-[url('/img/slide1.png')] shrink-0  w-[410px] mr-5 h-[550px] rounded-xl flex  flex-col justify-end items-center text-center" >
                            <div className="font-medium mb-5">
                                <p className="text-xl mb-2">Skyskuy Tower</p>
                                <p>Renovation & Architecture</p>
                            </div>
                        </div>
                        <div className="bg-[url('/img/slide2.png')] w-[410px] shrink-0 mr-5 h-[550px] rounded-xl flex  flex-col justify-end items-center text-center" >
                            <div className="font-medium mb-5">
                                <p className="text-xl mb-2">The Fallingwater House</p>
                                <p>Building & Interior</p>
                            </div>
                        </div>
                        <div className="bg-[url('/img/slide3.png')] w-[410px] shrink-0 mr-5 h-[550px] rounded-xl flex  flex-col justify-end items-center text-center" >
                            <div className="font-medium mb-5">
                                <p className="text-xl mb-2">The Orange Apartemen</p>
                                <p>Construction & Interior</p>
                            </div>
                        </div>
                        <div className="bg-[url('/img/slide4.png')] w-[410px] shrink-0 mr-5 h-[550px] rounded-xl flex  flex-col justify-end items-center text-center" >
                            <div className="font-medium mb-5">
                                <p className="text-xl mb-2">Skyskuy Tower</p>
                                <p>Renovation & Architecture</p>
                            </div>
                        </div>
                        <div className="bg-[url('/img/slide5.png')] w-[410px] shrink-0 mr-5 h-[550px] rounded-xl flex  flex-col justify-end items-center text-center" >
                            <div className="font-medium mb-5">
                                <p className="text-xl mb-2">Skyskuy Tower</p>
                                <p>Renovation & Architecture</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-end">
                        <p className="flex items-center text-black mt-6 text-lg font-medium">Explore All Projects <Image src="/icons/arrow-right-black.png" alt="" width={30} height={0} className="ml-2" /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects