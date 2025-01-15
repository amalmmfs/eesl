"use client";

import { TeamMember } from "@/app/components/team-member";
import { TeamMember as TeamMemberType } from "@/app/types/team";

import { teamData } from "@/app/data/team";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

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
        className="relative h-[400px] w-full bg-gradient-to-r from-gray-900 to-gray-800"
      >
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1736962075/EESL/Team/Team%20Hero.jpg"
            alt="Team Hero"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative container max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-lg md:text-xl text-center max-w-2xl">
            Meet the brilliant minds behind our groundbreaking research
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 container max-w-6xl mx-auto px-4"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-16"
        >
          Current Members
        </motion.h2>

        {Object.entries(currentMembers).map(([category, members], index) => (
          <motion.div
            key={category}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-16 last:mb-0"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 border-l-4 border-primary pl-4">
              {category}
            </h3>
            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {members.map((member: TeamMemberType) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-16"
          >
            Alumni
          </motion.h2>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {alumni.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-16"
          >
            Collaborators
          </motion.h2>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {collaborators.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
