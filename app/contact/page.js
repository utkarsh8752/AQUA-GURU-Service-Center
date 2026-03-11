// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// export default function Page() {
//   return (
//     <main className="bg-slate-50 min-h-screen pb-16">
//       {/* Hero */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center" aria-hidden></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/60" aria-hidden></div>

//         <div className="relative max-w-6xl mx-auto px-6 py-20 text-center text-white">
//           <p className="uppercase tracking-[0.25em] text-xs font-semibold text-blue-200">
//             We&apos;re here to help
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold mt-3">Contact Us</h1>
//           <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
//             Reach our RO experts for bookings, quick support, or partnership inquiries. Expect a response within the next business hour.
//           </p>
//         </div>
//       </section>

//       {/* Contact Grid */}
//       <section className="relative max-w-6xl mx-auto px-6 -mt-14 grid md:grid-cols-5 gap-8">
//         {/* Info card */}
//         <div className="md:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-200 p-6 space-y-6">
//           <div>
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
//               <FaClock className="text-blue-600" />
//               Available 7 days a week
//             </div>
//             <p className="text-slate-600 mt-3">
//               Call us anytime between 8:00 AM and 9:00 PM for on-site RO service across the city.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <div className="flex gap-3 items-start">
//               <span className="p-3 rounded-xl bg-blue-50 text-blue-700">
//                 <FaPhoneAlt />
//               </span>
//               <div>
//                 <p className="text-sm text-slate-500">Call or WhatsApp</p>
//                 <a href="tel:7499741546" className="text-lg font-semibold text-slate-900 hover:text-blue-700">
//                   +91 74997 41546
//                 </a>
//               </div>
//             </div>

//             <div className="flex gap-3 items-start">
//               <span className="p-3 rounded-xl bg-blue-50 text-blue-700">
//                 <FaEnvelope />
//               </span>
//               <div>
//                 <p className="text-sm text-slate-500">Email</p>
//                 <a href="mailto:support@aqua-smart.example" className="text-lg font-semibold text-slate-900 hover:text-blue-700">
//                   support@aqua-smart.example
//                 </a>
//               </div>
//             </div>

//             <div className="flex gap-3 items-start">
//               <span className="p-3 rounded-xl bg-blue-50 text-blue-700">
//                 <FaMapMarkerAlt />
//               </span>
//               <div>
//                 <p className="text-sm text-slate-500">Service Hub</p>
//                 <p className="text-lg font-semibold text-slate-900">
//                   Pune & PCMC, Maharashtra
//                 </p>
//                 <p className="text-sm text-slate-500">On-site visits within 30–60 minutes of booking.</p>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl border border-slate-100 p-4 bg-slate-50">
//             <p className="text-sm text-slate-500">Emergency leakage or no-flow?</p>
//             <a
//               href="tel:7499741546"
//               className="mt-1 inline-flex items-center gap-2 font-semibold text-blue-700"
//             >
//               Talk to a technician now
//               <span aria-hidden>→</span>
//             </a>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="md:col-span-3 bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
//           <h2 className="text-2xl font-bold text-slate-900">Tell us about your issue</h2>
//           <p className="text-slate-500 mt-1 mb-6">
//             Share a few details and we will confirm your slot shortly.
//           </p>

//           <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="col-span-1">
//               <label className="block text-sm font-medium text-slate-700 mb-1">Full name</label>
//               <input
//                 type="text"
//                 className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Rohan Patil"
//               />
//             </div>

//             <div className="col-span-1">
//               <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
//               <input
//                 type="tel"
//                 className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="+91 9XXXXXXXXX"
//               />
//             </div>

//             <div className="col-span-1">
//               <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
//               <input
//                 type="email"
//                 className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div className="col-span-1">
//               <label className="block text-sm font-medium text-slate-700 mb-1">Preferred date</label>
//               <input
//                 type="date"
//                 className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="col-span-1 md:col-span-2">
//               <label className="block text-sm font-medium text-slate-700 mb-1">Service needed</label>
//               <select className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
//                 <option>General service</option>
//                 <option>Repair & leakage fix</option>
//                 <option>Filter / membrane change</option>
//                 <option>New installation / uninstallation</option>
//                 <option>AMC enquiry</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             <div className="col-span-1 md:col-span-2">
//               <label className="block text-sm font-medium text-slate-700 mb-1">Describe the issue</label>
//               <textarea
//                 rows="4"
//                 className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Low water flow, bad taste, leakage, etc."
//               ></textarea>
//             </div>

//             <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-2">
//               <label className="inline-flex items-center text-sm text-slate-600">
//                 <input type="checkbox" className="mr-2 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
//                 Call me back within 30 minutes
//               </label>

//               <button
//                 type="submit"
//                 className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
//               >
//                 Book a visit
//                 <span aria-hidden>→</span>
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// }



"use client"
import { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";


export default function Page() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
New RO Service Booking

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Date: ${form.date}
Service: ${form.service}
Issue: ${form.message}
`;

    const whatsappURL = `https://wa.me/917499741546?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 md:p-10">

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800">
            Book RO Service
          </h2>
          <p className="text-slate-500 mt-2">
            Fill the form and our technician will contact you shortly
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              onChange={handleChange}
              className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              onChange={handleChange}
              className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Service */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-slate-700">
              Service Needed
            </label>
            <select
              name="service"
              onChange={handleChange}
              className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option>General Service</option>
              <option>Repair</option>
              <option>Filter Change</option>
              <option>New Installation</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-slate-700">
              Describe Issue
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Example: Water leakage or bad taste"
              onChange={handleChange}
              className="w-full mt-1 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl shadow-md"
            >
              Book a Visit on WhatsApp
            </button>
          </div>

        </form>

        <a
                href="https://wa.me/917499741546"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition text-3xl z-50"
              >
                <FaWhatsapp />
              </a>

      </div>

    </main>
  );
}