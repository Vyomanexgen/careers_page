"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  X, // Added X icon for closing modal
  CheckCircle2, // Added for bullet points
} from "lucide-react";

export default function Careers() {
  const router = useRouter();
  const [tab, setTab] = useState("jobs");
  
  // State to handle the popup
  const [selectedJob, setSelectedJob] = useState(null);

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

  // ===========================
  //  UPDATED DATA WITH DETAILS
  // ===========================
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
      responsibilities: [
        "Design and build sophisticated applications for the iOS and Android platforms.",
        "Collaborate with cross-functional teams to define, design, and ship new features.",
        "Work with outside data sources and APIs.",
        "Unit-test code for robustness, including edge cases, usability, and general reliability.",
        "Continuously discover, evaluate, and implement new technologies to maximize development efficiency."
      ]
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
      responsibilities: [
        "Assist in developing user-facing features using React.js.",
        "Build reusable components and front-end libraries for future use.",
        "Translate designs and wireframes into high-quality code.",
        "Optimize components for maximum performance across a vast array of web-capable devices and browsers."
      ]
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
      responsibilities: [
        "Collaborate with product management and engineering to define and implement innovative solutions.",
        "Execute all visual design stages from concept to final hand-off to engineering.",
        "Create wireframes, storyboards, user flows, process flows and site maps.",
        "Establish and promote design guidelines, best practices and standards."
      ]
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
      responsibilities: [
        "Support the entire application lifecycle (concept, design, test, release and support).",
        "Produce fully functional mobile applications writing clean code.",
        "Gather specific requirements and suggest solutions.",
        "Write unit and UI tests to identify malfunctions."
      ]
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

      {/* JOB LIST SECTION */}
      <section className="pt-6 pb-24 md:pb-32 px-4 md:px-6 max-w-5xl mx-auto space-y-8 md:space-y-10">

        {isJobsTab && noJobs && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-700">No Job Openings Right Now</h3>
            <p className="text-gray-600 mt-2">Please check back later.</p>
          </motion.div>
        )}

        {!isJobsTab && noInterns && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-700">No Internship Openings Right Now</h3>
            <p className="text-gray-600 mt-2">Please check back later.</p>
          </motion.div>
        )}

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
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                
                {/* Content Side */}
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{job.category}</span>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">{job.type}</span>
                    <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                      {job.workMode}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-800">{job.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">{job.description}</p>

                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-600 text-sm mt-5">
                    <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={16} /> {job.experience}</span>
                    <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tags.map((t, j) => (
                      <span key={j} className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons: Stacked on mobile, row on desktop */}
                <div className="flex flex-col w-full md:w-auto gap-3">
                  <button
                    onClick={() => router.push("https://vyomanexgen.com/contact")}
                    className="w-full md:w-40 px-6 py-3 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow transition-transform active:scale-95"
                  >
                    Apply Now
                  </button>
                  
                  {/* NEW BUTTON: VIEW DETAILS */}
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full md:w-40 px-6 py-3 text-sm bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 rounded-full font-semibold transition-transform active:scale-95"
                  >
                    View Details
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
      </section>

      {/* FOOTER CTA */}
      <section className="text-center px-6 py-16 md:py-24 bg-gradient-to-r from-[#3b1566] via-[#6b1bb4] to-[#d11eac] text-white">
        <h3 className="text-xl font-semibold tracking-wide">
          Don't See a Perfect Fit?
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-2xl font-bold">
         We're always looking for talented people.<br/> Send us your resume to our mail id "<span className="text-violet-500  px-2 py-1 rounded font-bold">vyomanexgenservices@gmail.com</span>". <br/>Let's talk
          about how you can contribute to our team.
        </p>
        <button
          onClick={() => router.push("https://vyomanexgen.com/contact")}
          className="mt-8 px-8 py-3 bg-white text-[#6b1bb4] rounded-full font-semibold shadow hover:shadow-lg transition"
        >
          Get in Touch
        </button>
      </section>

     
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedJob(null)} // Close when clicking background
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on box click
              className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
            >
              
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex justify-between items-start bg-gray-50">
                <div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-md uppercase tracking-wide">
                    {selectedJob.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">{selectedJob.title}</h3>
                  <p className="text-gray-500 text-sm">{selectedJob.location} • {selectedJob.type}</p>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="p-2 hover:bg-gray-200 rounded-full transition"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-6 overflow-y-auto">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Role & Responsibilities</h4>
                
                {selectedJob.responsibilities ? (
                  <ul className="space-y-3">
                    {selectedJob.responsibilities.map((item, index) => (
                      <li key={index} className="flex gap-3 text-gray-600 leading-relaxed text-sm md:text-base">
                        <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">No detailed description available for this role.</p>
                )}

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.tags.map((tag, i) => (
                       <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                         {tag}
                       </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-100 bg-gray-50 flex gap-3">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 py-3 text-gray-600 font-semibold hover:text-gray-900 transition"
                >
                  Close
                </button>
                <button
                  onClick={() => router.push("https://vyomanexgen.com/contact")}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg transition"
                >
                  Apply Now
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}