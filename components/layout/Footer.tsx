/// components/layout/Footer.tsx
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
// } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-black py-16 lg:px-20 px-4">
        <div className="mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 gap-8 border-gray-800 pb-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* Contact Info - First Column */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="mb-6 flex items-center">
                <img
                  src="/logo.png"
                  alt="dSandBox logo"
                  className="mr-3 h-6 w-6"
                />
                <h3 className="text-2xl font-bold">dSandBox</h3>
              </div>

              <div className="space-y-4 text-gray-400">
                {/* Address */}
                <div>
                  {/* <div>Ogbomoso, Oyo state, Nigeria.</div> */}
                  {/* Phone numbers - indented under address */}
                  <div className="mt-2 space-y-1">
                    <p className="flex items-center">
                      📍 Ogbomoso, Oyo state, Nigeria.
                    </p>
                    <p className="flex items-center">📞 +234 90 3840 0587</p>
                    <p className="flex items-center">📱 +234 90 3840 0587</p>
                    <p className="flex items-center">✉️ info@dsandbox.space</p>
                  </div>
                </div>

                {/* Email */}
                <div className="pt-2">info@dsandbox.space</div>

                {/* Social Icons */}
                <div className="flex space-x-4 pt-4">
                  {/* <FaFacebookF className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-white" />
                  <FaTwitter className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-white" />
                  <FaInstagram className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-white" />
                  <FaLinkedinIn className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-white" /> */}
                </div>
              </div>
            </div>

            {/* Education - Second Column */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-[#FF8C00]">
                Education
              </h3>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Graphics Designer",
                  "UI/UX Designer",
                  "Webflow Designer",
                  "Wordpress Designer",
                  "Web Development",
                  "Framer Designer",
                  "Graphic Designers",
                  "Shopify Designers",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Communities - Third Column */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-[#FF8C00]">
                Communities
              </h3>
              <ul className="space-y-3 text-gray-400">
                {["Ogbomoso", "Ibadan", "Osogbo", "Port-harcourt"].map(
                  (item) => (
                    <li key={item}>{item}</li>
                  ),
                )}
              </ul>
            </div>

            {/* Lorem Ipsum - Fourth Column */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-[#FF8C00]">
                Lorem Ipsum
              </h3>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Email Marketing",
                  "Social Media Marketing",
                  "Search Engine Optimization",
                  "Product Development",
                  "Web Development",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright */}
      <div className="py-5 text-center bg-black dark:bg-transparent">
        <p className="text-sm text-gray-300">
          © dSandBox 2025. All Rights Reserved
        </p>
      </div>
    </>
  );
}
