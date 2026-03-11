import { FaStar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Bookservice from "./components/Bookservice";
import Aboutservices from "./components/Aboutservices";
import Services from "./components/Services";


export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 w-full">
          
          {/* Left Content */}
          <div className="text-white flex flex-col justify-center">
            <p className="text-lg mb-4 font-semibold">
              Keeping Your RO Pure and Powerful
            </p>

            <h1 className="text-5xl font-bold mb-6">
              Aqua Smart Ro <br /> Services
            </h1>

            <p className="mb-6">
              Doorstep assistance in 30 minutes, inspections and repairs at
              just ₹199.
            </p>

            <a href="tel:7499741546">
  <button className="bg-blue-600 px-6 py-3 rounded w-fit text-white hover:bg-blue-700">
    📞 7499741546
  </button>
</a>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold text-center mb-6">
              Request A Call Back
            </h2>

            <form className="space-y-4">
              <input
                className="w-full border p-2 rounded"
                placeholder="Name"
              />

              <input
                className="w-full border p-2 rounded"
                placeholder="Email"
              />

              <input
                className="w-full border p-2 rounded"
                placeholder="Phone"
              />

              <button className="bg-blue-600 text-white w-full py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

     


     <Aboutservices/>

      <Services/>
      {/* PRICING SECTION */}
<section className="py-16 bg-blue-700 text-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-center text-3xl font-bold mb-2">
      Our Pricing
    </h2>

    <p className="text-center mb-12">
      Affordable Pricing, Unmatched Service Quality
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="font-bold text-xl mb-2">
          RO Purifier General Service
        </h3>

        <p className="text-gray-500 mb-4">RO/UV/UF Water Purifier</p>

        <p className="text-3xl font-bold mb-4">₹299</p>

        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li>✔ Filter Deep Cleaning</li>
          <li>✔ Improves Water Taste</li>
          <li>✔ Ensures System Hygiene</li>
        </ul>
 <a href="tel:7499741546">
  <button className="bg-blue-600 text-white px-6 py-2 rounded">
        📞 Book Now

  </button>
  </a>
        
      </div>

      {/* Card 2 */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="font-bold text-xl mb-2">
          RO Filter Change
        </h3>

        <p className="text-gray-500 mb-4">RO/UV/UF Water Purifier</p>

        <p className="text-3xl font-bold mb-4">₹499</p>

        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li>✔ Enhances Purification Efficiency</li>
          <li>✔ Improves Water Quality</li>
          <li>✔ Prevents Health Risks</li>
        </ul>

        <a href="tel:7499741546">
  <button className="bg-blue-600 text-white px-6 py-2 rounded">
        📞 Book Now

  </button>
  </a>
      </div>

      {/* Card 3 */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="font-bold text-xl mb-2">
          RO Repair & Inspection
        </h3>

        <p className="text-gray-500 mb-4">RO/UV/UF Water Purifier</p>

        <p className="text-3xl font-bold mb-4">₹199</p>

        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li>✔ Detects Hidden Issues</li>
          <li>✔ Restores Optimal Performance</li>
          <li>✔ Prevents Future Breakdowns</li>
        </ul>

        <a href="tel:7499741546">
  <button className="bg-blue-600 text-white px-6 py-2 rounded">
        📞 Book Now

  </button>
  </a>
      </div>

      {/* Card 4 */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="font-bold text-xl mb-2">
          RO Installation
        </h3>

        <p className="text-gray-500 mb-4">RO/UV/UF Water Purifier</p>

        <p className="text-3xl font-bold mb-4">₹450</p>

        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li>✔ Proper System Setup</li>
          <li>✔ Leak-Free Fittings</li>
          <li>✔ Ensures Safe Operation</li>
        </ul>

        <a href="tel:7499741546">
  <button className="bg-blue-600 text-white px-6 py-2 rounded">
        📞 Book Now

  </button>
  </a>
      </div>

      {/* Card 5 */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="font-bold text-xl mb-2">
          RO Uninstallation
        </h3>

        <p className="text-gray-500 mb-4">RO/UV/UF Water Purifier</p>

        <p className="text-3xl font-bold mb-4">₹299</p>

        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li>✔ Safe System Removal</li>
          <li>✔ No Damage Guarantee</li>
          <li>✔ Quick Disconnection Process</li>
        </ul>

       <a href="tel:7499741546">
  <button className="bg-blue-600 text-white px-6 py-2 rounded">
    📞 Book Now

  </button>
  </a>
      </div>

      {/* Card 6 */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="font-bold text-xl mb-2">
          Complete AMC Plan
        </h3>

        <p className="text-gray-500 mb-4">RO/UV/UF Water Purifier</p>

        <p className="text-3xl font-bold mb-4">₹1999</p>

        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li>✔ Scheduled Preventive Service</li>
          <li>✔ Extended System Life</li>
          <li>✔ Priority Customer Support</li>
        </ul>
<a href="tel:7499741546">
  <button className="bg-blue-600 text-white px-6 py-2 rounded">
    📞 Book Now
  </button>
  </a>
        
      </div>

    </div>

  </div>

</section>

{/* WHY CHOOSE US */}
<section className="py-16 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <p className="text-center text-blue-600 font-semibold mb-2">
      Why Choose Us?
    </p>

    <h2 className="text-center text-3xl font-bold mb-4">
      What Makes Us the Best RO Service Provider
    </h2>

    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
      Choose us for expert RO water purifier services with trained technicians,
      genuine spare parts, quick doorstep support, transparent pricing, and
      reliable solutions for all brands.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="border rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition">
        <div className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-md mx-auto mb-4 text-2xl">
          ⚙️
        </div>

        <h3 className="font-bold text-lg mb-2">
          All-Brand Expertise
        </h3>

        <p className="text-gray-600 text-sm">
          We service and repair all RO water purifier brands and models,
          ensuring expert handling regardless of the make or type.
        </p>
      </div>

      {/* Card 2 */}
      <div className="border rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition">
        <div className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-md mx-auto mb-4 text-2xl">
          👨‍🔧
        </div>

        <h3 className="font-bold text-lg mb-2">
          Skilled & Experienced Technicians
        </h3>

        <p className="text-gray-600 text-sm">
          Our certified professionals accurately diagnose problems and
          provide long-lasting, reliable solutions.
        </p>
      </div>

      {/* Card 3 */}
      <div className="border rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition">
        <div className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-md mx-auto mb-4 text-2xl">
          ⏱️
        </div>

        <h3 className="font-bold text-lg mb-2">
          Quick Doorstep Service
        </h3>

        <p className="text-gray-600 text-sm">
          We offer fast and timely services across Mumbai, Navi Mumbai,
          Thane and Mira Bhayandar.
        </p>
      </div>

      {/* Card 4 */}
      <div className="border rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition">
        <div className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-md mx-auto mb-4 text-2xl">
          🔧
        </div>

        <h3 className="font-bold text-lg mb-2">
          Genuine Spare Parts
        </h3>

        <p className="text-gray-600 text-sm">
          Only original, high-quality RO filters, membranes and components
          are used for repairs and replacements.
        </p>
      </div>

      {/* Card 5 */}
      <div className="border rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition">
        <div className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-md mx-auto mb-4 text-2xl">
          ✅
        </div>

        <h3 className="font-bold text-lg mb-2">
          Trusted & Reliable
        </h3>

        <p className="text-gray-600 text-sm">
          A dependable name for quality RO water purifier services,
          ensuring clean and safe drinking water.
        </p>
      </div>

      {/* Card 6 */}
      <div className="border rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition">
        <div className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-md mx-auto mb-4 text-2xl">
          ₹
        </div>

        <h3 className="font-bold text-lg mb-2">
          Affordable Pricing
        </h3>

        <p className="text-gray-600 text-sm">
          Competitive rates with no hidden charges,
          offering value for every service.
        </p>
      </div>

    </div>

  </div>

</section>

{/* TESTIMONIALS */}
<section className="py-16 bg-gray-100">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-center text-3xl font-bold mb-12">
      What Clients Say About Us
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Rating Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">

        <h3 className="text-5xl font-bold">4.9</h3>

        <div className="flex justify-center text-blue-600 mt-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <p className="text-gray-500 mt-2">(50+ Reviews)</p>

        <p className="mt-6 font-semibold">
          Trusted By Our Clients
        </p>

      </div>

      {/* Testimonial 1 */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">

        <div>
          <div className="flex items-center text-blue-600 mb-3">
            <span className="font-bold mr-2">4.7</span>

            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="text-gray-600">
            Aqua Smart RO Services fixed my RO quickly and replaced
            the filters with genuine parts. Very professional and
            timely service!
          </p>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <Image
            src="/hero.png"
            alt="client"
            width={50}
            height={50}
            className="rounded-full"
          />

          <div>
            <p className="font-semibold">Rashmi D</p>
            <p className="text-sm text-gray-500">Mumbai</p>
          </div>
        </div>

      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">

        <div>
          <div className="flex items-center text-blue-600 mb-3">
            <span className="font-bold mr-2">4.9</span>

            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="text-gray-600">
            Excellent doorstep service. The technician was
            knowledgeable and made sure my RO is running
            perfectly. Highly recommend!
          </p>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <Image
            src="/hero.png"
            alt="client"
            width={50}
            height={50}
            className="rounded-full"
          />

          <div>
            <p className="font-semibold">Dinesh singh</p>
            <p className="text-sm text-gray-500">Navi Mumbai</p>
          </div>
        </div>

      </div>

    </div>

  </div>

</section>

<section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
          Book Your RO Servicing Today
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Schedule expert repair, filter replacement, or maintenance for all RO
          brands. Fast, affordable, and professional service just a call away.
          Keep your water pure and safe.
        </p>

        {/* Call Button */}
        <a
          href="tel:8446923740"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold"
        >
          <FaPhoneAlt />
          7499741546
        </a>
      </div>
    </section>


    <Bookservice/>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917499741546"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition text-3xl z-50"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}