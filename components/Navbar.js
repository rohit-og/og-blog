"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./theme-btn";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className=" bg-background/50 sticky top-0 border-b backdrop-blur">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              OG Blog
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className=" hover:text-gray-900">
              Home
            </Link>
            <Link href="/blog" className=" hover:text-gray-900">
              Blog
            </Link>
            <Link href="/about" className=" hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className=" hover:text-gray-900">
              Contact
            </Link>
            <div className="flex gap-2 items-center">
              <Button className="" variant="outline">
                Login
              </Button>
              <Button className="" variant="outline">
                Sign Up
              </Button>
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger>
                <button className="outline-none mobile-menu-button">
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                   
                   > <path d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>OG Blog</SheetTitle>
                  <SheetDescription>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      <Link
                        href="/"
                        className="block px-3 py-2  hover:text-gray-900 hover:bg-gray-100 rounded-md"
                      >
                        Home
                      </Link>
                      <Link
                        href="/blog"
                        className="block px-3 py-2  hover:text-gray-900 hover:bg-gray-100 rounded-md"
                      >
                        Blog
                      </Link>
                      <Link
                        href="/about"
                        className="block px-3 py-2  hover:text-gray-900 hover:bg-gray-100 rounded-md"
                      >
                        About
                      </Link>
                      <Link
                        href="/contact"
                        className="block px-3 py-2  hover:text-gray-900 hover:bg-gray-100 rounded-md"
                      >
                        Contact
                      </Link>
                      <div className="flex items-center gap-2">
                        <Button className="" variant="outline">
                          Login
                        </Button>
                        <Button className="" variant="outline">
                          Sign Up
                        </Button>
                        <ModeToggle />
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
