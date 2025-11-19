

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { JoinWaitlist } from "../features/WaitlistForm";
import Image from "next/image";
// import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute left-4 right-4 top-4 lg:top-12 z-50 lg:left-32 lg:right-32 border border-gray-800 rounded-2xl bg-transparent shadow-md">
      <div className="container m-auto flex justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/logo-light.svg"
              alt="dSandBox Logo"
              width={30}
              height={30}
              className="border"
            />
          </Link>

          <span className="font-semibold text-lg">dSandBox</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-primary-200">
            Home
          </Link>
          <Link href="about" className="text-gray-600 hover:text-primary-200">
            About Us
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary-200"
          >
            Our Communities
          </Link>
          <Link href="#" className="text-gray-600 hover:text-primary-200">
            Events
          </Link>
          <Link href="jobs" className="text-gray-600 hover:text-primary-200">
            Jobs Board
          </Link>
          <Link href="contact" className="text-gray-600 hover:text-primary-200">
            Contact Us
          </Link>
        </div>

        <JoinWaitlist />
      </div>
    </header>
  );
}
