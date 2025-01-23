"use client";

import { useState } from "react";
import { Github, Linkedin, Instagram, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Experience {
  company: string;
  position: string;
  date: string;
  details: string[];
  logo: React.ReactNode;
}

interface Education {
  institution: string;
  degree: string;
  date: string;
  details: string[];
  logo: React.ReactNode;
}

export default function Home() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(
    null
  );
  const [expandedEducation, setExpandedEducation] = useState<string | null>(
    null
  );

  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:gabriel.longatti@zeronova.co",
      label: "Email",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/glongatti",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://instagram.com/longattigabriel",
      label: "Instagram",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/glongatti",
      label: "GitHub",
    },
  ];

  const experiences: Experience[] = [
    {
      company: "Tomik.ai",
      position: "Full Stack Engineer",
      date: "August 2024 - Present",
      details: [
        "Working with an AI and automation education group, developing an AI SaaS platform for building digital workers on WhatsApp.",
        "Utilizing cutting-edge technologies to create scalable and efficient solutions for AI-driven automation.",
        "Tech stack includes NextJS, NestJS, OpenAI API, Flowise, LangChain, WebSockets, WhatsApp API integration, Supabase.",
      ],
      logo: (
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
          <span className="text-2xl">🤖</span>
        </div>
      ),
    },
    {
      company: "Zeronova",
      position: "Co-Founder | Sales & Marketing Director",
      date: "August 2021 - January 2025",
      details: [
        "Co-founded Zeronova, an accelerator for mentors focused on scaling high-ticket product businesses.",
        "Led the commercial sector, overseeing sales strategies and client acquisition.",
        "Developed expertise in consultative selling and sales operations.",
      ],
      logo: (
        <img
          src="https://i.imgur.com/VNSSPih.png"
          alt="Zeronova Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
      ),
    },
    {
      company: "iFood",
      position: "Software Engineer",
      date: "September 2020 - April 2022",
      details: [
        "Developed self-service flows and features for customer problem resolution.",
        "Worked with VueJS, SCSS, unit testing, integration testing, and CI/CD pipelines.",
      ],
      logo: (
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQDk00kOEB9TKfDuRxQVn_U2YEVfUOjvoyZpMiUx8RSHCNXSsFDst_NtbCxB8agqDGoRXN2YC2jPGmoX7h4-zrHpRE9BVjyU-CexIf2H7SGO9ucwZkFhnCeaNYuDa4pk6EB6RUbAiBGg3Fk14FV9Di-hOSNY9qPPKfScGETD4IhdOuVmQnof6ZzTmkQT8/s320-rw/ifood%20logo.jpg"
          alt="iFood Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
      ),
    },
    {
      company: "MB Labs Aplicativos",
      position: "Software Developer",
      date: "October 2019 - September 2020",
      details: [
        "Participated in building MVPs for startups, focusing on feature development including payment gateway integrations, geolocation functionalities, and responsive layouts.",
        "Implemented real-time chat with GraphQL, Firebase applications (Cloud Messaging, version control, authentication), and Google APIs integration.",
        "Worked with AWS services (S3 Bucket, deployments), image upload functionality, and administrative panel development.",
        "Utilized ReactJS/React Native, NodeJS, GraphQL, PostgreSQL/MySQL, Styled Components, Sass/Less, Redux, and Redux Thunk.",
        "Applied Agile methodologies like SCRUM and XP programming in all projects.",
      ],
      logo: (
        <img
          src="https://i.imgur.com/JJTofci.jpeg"
          alt="MB Labs Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
      ),
    },
    {
      company: "masti - Lean IT & Management",
      position: "Front-end Intern",
      date: "September 2018 - September 2019",
      details: [
        "Developed features for various projects using ReactJS, React Native, HTML5/CSS3, and Git.",
        "Gained experience with Angular, TypeScript, Redux, NodeJS, and GoLang.",
        "Worked on three main projects:",
        "1. A digital platform for service providers to advertise their work.",
        "2. An event module for a union management system, including administrative features and user registration.",
        "3. A platform connecting farm and shop owners worldwide with people interested in agritourism.",
      ],
      logo: (
        <img
          src="https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/301220208_390227023271385_2330231238347193141_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3dHLt9fuAOsQ7kNvgHrVya8&_nc_zt=23&_nc_ht=scontent.fcpq5-1.fna&_nc_gid=ASGYjDn4b7rPhEkRk78Bs7H&oh=00_AYDBAmerj_IgqQyHjKNCpomW6mMgLBIsF5GFhgLWfRNAdw&oe=6797598E"
          alt="Masti Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
      ),
    },
    {
      company: "Ateliê Ana Cosentino",
      position: "Web Developer",
      date: "January 2017 - August 2018",
      details: [
        "Developed websites focusing on WordPress and MySQL, including sales pages, online course platforms, blogs, institutional pages, and sales funnels.",
        "Managed e-commerce operations, including SEO for digital marketing and Google Analytics statistics analysis.",
        "Handled email marketing campaigns and provided user support.",
      ],
      logo: (
        <img
          src="https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/341485104_920113182526813_87651785288959690_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EoaSSfsPR5MQ7kNvgE2Pviz&_nc_zt=23&_nc_ht=scontent.fcpq5-1.fna&_nc_gid=AUO7jIVDpMrvBXQ6fJJwy5x&oh=00_AYBMD6XpC6i6_21rzr9ff_tmkTIqKjSc-ve69mRGLY8N9Q&oe=6797636F"
          alt="Ateliê Ana Cosentino Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
      ),
    },
  ];

  const education: Education[] = [
    {
      institution: "Pontifical Catholic University of Campinas",
      degree: "Bachelor's degree, Software Engineering",
      date: "2017 - 2021",
      details: [
        "Focused on software development, algorithms, and system design",
        "Developed strong foundation in computer science fundamentals",
        "Participated in research projects and hackathons",
      ],
      logo: (
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
          <img
            src="https://www.puc-campinas.edu.br/wp-content/uploads/2021/09/logo-cta-pucc-brasao.png"
            alt="PUC Campinas Logo"
            className="w-full h-full object-contain"
          />
        </div>
      ),
    },
  ];

  const toggleExperience = (company: string) => {
    setExpandedExperience(expandedExperience === company ? null : company);
  };

  const toggleEducation = (institution: string) => {
    setExpandedEducation(
      expandedEducation === institution ? null : institution
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-75"></div>
            <img
              src="https://pbs.twimg.com/profile_images/1879512120175341568/l8v7-1vp_400x400.jpg"
              alt="Gabriel Longatti"
              className="relative w-32 h-32 rounded-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
              Gabriel Longatti
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400">
              Full Stack Software Engineer | MVP & SaaS Specialist
            </h2>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">About</h3>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            Experienced Full Stack Developer with over 7 years of experience in
            software development, a strong background in JavaScript ecosystems,
            and SaaS development. Passionate about building MVPs, developing
            SaaS products, and bringing them to market. Extensive experience
            working on diverse projects across various types of companies.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-blue-400">Experience</h3>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.company} className="group">
                <button
                  onClick={() => toggleExperience(exp.company)}
                  className="w-full"
                >
                  <div className="flex justify-between items-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      {exp.logo}
                      <div className="text-left">
                        <h4 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                          {exp.company}
                        </h4>
                        <p className="text-gray-400">{exp.position}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400">{exp.date}</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-300",
                          expandedExperience === exp.company && "rotate-180"
                        )}
                      />
                    </div>
                  </div>
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    expandedExperience === exp.company
                      ? "max-h-96 mt-4"
                      : "max-h-0"
                  )}
                >
                  <ul className="list-disc list-inside text-gray-400 space-y-2 pl-4">
                    {exp.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-blue-400">Education</h3>
          {education.map((edu) => (
            <div key={edu.institution} className="group">
              <button
                onClick={() => toggleEducation(edu.institution)}
                className="w-full"
              >
                <div className="flex justify-between items-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    {edu.logo}
                    <div className="text-left">
                      <h4 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                        {edu.institution}
                      </h4>
                      <p className="text-gray-400">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400">{edu.date}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform duration-300",
                        expandedEducation === edu.institution && "rotate-180"
                      )}
                    />
                  </div>
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  expandedEducation === edu.institution
                    ? "max-h-96 mt-4"
                    : "max-h-0"
                )}
              >
                <ul className="list-disc list-inside text-gray-400 space-y-2 pl-4">
                  {edu.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-blue-400">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Full Stack Development",
              "React.js & React Native",
              "Next.js",
              "Node.js",
              "Supabase",
              "SQL & NoSQL Databases",
              "CI/CD",
              "Agile Methodologies",
              "SaaS Development",
              "Business Development",
              "Marketing & Sales Strategy",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <p className="text-gray-400">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-800">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
