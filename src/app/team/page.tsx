"use client";

import { TeamMember } from "@/app/components/team-member";
import { teamData } from "@/app/data/team";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TeamMember as TeamMemberType } from "@/app/types/team";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

// const staggerChildren = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

export default function TeamPage() {
  const { currentMembers, alumni, collaborators, faculty } = teamData;
  const [activeTab, setActiveTab] = useState("faculty");

  useEffect(() => {
    document.title = "Team | EESL";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[400px] w-full bg-gradient-to-r from-gray-900 to-gray-800 group"
      >
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1736962075/EESL/Team/Team%20Hero.jpg"
            alt="Team Hero"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <motion.div className="relative container max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-lg md:text-xl text-center max-w-2xl">
            Meet the brilliant minds behind our groundbreaking research
          </p>
        </motion.div>
      </motion.section>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center">
          {/* <div className="tabs-wrapper w-full max-w-3xl"> */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {["Faculty", "Current Members", "Alumni", "Collaborators"].map(
              (tab) => {
                const value = tab.toLowerCase().replace(" ", "-");
                return (
                  <button
                    key={value}
                    onClick={() => setActiveTab(value)}
                    className={`
                      px-4 py-2 
                      rounded-full
                      text-sm md:text-base 
                      font-medium
                      transform transition-all duration-300 ease-out
                      backdrop-filter backdrop-blur-sm
                      ${
                        activeTab === value
                          ? "bg-gradient-to-br from-blue-500/95 to-blue-600/95 text-white translate-y-1 shadow-inner"
                          : "bg-white/95 text-gray-700 hover:-translate-y-1 hover:shadow-lg"
                      }
                      border border-gray-100/20
                      shadow-[0_4px_0px_0px_rgba(0,0,0,0.08)]
                      active:shadow-none active:translate-y-1
                      hover:ring-2 hover:ring-blue-200/50
                    `}
                  >
                    {tab}
                  </button>
                );
              }
            )}
          </div>
          {/* </div> */}
        </div>
        <div className="mt-8 w-full">
          {activeTab === "faculty" && (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 gap-8"
            >
              {faculty.map((member: TeamMemberType) => (
                <TeamMember key={member.name} {...member} isPrincipal={true} />
              ))}
            </motion.div>
          )}

          {activeTab === "current-members" && (
            <div className="space-y-16">
              {Object.entries(currentMembers).map(([category, members]) => (
                <motion.div
                  key={category}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 border-l-4 border-primary pl-4">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member: TeamMemberType) => (
                      <TeamMember key={member.name} {...member} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "alumni" && (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {alumni.map((member: TeamMemberType) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </motion.div>
          )}

          {activeTab === "collaborators" && (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {collaborators.map((member: TeamMemberType) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
