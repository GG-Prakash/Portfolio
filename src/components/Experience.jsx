import Card from "./Card";

const Experience = () => {
    return (
        <section
            id="experience"
            className="w-full py-20 border-b-[1px] border-gray-200 scroll-mt-[100px]"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Here Internships</h2>
                    <p className="text-lg text-gray-600">What I Do</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
                    <Card 
                        title="Intranet Application Developer"
                        des="Developed a dynamic intranet website for Apollo Hospitals, implementing an advanced admin panel for unit management, editable URLs, and seamless data handling, enhancing operational efficiency. Technology used: Python (Flask), HTML, CSS, JavaScript"
                        logo="/apollo.png"
                    />
                    <Card 
                        title="Client-Side Developer"
                        des="Designed and implemented responsive UI/UX with HTML5, CSS3, and JavaScript. Optimized cross-platform performance for web apps across varying screen dimensions."
                        logo="/internpe.png"
                    />
                </div>
            </div>
        </section>
    );
}

export default Experience;
