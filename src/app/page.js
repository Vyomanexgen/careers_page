// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import Navbar from "./components/Navbar";

// // Icons
// import {
//   Lightbulb,
//   Users,
//   Shield,
//   DollarSign,
//   Heart,
//   Coffee,
//   Plane,
//   GraduationCap,
//   UsersRound,
//   MapPin,
//   Briefcase,
//   Clock,
// } from "lucide-react";

// export default function Careers() {
//   const router = useRouter();
//   const [tab, setTab] = useState("jobs");

//   const fadeUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const ActiveTabIndicator = () => (
//     <motion.span
//       layoutId="active-pill"
//       className="absolute inset-0 z-0 bg-white rounded-full shadow"
//       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//     />
//   );

//   const jobs = [
//     {
//       category: "Developer",
//       title: "App Developer",
//       description: "Develop mobile applications with modern frameworks.",
//       location: "Hybrid",
//       experience: "Fresher",
//       type: "Full-time",
//       tags: ["Flutter", "React Native", "iOS", "Android"],
//     },
//     {
//       category: "Engineering",
//       title: "Senior Full-Stack Developer",
//       description: "Lead full-stack projects and guide junior developers.",
//       location: "Remote",
//       experience: "Fresher",
//       type: "Full-time",
//       tags: ["React", "Node.js", "AWS", "Microservices"],
//     },
//     {
//       category: "Design",
//       title: "UI/UX Designer",
//       description: "Design user-friendly modern product experiences.",
//       location: "Remote",
//       experience: "Fresher",
//       type: "Full-time",
//       tags: ["Figma", "Wireframing", "User Research"],
//     },
//   ];

//   const interns = [
//     {
//       category: "Internship",
//       title: "Frontend Developer Intern",
//       description: "Learn real-world React development.",
//       location: "Remote",
//       experience: "Fresher",
//       type: "Internship",
//       tags: ["React", "Tailwind", "HTML", "CSS"],
//     },
//     {
//       category: "Internship",
//       title: "UI/UX Intern",
//       description: "Assist product design team and learn design workflows.",
//       location: "Hybrid",
//       experience: "Fresher",
//       type: "Internship",
//       tags: ["Figma", "Sketching", "Brand Design"],
//     },
//   ];

//   const benefits = [
//     { icon: DollarSign, title: "Competitive Salary", desc: "Industry-aligned compensation packages." },
//     { icon: Heart, title: "Health Benefits", desc: "Comprehensive medical coverage." },
//     { icon: Coffee, title: "Flexible Hours", desc: "Balanced work schedule." },
//     { icon: Plane, title: "Paid Time Off", desc: "Vacation, holidays, and family leave." },
//     { icon: GraduationCap, title: "Learning Budget", desc: "Annual training and upskilling support." },
//     { icon: UsersRound, title: "Great Team Culture", desc: "Friendly and collaborative team environment." },
//   ];

//   const values = [
//     { icon: Lightbulb, title: "Innovation", desc: "We encourage creative thinking and new ideas." },
//     { icon: Users, title: "Collaboration", desc: "We work together with transparency and trust." },
//     { icon: Shield, title: "Integrity", desc: "We stay honest and committed to our values." },
//   ];

//   const jobList = tab === "jobs" ? jobs : interns;

//   return (
//     <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">

//       {/* NAVBAR */}
//       <Navbar />

//       {/* HERO */}
//       <section className="relative text-center px-6 py-28 bg-gradient-to-r from-[#3b1566] via-[#6b1bb4] to-[#d11eac] text-white">
//         <h1 className="text-5xl font-extrabold">Build the Future With Us</h1>
//         <p className="mt-4 max-w-3xl mx-auto text-gray-200 text-lg">
//           Join our growing team and work on exciting modern technology.
//         </p>

//         <button
//           onClick={() => router.push("#openings")}
//           className="mt-8 px-8 py-3 bg-white text-[#6b1bb4] rounded-full font-semibold shadow hover:shadow-lg transition"
//         >
//           View Open Positions
//         </button>
//       </section>

