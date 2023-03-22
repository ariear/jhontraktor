import Image from "next/image"

const Nav = () => {
    return (
        <header className="bg-[#191A19] py-5">
            <nav className="flex container mx-auto items-center text-white justify-between">
                <Image src="/icons/logo.png" width={240} height={0} alt="" />
                <ul className="flex items-center font-medium">
                    <li className="mr-8">Home</li>
                    <li className="mr-8">About</li>
                    <li className="mr-8">Service</li>
                    <li>Project</li>
                </ul>
                <div className="flex items-center font-medium">
                    <p className="flex items-center mr-8"><Image src='/icons/globe.png' className="mr-2" alt="" width={25} height={0} /> English <Image src='/icons/row.png' alt="" className="ml-3 rotate-90" width={10} height={0} /></p>
                    <button className="bg-[#FF7420] py-3 px-6 rounded-xl">Contact Us</button>
                </div>
            </nav>
        </header>
    )
}

export default Nav