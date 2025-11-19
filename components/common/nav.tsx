"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { JoinWaitlist } from "../features/WaitlistForm";
import ThemeToggle from "../ui/ThemeToggle";
import { usePathname } from "next/navigation";
import { useState } from "react";


const Nav = () => {
    const pathname = usePathname();
     const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="pt-4 lg:pt-12 px-6 lg:px-24">

    <nav className="items-center flex justify-between  w-auto border py-3.5 px-4 shadow z-50 rounded-lg border-gray-300">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/logo-light.svg"
              alt="dSandBox Logo"
              width={30}
              height={30}
              className="border w-10"
            />
          </Link>

          <span className="font-semibold text-lg">dSandBox</span>
        </div>
{/* Desktop view */}
        <div className="hidden items-center space-x-6 lg:flex">
          {
            [{
              "href":"/",
              "label":"Home"  
            },{
              "href":"/about",
              "label":"About Us"
            },{
              "href":"/communities",
              "label":"Our Communities"
            },{
              "href":"/events",
              "label":"Events"
            },{
              "href":"/jobs",
              "label":"Jobs Board"
            },{
              "href":"/contact",
              "label":"Contact Us"
            }].map((item) => (
              <Link key={item.href} href={item.href} className={classNames("", {
                "text-main-600": item.href === pathname
              })}>
                {item.label}
              </Link>
            ))
          }
        </div>
        <div className="flex items-center gap-4 px-4">
          <JoinWaitlist />
          <ThemeToggle />
{/* Mobile Menu Button */}
          <button
            className="flex h-8 w-8 flex-col items-center justify-center space-y-1 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            ></span>
          </button>
        </div>
                 {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-800 py-4 lg:hidden absolute top-20 left-0 right-0 bg-black rounded-lg ">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className={`rounded-lg px-4 py-3 transition-colors ${
                  pathname === "/"
                    ? "bg-gray-800 font-semibold text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`rounded-lg px-4 py-3 transition-colors ${
                  pathname === "/about"
                    ? "bg-gray-800 font-semibold text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/communities"
                className={`rounded-lg px-4 py-3 transition-colors ${
                  pathname === "/communities"
                    ? "bg-gray-800 font-semibold text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Communities
              </Link>
              <Link
                href="#"
                className="rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="#"
                className="rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs Board
              </Link>
              <Link
                href="#"
                className="rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              {/* Mobile CTA Button */}
              <button
                className="mt-4 rounded-lg bg-[#FF8C00] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#E67E00]"
                onClick={() => setIsMenuOpen(false)}
              >
                Try dSandBox App
              </button>
            </nav>
          </div>
        )}
    </nav>
    </div>
  );
};

export default Nav;
