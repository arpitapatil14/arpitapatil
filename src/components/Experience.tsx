
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "MERN Full Stack Developer",
      company: "ETHNUS",
      location: "Remote",
      duration: "Aug 2023 – Nov 2023",
      achievements: [
        "Directed the development of Pet Reunite Hub, a full-stack application built with the MERN stack, increasing user engagement by 30% through real-time updates and notifications.",
        "Optimized RESTful API interactions and database queries, resulting in a 20% reduction in data retrieval time and significantly improving application performance and scalability."
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Research and Development Intern",
      company: "SAMSAN Technische Labs Pvt Ltd",
      location: "Pune",
      duration: "Oct 2023 – Dec 2023",
      achievements: [
        "Authored a comprehensive whitepaper on electric vehicles, leading to a 15% enhancement in system performance through strategic architectural improvements.",
        "Engineered advanced data analytics methodologies that improved forecasting accuracy by 25%, facilitating better decision-making processes.",
        "Designed a research methodology for a 2W instrument cluster project, accelerating research efficiency by 20% and shortening project timelines by two weeks."
      ],
      color: "from-green-500 to-blue-500"
    }
  ];

  const leadership = {
    title: "Vice-Chairperson",
    organization: "ASHRAE Chapter, VIT",
    duration: "Feb 2024 – Feb 2025",
    description: "Leading initiatives in the ASHRAE chapter, promoting engineering excellence and professional development among students."
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0`}>
                    <Briefcase size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                      <p className="text-lg font-semibold text-purple-600 mb-2">{exp.company}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Leadership Experience */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase size={24} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1">{leadership.title}</h3>
                    <p className="text-lg font-semibold text-purple-100 mb-2">{leadership.organization}</p>
                    
                    <div className="flex items-center gap-1 text-sm text-purple-100">
                      <Calendar size={14} />
                      {leadership.duration}
                    </div>
                  </div>
                  
                  <p className="text-purple-50 leading-relaxed">{leadership.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
