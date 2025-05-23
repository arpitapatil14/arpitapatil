
import { ExternalLink, Github, Globe, Users, Zap, MapPin, Shield, Smartphone, Glasses } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EcoSpot",
      description: "A social media platform utilizing the MERN stack to foster environmental awareness and community action. Users can document and share instances of littering with geolocation services.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Geolocation API"],
      achievements: [
        "40% increase in community engagement",
        "35% enhancement in accuracy and timeliness of environmental reports",
        "Real-time data updates implementation"
      ],
      github: "https://github.com/arpitapatil14/EcoSpott",
      color: "from-green-500 to-emerald-600",
      icon: <Globe size={24} />
    },
    {
      title: "VocalizeIt",
      description: "A Text-to-Speech application using the Web Speech API offering real-time text-to-speech conversion with customizable voice options and advanced playback controls.",
      technologies: ["JavaScript", "Web Speech API", "HTML5", "CSS3"],
      achievements: [
        "30% increase in user engagement",
        "25% reduction in usability issues",
        "Pause and resume functionality implementation"
      ],
      github: "https://github.com/arpitapatil14/VocalizeIt",
      color: "from-blue-500 to-purple-600",
      icon: <Zap size={24} />
    },
    {
      title: "Textura",
      description: "A texture generation tool that creates high-quality seamless textures for 3D models and game development, offering customization options and preset templates.",
      technologies: ["JavaScript", "WebGL", "HTML5", "CSS3", "Canvas API"],
      achievements: [
        "Implemented procedural texture generation algorithms",
        "Created intuitive UI for texture customization",
        "Added export functionality for various file formats"
      ],
      github: "https://github.com/arpitapatil14/Textura",
      color: "from-purple-500 to-pink-500",
      icon: <Smartphone size={24} />
    },
    {
      title: "Transaction Fraud Detection",
      description: "A machine learning system that identifies potentially fraudulent financial transactions using advanced algorithms and real-time analysis.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Flask"],
      achievements: [
        "95% accuracy in detecting fraudulent transactions",
        "Reduced false positives by 40%",
        "Real-time transaction monitoring capabilities"
      ],
      github: "https://github.com/arpitapatil14/Transaction-Fraud-Detection",
      color: "from-red-500 to-orange-500",
      icon: <Shield size={24} />
    },
    {
      title: "Apple Vision Pro Clone",
      description: "A frontend clone of Apple's Vision Pro website showcasing advanced CSS animations, 3D effects, and responsive design principles.",
      technologies: ["React.js", "Three.js", "GSAP", "CSS3", "HTML5"],
      achievements: [
        "Implemented complex parallax scrolling effects",
        "Created realistic 3D product visualizations",
        "Built fully responsive design across all device sizes"
      ],
      github: "https://github.com/arpitapatil14/Apple-Vision-Pro-Clone",
      color: "from-gray-700 to-gray-900",
      icon: <Glasses size={24} />
    },
    {
      title: "Pet Reunite Hub",
      description: "A full-stack MERN application designed to help reunite lost pets with their owners through real-time updates and notification systems.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs"],
      achievements: [
        "30% increase in user engagement",
        "20% reduction in data retrieval time",
        "Real-time notifications system"
      ],
      github: "#",
      color: "from-orange-500 to-red-500",
      icon: <Users size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            machine learning, and creating impactful user experiences.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <button className="flex items-center gap-2 border border-gray-300 hover:border-purple-500 hover:text-purple-600 px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/arpitapatil14" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
