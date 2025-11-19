

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute left-4 right-4 top-4 lg:top-12 z-50 lg:left-32 lg:right-32 border border-gray-800 rounded-2xl bg-transparent shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-xl font-bold text-white transition-colors hover:text-gray-300"
          >
            <img
              src="/logo.png"
              alt="dSandBox logo"
              className="mr-3 h-8 w-8 object-contain"
            />
            <span>dSandBox</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 lg:flex">
            <Link
              href="/"
              className={`rounded-lg px-3 py-2 transition-colors ${
                pathname === "/"
                  ? "bg-gray-800 font-semibold text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`rounded-lg px-3 py-2 transition-colors ${
                pathname === "/about"
                  ? "bg-gray-800 font-semibold text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/communities"
              className={`rounded-lg px-3 py-2 transition-colors ${
                pathname === "/communities"
                  ? "bg-gray-800 font-semibold text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Our Communities
            </Link>
            <Link
              href="/events"
              className="rounded-lg px-3 py-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
            >
              Events
            </Link>
            <Link
              href="#"
              className="rounded-lg px-3 py-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
            >
              Jobs Board
            </Link>
            <Link
              href="#"
              className="rounded-lg px-3 py-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <button className="hidden rounded-lg bg-[#FF8C00] px-6 py-2 font-semibold text-white transition-colors hover:bg-[#E67E00] lg:block">
            Try dSandBox App
          </button>

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
          <div className="border-t border-gray-800 py-4 lg:hidden">
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
      </div>
    </header>
  );
}
