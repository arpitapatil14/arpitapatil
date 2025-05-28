import { Github, Linkedin, Mail, Phone, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-6">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mx-auto flex items-center justify-center text-4xl font-bold shadow-2xl">
              AP
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            ARPITA UMESH PATIL
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-6 font-light">
            Software Engineer | MERN Full Stack Developer & Cloud Enthusiast
          </p>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            B.Tech CSE Graduate from VIT | AWS Certified Cloud Practitioner | Passionate about creating innovative solutions that make a difference
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="mailto:arpitapatil14903@gmail.com" 
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            
            <a 
              href="https://github.com/arpitapatil14" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-purple-400 hover:bg-purple-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="mailto:arpitapatil14903@gmail.com" className="hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:+917875381206" className="hover:text-purple-400 transition-colors">
              <Phone size={24} />
            </a>
            <a href="https://linkedin.com/in/arpitapatil14903" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/arpitapatil14" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://leetcode.com/u/arpitapatil14903" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Code size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
