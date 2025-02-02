"use client";

import { TeamMember } from "@/app/components/team-member";
import { teamData } from "@/app/data/team";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamMember as TeamMemberType } from "@/app/types/team";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function TeamPage() {
  const { currentMembers, alumni, collaborators } = teamData;

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

      <div className="container max-w-6xl mx-auto px-4 py-16">
        <Tabs defaultValue="faculty-member" className="space-y-6">
          <TabsList className="flex flex-wrap justify-center w-full mb-12 p-1 rounded-lg">
            <TabsTrigger
              value="faculty-member"
              className="flex-1 max-w-[200px]"
            >
              Faculty Member
            </TabsTrigger>
            <TabsTrigger
              value="current-members"
              className="flex-1 max-w-[200px]"
            >
              Current Members
            </TabsTrigger>
            <TabsTrigger value="alumni" className="flex-1 max-w-[200px]">
              Alumni
            </TabsTrigger>
            <TabsTrigger value="collaborators" className="flex-1 max-w-[200px]">
              Collaborators
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faculty-member">
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 gap-8"
            >
              {teamData.facultyMember.map((member: TeamMemberType) => (
                <TeamMember key={member.name} {...member} isPrincipal={true} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="current-members">
            <div className="space-y-16">
              {Object.entries(currentMembers).map(([category, members]) => (
                <motion.div
                  key={category}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 border-l-4 border-primary pl-4">
                    {category}
                  </h3>
                  <div
                    className={`grid gap-8 ${
                      category === "Principal Investigator"
                        ? "grid-cols-1"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {members.map((member: TeamMemberType) => (
                      <TeamMember
                        key={member.name}
                        {...member}
                        isPrincipal={category === "Principal Investigator"}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alumni">
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {alumni.map((member: TeamMemberType) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="collaborators">
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {collaborators.map((member: TeamMemberType) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
