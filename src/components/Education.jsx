import EducationCard from "./EducationCard"

const Education = () => {
    return (
        <section
        id="education"
        className="w-full sectioneven   scroll-mt-[100px] mb-10 "
    >
        <div className="max-md:px-4 md:px-7 xl:px-2 -mt-20 ">
            <div className="py-5 md:py-9 font-titleFont flex flex-col gap-2 ">
                <p className="text-sm tracking-[4px]">2019-2021</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Education</h2>
                <div className="mt-2 lgl:mt-8 w-full  flex max-md:flex-col max-md:gap-8" 
                     style={{ 
                        backgroundImage: 'linear-gradient(to bottom, #808080, transparent)',
                        backgroundSize: '6px 60%',
                        backgroundRepeat: 'no-repeat',
                        paddingLeft: '6px'
                     }}>
                <EducationCard
                    title="BE-Computer Science and Engineering"
                    des="Mount Zion College of Engineering and Technology"
                    subTitle=" (2021-25)"
                    result="7.64" />
                <EducationCard
                    title="HSC"
                    des="Karaikudi Maharishi vidya mandir Higher Secondary School"
                    subTitle="(2019-21)"
                    result="81.52%" />
                <EducationCard
                    title="SSLC"
                    des="C.V.CT.V Meenakshi Achi Matriculation School"
                    subTitle="(2017-19)"
                    result="71.2%" />
            </div>
            </div>
            
        </div>
        </section>
    )
}
export default Education