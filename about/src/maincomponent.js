import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Linkedin, Mail, Code, Database, Brain, Globe, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    { title: 'Project 1', description: 'A brief description of Project 1' },
    { title: 'Project 2', description: 'A brief description of Project 2' },
    { title: 'Project 3', description: 'A brief description of Project 3' },
  ];

  const educationData = [
    { degree: 'B.Tech Computer Science', institution: 'Sastra Deemed University T.N', year: '2022', description: 'CSE 3rd Year' },
    { degree: '11th,12th Standard', institution: 'Star Junior College,A.P', year: '2020', description: 'Achieved Decent score In JEE' },
    { degree: '10th Standard', institution: 'Pragathi EM High School', year: '2018', description: 'Achieved Decent score in Final Exams' },
    // Add more education entries as needed
  ];
  
  const skillCategories = [
    {
      icon: <Globe size={32} />,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript"]
    },

    {
        icon: <Globe size={32} />,
        title:" Front End FrameWorks",
        skills:["Bootstrap", "React"]
    },
    {
        icon: <Globe size={32} />,
        title:" Problem Solving",
        skills:["Data Structures And Algorithms"]
    },

    {
      icon: <Code size={32} />,
      title: "Programming Languages",
      skills: ["C++", "Java", "Python"]
    },
    {
      icon: <Database size={32} />,
      title: "Databases",
      skills: ["SQL"]
    },

    
  ];

  const styles = {
    borderRadius: "60px 60px 60px 60px",
    marginTop: "40px",
    height: "56px",
    backgroundColor:"#0D6EFD",
  };

  return (
    <div className="portfolio">
      <nav  className="navbar navbar-expand-lg navbar-dark fixed-top" style={styles}>
        <div className="container">
          <a className="navbar-brand" href="#home">Sathya Manohar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li className="nav-item" key={item}>
                  <a 
                    className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`} 
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>


      <section id="home" className="vh-100 d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-1 mb-4 animate__animated animate__fadeInDown">Sathya Manohar</h1>
          <p className="lead mb-5 animate__animated animate__fadeInUp">Web Developer & Designer</p>
          <a href="#about" className="btn btn-warning btn-lg animate__animated animate__fadeInUp">Resume.in</a>
        </div>
      </section>

      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{borderBottom:"5px dotted white"}}>About Me</h2>
          <div className="row">
            <div className="col-md-6 animate__animated animate__fadeInLeft">
              <img src="/path/to/your/image.jpg" alt="Your Name" className="img-fluid rounded-circle mb-4" />
            </div>
            <div className="col-md-6 animate__animated animate__fadeInRight">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-5 bg-black">
        <div className="container">
          <h2 className="text-center mb-5" style={{borderBottom:"5px dotted white"}}>My Skills</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {skillCategories.map((category, index) => (
              <div key={index} className="col">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="mb-4">
                      <span className="d-inline-block p-3 rounded-circle text-white bg-primary">
                        {category.icon}
                      </span>
                    </div>
                    <h5 className="card-title">{category.title}</h5>
                    <ul className="list-unstyled">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="mb-1">{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-5 bg-black">
        <div className="container">
          <h2 className="text-center mb-5" style={{borderBottom:"5px dotted white",color:"white"}}>My Education</h2>
          
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="timeline">
                {educationData.map((edu, index) => (
                  <div key={index} className="timeline-item mb-5">
                    <div className="timeline-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                      <GraduationCap size={24} />
                    </div>
                    <div className="timeline-content bg-white p-4 rounded shadow">
                      <h3 className="h5 mb-0">{edu.degree}</h3>
                      <span className="text-muted">{edu.institution} | {edu.year}</span>
                      <p className="mt-2 mb-0">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-5 bg-black">
        <div className="container">
          <h2 className="text-center mb-5" style={{borderBottom:"5px dotted white"}}>My Projects</h2>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm animate__animated animate__fadeInUp">
                  <img src={`/path/to/project/image${index + 1}.jpg`} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Contact Me</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="animate__animated animate__fadeInUp">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          <div className="mt-5 text-center">
            <a href="#" className="me-3"><Linkedin size={24} /></a>
            <a href="#"><Mail size={24} /></a>
          </div>
        </div>
      </section>

      <footer className="text-white text-center py-3">
        <p>&copy; 2024 Manohar. All rights reserved.</p>
      </footer>

      <style jsx>{`
        :root {
          --primary-color: #4a00e0;
          --secondary-color: #8e2de2;
          --text-color: #333;
          --bg-color: #f4f4f4;
        }

        body {
          font-family: 'Arial', sans-serif;
          color: var(--text-color);
          background-color: var(--bg-color);
        }

        .navbar {
         
          padding: 1rem 0;
          
        }

        .navbar-nav .nav-link {
          color: black !important;
          transition: all 0.3s ease;
        }

        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.active {
          color:black!important;
          transform: translateY(-2px);
          
        }
          a.navbar-brand{
          color:black;
          }

        #home {
          background: black;
          color: white;
        }

        #about {
          background: black;
          color:white;
          
        }

        #skills {
          background: black;
          color:white;
        }
        
      

        #contact ,#projects{
          background: black;
          color:white;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border: none;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .card {
          transition: all 0.3s ease;
          border: none;
          border-radius: 15px;
          overflow: hidden;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        footer {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        }

        .animate__animated {
          animation-duration: 1s;
          animation-fill-mode: both;
        }
        
        .animate__fadeInDown {
          animation-name: fadeInDown;
        }
        
        .animate__fadeInUp {
          animation-name: fadeInUp;
        }
        
        .animate__fadeInLeft {
          animation-name: fadeInLeft;
        }
        
        .animate__fadeInRight {
          animation-name: fadeInRight;
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translate3d(-100%, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
