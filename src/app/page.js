"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";

// Icons
import {
  Lightbulb,
  Users,
  Shield,
  DollarSign,
  Heart,
  Coffee,
  Plane,
  GraduationCap,
  UsersRound,
  MapPin,
  Briefcase,
  Clock,
} from "lucide-react";

export default function Careers() {
  const router = useRouter();
  const [tab, setTab] = useState("jobs");

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const ActiveTabIndicator = () => (
    <motion.span
      layoutId="active-pill"
      className="absolute inset-0 z-0 bg-white rounded-full shadow"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  );

  const jobs = [
    {
      category: "Developer",
      title: "App Developer",
      description: "Develop mobile applications with modern frameworks.",
      location: "Hybrid",
      experience: "Fresher",
      type: "Full-time",
      workMode: "Work From Office",
      tags: ["Flutter", "React Native", "iOS", "Android"],
    },
  ];

  const interns = [
    {
      category: "Internship",
      title: "Frontend Developer Intern",
      description: "Learn real-world React development.",
      location: "Remote",
      experience: "Fresher",
      type: "Internship",
      workMode: "Remote",
      tags: ["React", "Tailwind", "HTML", "CSS"],
    },
    {
      category: "Internship",
      title: "UI/UX Intern",
      description: "Assist product design team and learn design workflows.",
      location: "Hybrid",
      experience: "Fresher",
      type: "Internship",
      workMode: "Hybrid",
      tags: ["Figma", "Sketching", "Brand Design"],
    },
    {
      category: "Internship",
      title: "App Developer Intern",
      description: "Build mobile applications with modern frameworks.",
      location: "Hybrid",
      experience: "Fresher",
      type: "Internship",
      workMode: "Remote or WFO",
      tags: ["Flutter", "React Native", "iOS", "Android"],
    },
  ];

  const benefits = [
    { icon: DollarSign, title: "Competitive Salary", desc: "Industry-aligned compensation." },
    { icon: Heart, title: "Health Benefits", desc: "Comprehensive medical coverage." },
    { icon: Coffee, title: "Flexible Hours", desc: "Balanced work schedule." },
    { icon: Plane, title: "Paid Time Off", desc: "Vacation and holidays." },
    { icon: GraduationCap, title: "Learning Budget", desc: "Annual training support." },
    { icon: UsersRound, title: "Great Culture", desc: "Friendly team environment." },
  ];

  const values = [
    { icon: Lightbulb, title: "Innovation", desc: "We encourage creative thinking and new ideas." },
    { icon: Users, title: "Collaboration", desc: "We work together with transparency and trust." },
    { icon: Shield, title: "Integrity", desc: "We stay honest and committed to our values." },
  ];

  const jobList = tab === "jobs" ? jobs : interns;
  const isJobsTab = tab === "jobs";
  const noJobs = jobs.length === 0;
  const noInterns = interns.length === 0;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative text-center px-6 pt-32 pb-20 md:py-28 bg-gradient-to-r from-[#3b1566] via-[#6b1bb4] to-[#d11eac] text-white">
        {/* Adjusted text size for mobile */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Build the Future With Us</h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-200 text-base md:text-lg">
          Join our growing team and work on exciting modern technology.
        </p>

        <button
          onClick={() => router.push("#openings")}
          className="mt-8 px-8 py-3 bg-white text-[#6b1bb4] rounded-full font-semibold shadow hover:shadow-lg transition"
        >
          View Open Positions
        </button>
      </section>

      {/* VALUES */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 md:mb-14 text-gray-800">Our Values</h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl backdrop-blur-xl bg-white/70 border border-white/40 shadow-sm hover:shadow-xl transition"
            >
              <v.icon size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-700">{v.title}</h3>
              <p className="text-gray-600 mt-3 text-sm md:text-base">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 md:py-24 px-6 text-center bg-white/50">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Benefits & Perks</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 md:mt-14">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-xl backdrop-blur-xl bg-white/70 border border-white/40 shadow hover:shadow-xl transition text-left"
            >
              <b.icon size={32} className="text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-800">{b.title}</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS HEADER */}
      <section id="openings" className="text-center pt-16 md:pt-24 pb-6 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Open Positions</h2>

        <div className="relative mt-8 inline-flex items-center backdrop-blur-xl bg-white/25 border border-white/40 rounded-full shadow-lg p-1.5 md:p-2">
          <button onClick={() => setTab("jobs")} className="relative px-4 md:px-6 py-2 rounded-full font-medium text-sm md:text-base">
            {tab === "jobs" && <ActiveTabIndicator />}
            <span className={`relative z-10 ${tab === "jobs" ? "text-blue-600" : "text-gray-600"}`}>
              Jobs
            </span>
          </button>

          <button onClick={() => setTab("interns")} className="relative px-4 md:px-6 py-2 rounded-full font-medium text-sm md:text-base">
            {tab === "interns" && <ActiveTabIndicator />}
            <span className={`relative z-10 ${tab === "interns" ? "text-blue-600" : "text-gray-600"}`}>
              Internships
            </span>
          </button>
        </div>
      </section>

      {/* JOB LIST SECTION - FIXED RESPONSIVENESS */}
      <section className="pt-6 pb-24 md:pb-32 px-4 md:px-6 max-w-5xl mx-auto space-y-8 md:space-y-10">

        {/* ⭐ NO JOBS */}
        {isJobsTab && noJobs && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-700">No Job Openings Right Now</h3>
            <p className="text-gray-600 mt-2">Please check back later.</p>
          </motion.div>
        )}

        {/* ⭐ NO INTERNSHIPS */}
        {!isJobsTab && noInterns && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-700">No Internship Openings Right Now</h3>
            <p className="text-gray-600 mt-2">Please check back later.</p>
          </motion.div>
        )}

        {/* ⭐ JOB CARDS */}
        {jobList.length > 0 &&
          jobList.map((job, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/70 border border-white/40 shadow hover:shadow-xl transition"
            >
              {/* Flex Container: Column on Mobile, Row on Desktop */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                
                {/* Content Side */}
                <div className="flex-1 w-full">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{job.category}</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">{job.type}</span>
                    <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                      {job.workMode}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-800">{job.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">{job.description}</p>

                  {/* Meta Info: Location, Exp, Mode */}
                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-600 text-sm mt-5">
                    <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={16} /> {job.experience}</span>
                    <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>
                    {/* Optional: Remove this if redundant with top badge, but kept for design consistency */}
                    <span className="flex items-center gap-1 text-purple-700 font-medium whitespace-nowrap">
                      <Clock size={16} /> {job.workMode}
                    </span>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tags.map((t, j) => (
                      <span key={j} className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button Side: Full width on mobile, Auto on desktop */}
                <button
                  onClick={() => router.push("https://vyomanexgen.com/contact")}
                  className="w-full md:w-auto px-6 py-3 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow transition-transform active:scale-95"
                >
                  Apply Now
                </button>

              </div>
            </motion.div>
          ))}
      </section>

      {/* FOOTER CTA */}
      <section className="text-center px-6 py-16 md:py-24 bg-gradient-to-r from-[#3b1566] via-[#6b1bb4] to-[#d11eac] text-white">
        <h3 className="text-lg md:text-xl font-semibold tracking-wide opacity-90">
          Don't See a Perfect Fit?
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl font-bold leading-relaxed">
          We're always looking for talented people. <br className="hidden md:block"/>
          Send your resume to <br className="md:hidden"/>
          <span className="text-yellow-300 px-2 py-1 rounded inline-block mt-2 md:mt-0">vyomanexgenservices@gmail.com</span>
        </p>
        <button
          onClick={() => router.push("https://vyomanexgen.com/contact")}
          className="mt-8 px-8 py-3 bg-white text-[#6b1bb4] rounded-full font-semibold shadow hover:shadow-lg transition"
        >
          Get in Touch
        </button>
      </section>
    </div>
  );
}