//       {/* VALUES */}
//       <section className="py-24 px-6 max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold mb-14 text-gray-800">Our Values</h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {values.map((v, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="p-10 rounded-2xl backdrop-blur-xl bg-white/70 border border-white/40 shadow-sm hover:shadow-xl transition"
//             >
//               <v.icon size={48} className="mx-auto text-blue-600 mb-4" />
//               <h3 className="text-2xl font-bold text-gray-700">{v.title}</h3>
//               <p className="text-gray-600 mt-3">{v.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* BENEFITS */}
//       <section className="py-24 px-6 text-center">
//         <h2 className="text-4xl font-extrabold text-gray-800">Benefits & Perks</h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14">
//           {benefits.map((b, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="p-8 rounded-xl backdrop-blur-xl bg-white/70 border border-white/40 shadow hover:shadow-xl transition text-left"
//             >
//               <b.icon size={48} className="text-blue-600 mb-4" />
//               <h3 className="text-xl font-bold text-gray-800">{b.title}</h3>
//               <p className="text-gray-600 mt-3">{b.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* OPEN POSITIONS */}
//       <section id="openings" className="text-center pt-24 pb-6">
//         <h2 className="text-4xl font-extrabold text-gray-800">Open Positions</h2>

//         {/* TAB SWITCH */}
//         <div className="relative mt-8 inline-flex items-center backdrop-blur-xl bg-white/25 border border-white/40 rounded-full shadow-lg p-2">
//           <button onClick={() => setTab("jobs")} className="relative px-6 py-2 rounded-full font-medium">
//             {tab === "jobs" && <ActiveTabIndicator />}
//             <span className={`relative z-10 ${tab === "jobs" ? "text-blue-600" : "text-gray-600"}`}>
//               Jobs
//             </span>
//           </button>

//           <button onClick={() => setTab("interns")} className="relative px-6 py-2 rounded-full font-medium">
//             {tab === "interns" && <ActiveTabIndicator />}
//             <span className={`relative z-10 ${tab === "interns" ? "text-blue-600" : "text-gray-600"}`}>
//               Internships
//             </span>
//           </button>
//         </div>
//       </section>

//       {/* JOB LIST */}
//       <section className="pt-6 pb-32 px-6 max-w-5xl mx-auto space-y-10">
//         {jobList.map((job, i) => (
//           <motion.div
//             key={i}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="p-8 rounded-2xl backdrop-blur-xl bg-white/70 border border-white/40 shadow hover:shadow-xl transition"
//           >
//             <div className="flex justify-between flex-wrap gap-6">

//               <div>
//                 <div className="flex gap-3 mb-3">
//                   <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{job.category}</span>
//                   <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{job.type}</span>
//                 </div>

//                 <h3 className="text-2xl font-extrabold text-gray-800">{job.title}</h3>
//                 <p className="text-gray-600 mt-2">{job.description}</p>

//                 <div className="flex gap-6 text-gray-600 text-sm mt-5">
//                   <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
//                   <span className="flex items-center gap-1"><Briefcase size={16} /> {job.experience}</span>
//                   <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>
//                 </div>

//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {job.tags.map((t, j) => (
//                     <span key={j} className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">{t}</span>
//                   ))}
//                 </div>
//               </div>

//               <button
//                 onClick={() => router.push("https://vyomanexgen.com/contact")}
//                 className="self-center px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow"
//               >
//                 Apply Now
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </section>

