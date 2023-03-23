import Image from "next/image"
import { useState } from "react"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="bg-[#191A19] py-5 sticky top-0 z-30 xl:px-0 sm:px-8 px-5">
            <nav className="flex container mx-auto items-center text-white justify-between">
                <Image src="/icons/logo.png" width={240} height={0} alt="" />
                <ul className="lg:flex hidden items-center font-medium">
                    <li className="mr-8 relative hover:text-[#FF7420] group duration-300"><a href="#home">Home</a> <o className="absolute duration-300 left-0 -bottom-2 w-0 group-hover:w-full h-1 bg-[#FF7420] rounded-full"></o></li>
                    <li className="mr-8 relative hover:text-[#FF7420] group duration-300"><a href="#about">About</a> <o className="absolute duration-300 left-0 -bottom-2 w-0 group-hover:w-full h-1 bg-[#FF7420] rounded-full"></o></li>
                    <li className="mr-8 relative hover:text-[#FF7420] group duration-300"><a href="#service">Service</a> <o className="absolute duration-300 left-0 -bottom-2 w-0 group-hover:w-full h-1 bg-[#FF7420] rounded-full"></o></li>
                    <li className="relative hover:text-[#FF7420] group duration-300"><a href="#project">Project</a> <o className="absolute duration-300 left-0 -bottom-2 w-0 group-hover:w-full h-1 bg-[#FF7420] rounded-full"></o></li>
                </ul>
                <div className="lg:flex hidden items-center font-medium">
                    <p className="flex items-center mr-8"><Image src='/icons/globe.png' className="mr-2" alt="" width={25} height={0} /> English <Image src='/icons/row.png' alt="" className="ml-3 rotate-90" width={10} height={0} /></p>
                    <button className="bg-[#FF7420] py-3 px-6 rounded-xl">Contact Us</button>
                </div>
                <div className="lg:hidden block">
                    <Image src='/icons/menu.png' width={40} height={0} onClick={() => setIsOpen(!isOpen)} alt="" />
                    <ul className={`flex items-center justify-center flex-col font-medium fixed left-0 top-0 w-0 overflow-hidden duration-300 h-screen bg-[#FF7420] ${isOpen ? 'w-[75%]' : ''}`}>
                        <li className="relative group duration-300 mb-4"><a href="#home">Home</a> <o className="absolute duration-300 left-0 -bottom-2 w-0 group-hover:w-full h-1 bg-[#FF7420] rounded-full"></o></li>
                        <li className="relative group duration-300 mb-4"><a href="#about">About</a> <o className="absolute duration-300 left-0 -bottom-2 w-0 group-hover:w-full h-1 bg-[#FF7420] rounded-full"></o></li>
                        <li className="relative group duration-300 mb-4"><a href="#service">Service</a> <o className="absolute duration-300 left-0 -bottom-2 w-0 group-hover:w-full h-1 bg-[#FF7420] rounded-full"></o></li>
                        <li className="relative group duration-300 mb-4"><a href="#project">Project</a> <o className="absolute duration-300 left-0 -bottom-2 w-0 group-hover:w-full h-1 bg-[#FF7420] rounded-full"></o></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav