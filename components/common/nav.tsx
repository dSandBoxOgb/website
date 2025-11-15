import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between  bg-gray-50 m-auto my-5 sticky top-5 z-50 p-6 rounded container">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="dSandBox Logo" width={30} height={30} className="border" />
        <span className="font-semibold text-lg">dSandBox</span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link href="about" className="text-gray-600 hover:text-gray-900">
          About Us
        </Link>
        <Link href="communities" className="text-gray-600 hover:text-gray-900">
          Our Communities
        </Link>
        <Link href="events" className="text-gray-600 hover:text-gray-900">
          Events
        </Link>
        <Link href="jobs" className="text-gray-600 hover:text-gray-900">
          Jobs Board
        </Link>
        <Link href="contact" className="text-gray-600 hover:text-gray-900">
          Contact Us
        </Link>
      </div>

      <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
        Contact
      </Button>
    </nav>
  );
};

export default Navigation;