//       {/* FOOTER CTA */}
//       <section className="relative text-center px-6 py-24 bg-gradient-to-r from-[#3b1566] via-[#6b1bb4] to-[#d11eac] text-white">
//         <h3 className="text-xl font-semibold tracking-wide">
//           Don't See a Perfect Fit?
//         </h3>
//         <p className="mt-4 max-w-2xl mx-auto text-2xl font-bold">
//          We're always looking for talented people. <br/>
//          Send us your resume to our mail id "<span className="text-violet-500  px-2 py-1 rounded font-bold">vyomanexgenservices@gmail.com</span>" and let's talk
//           about how you can contribute to our team.
//         </p>
//         <button
//           onClick={() => router.push("https://vyomanexgen.com/contact")}
//           className="mt-8 px-8 py-3 bg-white text-[#6b1bb4] rounded-full font-semibold shadow hover:shadow-lg transition"
//         >
//           Get in Touch
//         </button>
//       </section>
//     </div>
//   );
// }
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
  PersonStanding,
  PercentSquareIcon,
  SquareActivityIcon,
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

  // ===========================
  //  UPDATED: added workMode
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
    { icon: DollarSign, title: "Competitive Salary", desc: "Industry-aligned compensation packages." },
    { icon: Heart, title: "Health Benefits", desc: "Comprehensive medical coverage." },
    { icon: Coffee, title: "Flexible Hours", desc: "Balanced work schedule." },
    { icon: Plane, title: "Paid Time Off", desc: "Vacation, holidays, and family leave." },
    { icon: GraduationCap, title: "Learning Budget", desc: "Annual training and upskilling support." },
    { icon: UsersRound, title: "Great Team Culture", desc: "Friendly and collaborative team environment." },
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
      <section className="relative text-center px-6 py-28 bg-gradient-to-r from-[#3b1566] via-[#6b1bb4] to-[#d11eac] text-white">
        <h1 className="text-5xl font-extrabold">Build the Future With Us</h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-200 text-lg">
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
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-14 text-gray-800">Our Values</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-10 rounded-2xl backdrop-blur-xl bg-white/70 border border-white/40 shadow-sm hover:shadow-xl transition"
            >
              <v.icon size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-700">{v.title}</h3>
              <p className="text-gray-600 mt-3">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">Benefits & Perks</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-xl backdrop-blur-xl bg-white/70 border border-white/40 shadow hover:shadow-xl transition text-left"
            >
              <b.icon size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800">{b.title}</h3>
              <p className="text-gray-600 mt-3">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="openings" className="text-center pt-24 pb-6">
        <h2 className="text-4xl font-extrabold text-gray-800">Open Positions</h2>

        <div className="relative mt-8 inline-flex items-center backdrop-blur-xl bg-white/25 border border-white/40 rounded-full shadow-lg p-2">
          <button onClick={() => setTab("jobs")} className="relative px-6 py-2 rounded-full font-medium">
            {tab === "jobs" && <ActiveTabIndicator />}
            <span className={`relative z-10 ${tab === "jobs" ? "text-blue-600" : "text-gray-600"}`}>
              Jobs
            </span>
          </button>

          <button onClick={() => setTab("interns")} className="relative px-6 py-2 rounded-full font-medium">
            {tab === "interns" && <ActiveTabIndicator />}
            <span className={`relative z-10 ${tab === "interns" ? "text-blue-600" : "text-gray-600"}`}>
              Internships
            </span>
          </button>
        </div>
      </section>

      {/* =========================== */}
      {/* UPDATED: JOB LIST SECTION   */}
      {/* =========================== */}
     {/* JOB LIST */}
<section className="pt-6 pb-32 px-6 max-w-5xl mx-auto space-y-10">

  {/* ⭐ NO JOBS */}
  {isJobsTab && noJobs && (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20"
    >
      <h3 className="text-3xl font-bold text-gray-700">No Job Openings Right Now</h3>
      <p className="text-gray-600 mt-2">Please check back later.</p>
    </motion.div>
  )}

  {/* ⭐ NO INTERNSHIPS */}
  {!isJobsTab && noInterns && (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20"
    >
      <h3 className="text-3xl font-bold text-gray-700">No Internship Openings Right Now</h3>
      <p className="text-gray-600 mt-2">Please check back later.</p>
    </motion.div>
  )}

  {/* ⭐ SHOW CARDS IF AVAILABLE */}
  {jobList.length > 0 &&
    jobList.map((job, i) => (
      <motion.div
        key={i}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="p-8 rounded-2xl backdrop-blur-xl bg-white/70 border border-white/40 shadow hover:shadow-xl transition"
      >
        <div className="flex justify-between flex-wrap gap-6">
          
          <div>
            {/* badges */}
            <div className="flex gap-3 mb-3">
              <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{job.category}</span>
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{job.type}</span>

              <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                {job.workMode}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-gray-800">{job.title}</h3>
            <p className="text-gray-600 mt-2">{job.description}</p>

            <div className="flex gap-6 text-gray-600 text-sm mt-5">
              <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
              <span className="flex items-center gap-1"><Briefcase size={16} /> {job.experience}</span>
              <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>

              <span className="flex items-center gap-1 text-purple-700 font-medium">
                <Clock size={16} /> {job.workMode}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.tags.map((t, j) => (
                <span key={j} className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => router.push("https://vyomanexgen.com/contact")}
            className="self-center px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow"
          >
            Apply Now
          </button>

        </div>
      </motion.div>
    ))}
</section>


      {/* FOOTER CTA */}
      <section className="text-center px-6 py-24 bg-gradient-to-r from-[#3b1566] via-[#6b1bb4] to-[#d11eac] text-white">
         <h3 className="text-xl font-semibold tracking-wide">
          Don't See a Perfect Fit?
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-2xl font-bold">
         We're always looking for talented people. <br/>Send us your resume to our mail id "<span className="text-violet-500  px-2 py-1 rounded font-bold">vyomanexgenservices@gmail.com</span>". <br/>Let's talk
          about how you can contribute to our team.
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
