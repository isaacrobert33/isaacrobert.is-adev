import React from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "LizzyHealth! An Hospital Management system.",
      description:
        "LizzyHealth is a robust hospital management system built on a Django & Next.JS Stack. It is designed to help hospitals manage their patients, staff, case management, and EMR.",
      tags: ["JavaScript", "Django", "Next.JS", "Web Development"],
      links: {
        demo: "https://stage.lhrobot.com.ng/",
      },
      image: "/lizzyhealth-dashboard.png",
      featured: true,
    },
    {
      title: "Traxx - Beatdrop! A Karaoke Event Management platform.",
      description:
        "Beatdrop is an innovative platform for music suggestion, discovery, and tipping. It aims to enhance the interaction between live performers, DJs, karaoke hosts, and their audiences by providing a seamless and engaging way for fans to request songs in real-time during an event, discover new music, and support their favorite artists financially.",
      tags: ["Django", "React.JS", "Django Channels", "PostgresSQL"],
      links: {
        demo: "https://traxxsion.com/",
      },
      image: "/traxxsion.png",
      featured: false,
    },
    {
      title: "TraxsPro",
      description:
        "TraxsPro is a platform to help live-perfoming independent artists and DJs streamline fan connections, simplify earning tips, and establish a professional presence — all while staying focused on creating music and growing their brand.",
      tags: ["Django", "Next.JS", "TailwindCSS", "PostgresSQL"],
      links: {
        demo: "https://traxspro.com/",
      },
      image: "/traxspro.png",
      featured: false,
    },
  ];

  return (
    <div
      className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 p-8 text-slate-100"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    {project.featured && (
                      <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                        Featured Project
                      </div>
                    )}
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    {/* <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a> */}
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
