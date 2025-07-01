
import { Code2, Database, Cloud, Wrench, Award, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={24} />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Java", "Python", "C++", "C", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Web & Frameworks",
      icon: <Palette size={24} />,
      color: "from-purple-500 to-pink-500",
      skills: ["React.js", "Node.js", "Express.js", "Bootstrap", "REST APIs"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      color: "from-green-500 to-emerald-500",
      skills: ["SQL", "MongoDB", "Database Design", "Query Optimization"]
    },
    {
      title: "Cloud & Technical",
      icon: <Cloud size={24} />,
      color: "from-orange-500 to-red-500",
      skills: ["AWS (Certified)", "Data Structures", "Algorithms", "OOP", "Operating Systems", "Networks"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} />,
      color: "from-indigo-500 to-purple-500",
      skills: ["Git", "Canva", "Cisco Packet Tracer", "MATLAB", "VS Code"]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "MERN Stack Certification",
      issuer: "ETHNUS",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Industry Certification",
      color: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            A comprehensive set of technical skills and certifications that enable me to build 
            scalable, efficient, and user-friendly applications.
          </p>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative bg-gray-50 group-hover:bg-white rounded-xl p-6 border-2 border-gray-200 group-hover:border-transparent transition-all duration-300">
                    <h4 className="font-bold text-gray-800 mb-2 group-hover:text-gray-800">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600 group-hover:text-gray-700 text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8.59</div>
              <div className="text-gray-600 text-sm">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2</div>
              <div className="text-gray-600 text-sm">Internships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-gray-600 text-sm">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
