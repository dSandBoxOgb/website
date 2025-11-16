import Image from "next/image";
import Link from "next/link";
import { JoinWaitlist } from "../features/WaitlistForm";

const Nav = () => {
  return (
    <nav className="flex items-center  bg-gray-50  sticky top-0 border p-6 shadow z-50 rounded">
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
    </nav>
  );
};

export default Nav;
