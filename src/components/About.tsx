
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Computer Science Engineering graduate from VIT with a strong foundation in full-stack development and cloud technologies. With hands-on experience in MERN stack development and AWS cloud services, I love creating innovative solutions that solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey includes developing impactful applications like EcoSpot (environmental awareness platform) and VocalizeIt (Text-to-Speech application), along with valuable industry experience at SAMSAN Technische Labs and ETHNUS. I'm particularly focused on Java Data Structures and Algorithms, where I excel at creating efficient, optimized solutions to complex problems.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Full-Stack Developer
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  AWS Certified
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  MERN Stack
                </span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                  Java DSA
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <GraduationCap className="text-purple-600" size={24} />
                  Education
                </h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800">B.Tech Computer Science & Engineering</h4>
                    <p className="text-purple-600 font-medium">Vellore Institute of Technology</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        2021 - 2025
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        Vellore, Tamil Nadu
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">CGPA: 8.56</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Intermediate</h4>
                    <p className="text-blue-600 font-medium">Nashik Presidency College</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        Graduated 2021
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        Nashik, Maharashtra
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Percentage: 93.83%</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">High School</h4>
                    <p className="text-green-600 font-medium">R J E M High School</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        Graduated 2019
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        Nashik, Maharashtra
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Percentage: 91.60%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
