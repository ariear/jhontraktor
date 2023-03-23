import Image from "next/image"

const Experience = () => {
    return (
        <div className="bg-[#191A19]" id="about">
            <div className="container mx-auto pt-14">
                <div className="flex items-center mb-28">
                    <div className="flex items-center mr-4">
                        <p className="text-[#FF7420] text-4xl font-semibold mr-4">25+</p>
                        <p className="text-white w-[100px] font-medium">Years of Experience</p>
                    </div>
                    <div className="flex items-center mr-4">
                        <p className="text-[#FF7420] text-4xl font-semibold mr-4">378+</p>
                        <p className="text-white w-[100px] font-medium">Project Complete</p>
                    </div>
                    <div className="flex items-center mr-4">
                        <p className="text-[#FF7420] text-4xl font-semibold mr-4">69+</p>
                        <p className="text-white w-[120px] font-medium">Winning Global Award</p>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <Image src='/img/orang.png' alt="" className="mr-28" width={500} height={0} />

                    <div className="text-white">
                        <p className="text-[#FF7420] text-5xl font-semibold mb-5">25 years</p>
                        <p className="text-5xl font-semibold mb-9">of experience!</p>
                        <p className="mb-9 w-[720px] text-lg">We have a team of experienced professionals who have been in the industry for over 25 years. Our contractors have a wealth of knowledge and skills that they have acquired over the years, making them experts in their field.</p>
                        <p className="mb-10 w-[720px] text-lg">With 25 years of experience, our contractors have a deep understanding of industry standards and regulations. We ensure that all our projects comply with the latest safety and building codes, and that the final product meets or exceeds our client expectations.</p>
                        <Image src='/img/ttd.png' alt="" width={200} height={0} />
                        <p className="mt-5 text-sm">Henry Kurnia Adhi - Founder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience