"use client";
import Image from "next/image";
import Link from "next/link";
import { JoinWaitlist } from "../features/WaitlistForm";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PAGES = [{
  "href": "/",
  "label": "Home"
}, {
  "href": "/about",
  "label": "About Us"
}, {
  "href": "/communities",
  "label": "Our Communities"
}, {
  "href": "/jobs",
  "label": "Jobs Board"
}, {
  "href": "/contact",
  "label": "Contact Us"
}]

const Nav = () => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border sticky top-8 bg-white flex p-5 justify-between rounded-md shadow z-50 mx-6 md:mx-16 m-auto">

      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/logo-light.svg"
            alt="dSandBox Logo"
            width={30}
            height={30}
            className="border size-5 md:size-10"
          />
        </Link>
        <span className="font-semibold text-lg">dSandBox</span>
      </div>

      {/* Desktop view */}
      <nav className="hidden items-center space-x-6 lg:flex">
        {
          PAGES.map((item) => (<Link key={item.href} href={item.href} className={` ${item.href == pathname && "text-primary"
            }`}>
            {item.label}
          </Link>
          )
          )
        }
      </nav>
      <div className="hidden md:block">

        <JoinWaitlist />
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-2xl lg:hidden flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image src="/logo-light.svg" alt="dSandBox Logo" width={30} height={30} />
              </Link>
              <span className="font-semibold text-lg">dSandBox</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded focus:outline-none"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <nav className="p-6 space-y-4 bg-white/50 mt-8">
            {PAGES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg ${item.href == pathname && "text-primary"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`size-8 md:hidden rounded text-pink focus:outline-none ${isMenuOpen && "ring-2 ring-yellow-500"
          }`}
      >
        <svg
          viewBox="0 0 24 24"
          // fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <g id="Menu / Menu_Alt_01">
            <path
              id="Vector"
              d="M12 17H19M5 12H19M5 7H19"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
    </header>
  );
};

export default Nav;
