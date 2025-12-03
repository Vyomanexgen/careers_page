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
  X,
  CheckCircle2,
  Building2, // Icon for Office
  Wifi,      // Icon for Remote
  Laptop2,   // Icon for Hybrid
  Code2,     // Added for generic dev icon
} from "lucide-react";

export default function Careers() {
  const router = useRouter();
  const [tab, setTab] = useState("jobs");
  
  // State for the modal
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

  // ==========================================
  //  UPDATED DATA (New Next.js Roles Added)
  // ==========================================
  const jobs = [

    //  {
    //   category: "Developer",
    //   title: "Mobile App Developer",
    //   description: "Develop mobile applications with modern frameworks.",
    //   location: "Hyderabad, India",
    //   experience: "0 Years",
    //   type: "Full-time",
    //   workMode: "Hybrid",
    //   tags: ["Flutter", "React Native", "iOS", "Android"],
    //   about: "We are seeking a talented App Developer to build sophisticated applications for iOS and Android. You will work closely with our product team to deliver seamless mobile experiences.",
    //   responsibilities: [
    //     "Design and build advanced applications for the iOS and Android platforms.",
    //     "Collaborate with cross-functional teams to define, design, and ship new features.",
    //     "Work with outside data sources and APIs.",
    //     "Unit-test code for robustness, including edge cases, usability, and general reliability.",
    //     "Fix bugs and improve application performance."
    //   ],
    //   requirements: [
    //     "B.Tech/B.E in Computer Science or relevant field.",
    //     "Proven software development experience and Android/iOS skills development.",
    //     "Experience with Flutter or React Native is a must.",
    //     "Experience with third-party libraries and APIs.",
    //     "Solid understanding of the full mobile development life cycle.",
    //     "Strong problem-solving skills and ability to troubleshoot complex issues."
    //   ]
    // },
    // {
    //   category: "Developer",
    //   title: "Next.js Developer",
    //   description: "Build high-performance web applications using Next.js & React.",
    //   location: "Hyderabad, India",
    //   experience: "0 Years",
    //   type: "Full-time",
    //   workMode: "Work From Office",
    //   tags: ["Next.js 14", "TypeScript", "Tailwind", "Redux"],
    //   about: "We are looking for a skilled Next.js Developer to join our core engineering team. You will be responsible for architecting and building scalable web applications, ensuring high performance and SEO optimization using the latest Next.js features (App Router, Server Actions).",
    //   responsibilities: [
    //     "Develop and maintain scalable web applications using Next.js (App Router) and TypeScript.",
    //     "Implement Server-Side Rendering (SSR) and Static Site Generation (SSG) for optimal performance.",
    //     "Collaborate with UI/UX designers to translate Figma designs into pixel-perfect, responsive code.",
    //     "Optimize applications for maximum speed, SEO, and scalability.",
    //     "Integrate RESTful APIs and third-party services (e.g., Stripe, Firebase, AWS)."
    //   ],
    //   requirements: [
    //     "Strong proficiency in JavaScript (ES6+), TypeScript, and React.js.",
    //     "In-depth knowledge of Next.js features (Routing, Image Optimization, Middleware).",
    //     "Experience with state management libraries (Redux Toolkit, Zustand, or Context API).",
    //     "Proficiency in Tailwind CSS and modern styling frameworks.",
    //     "Understanding of SEO principles and Core Web Vitals.",
    //     "Experience with version control (Git) and CI/CD pipelines."
    //   ]
    // },
   
  ];

  const interns = [
    {
      category: "Internship",
      title: "Next.js Developer Intern",
      description: "Learn modern web development with Next.js.",
      location: "Remote",
      experience: "Fresher",
      type: "Internship",
      workMode: "Remote",
      tags: ["Next.js", "React", "JavaScript", "CSS"],
      about: "This internship is designed for aspiring web developers who want to master the Next.js ecosystem. You will work on real-world projects, learning how to build production-grade applications.",
      responsibilities: [
        "Assist senior developers in building UI components using React and Tailwind CSS.",
        "Learn and implement Next.js concepts like Routing and Data Fetching.",
        "Fix bugs and assist in code maintenance.",
        "Participate in code reviews and team meetings.",
        "Write clean, maintainable, and documented code."
      ],
      requirements: [
        "Solid understanding of HTML5, CSS3, and JavaScript.",
        "Basic knowledge of React.js (Components, Props, State).",
        "Familiarity with Next.js structure is a plus.",
        "Eagerness to learn new technologies and frameworks.",
        "Good communication skills and ability to work in a remote team."
      ]
    },
    {
      category: "Internship",
      title: "Frontend Developer Intern",
      description: "Learn real-world React development.",
      location: "Remote",
      experience: "Fresher",
      type: "Internship",
      workMode: "Remote",
      tags: ["React", "Tailwind", "HTML", "CSS"],
      about: "Kickstart your career with our Frontend Internship. You will work alongside senior developers to build responsive web interfaces using modern technologies like React.js and Tailwind CSS.",
      responsibilities: [
        "Assist in developing user-facing features using React.js.",
        "Build reusable components and front-end libraries for future use.",
        "Translate designs and wireframes into high-quality code.",
        "Optimize components for maximum performance across various devices.",
        "Ensure the technical feasibility of UI/UX designs."
      ],
      requirements: [
        "Basic knowledge of HTML, CSS, and JavaScript.",
        "Familiarity with React.js framework and hooks.",
        "Understanding of responsive design principles (Mobile-First approach).",
        "Familiarity with Git/GitHub is preferred.",
        "Strong attention to detail."
      ]
    },
    {
      category: "Internship",
      title: "UI/UX Intern",
      description: "Assist product design team and learn design workflows.",
      location: "Hyderabad, India",
      experience: "Fresher",
      type: "Internship",
      workMode: "Hybrid",
      tags: ["Figma", "Sketching", "Brand Design"],
      about: "Join our creative team to design intuitive and beautiful user experiences. You will learn how to take a concept from a rough sketch to a polished, high-fidelity prototype.",
      responsibilities: [
        "Collaborate with product management to define innovative solutions.",
        "Execute visual design stages from concept to final hand-off.",
        "Create wireframes, storyboards, user flows, and site maps.",
        "Conduct user research and evaluate user feedback.",
        "Establish and promote design guidelines and standards."
      ],
      requirements: [
        "Portfolio of design projects (academic or personal).",
        "Proficiency in Figma, Adobe XD, or Sketch.",
        "Strong eye for aesthetics, typography, and color theory.",
        "Basic understanding of HTML/CSS is a plus (to understand dev constraints).",
        "Good communication skills."
      ]
    },
    {
      category: "Internship",
      title: "App Developer Intern",
      description: "Build mobile applications with modern frameworks.",
      location: "Hyderabad, India",
      experience: "Fresher",
      type: "Internship",
      workMode: "Hybrid",
      tags: ["Flutter", "React Native", "iOS", "Android"],
      about: "An excellent opportunity for budding mobile developers to gain hands-on experience in building apps for iOS and Android ecosystems.",
      responsibilities: [
        "Support the entire application lifecycle (concept, design, test, release).",
        "Produce fully functional mobile applications writing clean code.",
        "Gather specific requirements and suggest solutions.",
        "Write unit and UI tests to identify malfunctions.",
        "Research and suggest new mobile products, applications and protocols."
      ],
      requirements: [
        "Basic understanding of Flutter or React Native.",
        "Knowledge of Dart or JavaScript/TypeScript.",
        "Familiarity with REST APIs and JSON.",
        "Problem-solving mindset and ability to learn quickly.",
        "A personal project or app (even simple ones) is a big plus."
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

  // Helper to get Icon for Work Mode
  const getWorkModeIcon = (mode) => {
    if (mode.includes("Remote")) return <Wifi size={18} />;
    if (mode.includes("Hybrid")) return <Laptop2 size={18} />;
    return <Building2 size={18} />;
  };

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
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tags.map((t, j) => (
                      <span key={j} className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col w-full md:w-auto gap-3">
                  <button
                    onClick={() => router.push("https://vyomanexgen.com/contact")}
                    className="w-full md:w-40 px-6 py-3 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow transition-transform active:scale-95"
                  >
                    Apply Now
                  </button>
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

      {/* ================================== */}
      {/* RESPONSIVE JOB DESCRIPTION MODAL  */}
      {/* ================================== */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedJob(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
            >
              
              {/* Header */}
              <div className="flex-shrink-0 p-5 md:p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-start">
                <div>
                   <div className="flex gap-2 mb-2">
                     <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-md uppercase tracking-wide">
                      {selectedJob.category}
                     </span>
                     {/* Work Mode Badge in Header */}
                     <span className={`text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide flex items-center gap-1 ${
                       selectedJob.workMode.includes("Remote") ? "text-green-600 bg-green-100" : "text-purple-600 bg-purple-100"
                     }`}>
                       {getWorkModeIcon(selectedJob.workMode)}
                       {selectedJob.workMode}
                     </span>
                   </div>

                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">
                    {selectedJob.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 flex flex-wrap gap-2 items-center">
                    <MapPin size={14}/> {selectedJob.location} 
                    <span className="text-gray-300">|</span> 
                    <Briefcase size={14}/> {selectedJob.type}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="flex-1 p-5 md:p-8 overflow-y-auto space-y-6">
                
                {/* 1. About the Role */}
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">About the Role</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {selectedJob.about}
                  </p>
                </div>

                {/* 2. Key Responsibilities */}
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {selectedJob.responsibilities && selectedJob.responsibilities.map((item, index) => (
                      <li key={index} className="flex gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                 {/* 3. Requirements */}
                 {selectedJob.requirements && (
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-3">
                      {selectedJob.requirements.map((item, index) => (
                        <li key={index} className="flex gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                          <div className="h-1.5 w-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                 )}

                {/* 4. Tech Stack */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.tags.map((tag, i) => (
                       <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium border border-gray-200">
                         {tag}
                       </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer Buttons */}
              <div className="flex-shrink-0 p-4 border-t border-gray-100 bg-gray-50 flex gap-3">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 py-3 text-gray-600 font-semibold hover:bg-gray-200 rounded-xl transition"
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