"use client";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaAndroid,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";

import {
  SiDart,
  SiFlutter,
  SiGo,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNestjs,
  SiGit,
  SiSocketdotio,
} from "react-icons/si";

import { RiNextjsFill } from "react-icons/ri";

const about = {
  title: "About me",
  description:
    "I'm a fullstack developer based in Indonesia. I have a passion for creating beautiful and performant web applications. I'm currently working on my portfolio and am always looking for new challenges.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dewa Gede Indra Putra",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 8311 4227 556",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Email",
      fieldValue: "kuraoindra@gmail.com",
    },
    {
      fieldName: "Github",
      fieldValue: "KuraoHikari",
    },
    {
      fieldName: "Languages",
      fieldValue: "Indonesia, English",
    },
  ],
};

const experience = {
  icon: "/resume/badge.svg",
  title: "Experience",
  description:
    "I have a passion for creating beautiful and performant web applications. I'm currently working on my portfolio and am always looking for new challenges.",
  items: [
    {
      company: "The Lod House Villa",
      position: "Villa Admin",
      duration: "May 2022 - Present",
    },
    {
      company: "Ukm Primakara University",
      position: "Fasilitator",
      duration: "Feb 2023 - Present",
    },
    {
      company: "Cartenz Group",
      position: "Frontend Developer",
      duration: "Oct 2021 - Jul 2022",
    },
  ],
};

const education = {
  icon: "/resume/cap.svg",
  title: "Education",
  description:
    "I'm a fast learner ,I have big motivation to learn new technologies and my Currenly learning at Primakara University with specialization in Informatics",
  items: [
    {
      institution: "Primakara University",
      degree: "Informatics",
      gpa: "3.92",
      duration: "Jul 2022 - Present",
    },
    {
      institution: "Hacktiv8",
      degree: "FullStack JavaScript",
      gpa: "93.4% Honnor Graduate",
      duration: "Jul 2021 - Sep 2021",
    },
  ],
};

const skills = {
  title: "Skills",
  description: "My skills include:",
  items: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaVuejs />,
      name: "Vue.js",
    },
    { icon: <FaAndroid />, name: "Android" },
    {
      icon: <SiDart />,
      name: "Dart",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiGo />,
      name: "Go",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
    },

    {
      icon: <RiNextjsFill />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
    {
      icon: <SiNestjs />,
      name: "NestJS",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiSocketdotio />,
      name: "Socket.io",
    },
  ],
};

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeIn",
          delay: 2.4,
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-semibold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((exp) => {
                      return (
                        <li
                          key={exp.company}
                          className="
                        bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1
                        "
                        >
                          <span className="text-blue-400">{exp.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                            <p className="text-white/60">{exp.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-semibold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((edu) => {
                      return (
                        <li
                          key={edu.institution}
                          className="
                        bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1
                        "
                        >
                          <span className="text-blue-400">{edu.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[40px] text-center lg:text-left">
                            {edu.degree}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                            <p className="text-white/60">{edu.institution}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                            <p className="text-white/60">GPA: {edu.gpa}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div>
                  <h3 className="text-4xl font-semibold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="about">about me</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
