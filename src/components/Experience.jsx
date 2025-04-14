import Card from "./Card";

const Experience = () => {
<<<<<<< HEAD
    return (
        <section
            id="experience"
            className="w-full py-20 border-b-[1px] border-gray-200 scroll-mt-[100px]"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Here Internships</h2>
                    <p className="text-lg text-gray-600">What I Do</p>
=======
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      logo: ApolloLogo,
      company: "APOLLO IT CORPORATE",
      role: "Intranet Application Developer",
      duration: "July 2024 – August 2024",
      points: [
        "Developed a dynamic admin panel with customizable URLs and unit management for over 13,000 users.",
        "Built secure backend services using Python Flask for authentication and data handling.",
        "Integrated Azure-based semantic search chatbot for enhanced internal accessibility.",
        "Streamlined internal operations through scalable Flask APIs and modular architecture."
      ]
    },
    {
      logo: InternPELogo,
      company: "InternPE (Remote)",
      role: "Client-Side Developer",
      duration: "February 2024 – March 2024",
      points: [
        "Designed and implemented responsive UI/UX with HTML5, CSS3, and JavaScript.",
        "Optimized cross-platform performance for web apps across varying screen dimensions."
      ]
    }
  ];

  const toggleCard = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="experience" className="section title ">
      <div className= " ">
        <div className="text-left mb-12 ">
          <h2 className="text-4xl font-bold  mb-2">Professional Experience</h2>
          <p className="text-lg text-gray-400">
            Engineering student with AWS DevOps focus and strong interest in cloud technologies.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-blue-100/60 rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleCard(index)}
                  className="w-full flex items-center justify-between p-6  "
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-full p-2 flex items-center justify-center">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold ">{exp.company}</h3>
                      <p className="text-sm text-indigo-950">{exp.role}</p>
                      <p className="text-xs text-gray-600">{exp.duration}</p>
                    </div>
                  </div>
                  <span className={`text-xl text-indigo-950  transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                <div
                  className={`px-6 pt-0 pb-6 transition-all duration-300 ease-in-out grid ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="list-disc list-inside  space-y-2 mt-4">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-sm leading-relaxed">{point}</li>
                      ))}
                    </ul>
                  </div>
>>>>>>> 25b30de19970fc443adb8ed5c2e4abe6aad30264
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
