"use client";

import React from "react";
import Link from "next/link";

// Define the interface for menu items
interface MenuItem {
    name: string;
    route: string;
}

// Define menu items with name and route properties
const menuItems: MenuItem[] = [
    { name: "Home", route: "#" },
    { name: "About", route: "#about" },
    { name: "Projects", route: "#projects" },
    { name: "Contact", route: "#contact" }
];

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    return (
        <nav className="sticky top-0 z-20 bg-background border-b border-gray-200 dark:border-gray-700 w-full backdrop-blur-sm bg-background/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center h-16">

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1">
                        {menuItems.map((item) => (
                            <div key={item.name} className="group relative">
                                <div className="absolute -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg opacity-0 group-hover:opacity-100 group-hover:-inset-1 transition-all duration-200 animate-tilt"></div>
                                <Link
                                    href={item.route}
                                    className="relative px-4 py-2 text-sm font-medium text-foreground bg-background rounded-xl border border-transparent group-hover:border-gray-200  dark:group-hover:border-gray-700 group-hover:bg-black transition-all duration-200"
                                >
                                    {item.name}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-foreground hover:text-blue-600 p-2 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className={`h-6 w-6 transition-transform duration-200 ${
                                    isMenuOpen ? 'rotate-90' : ''
                                }`}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <g>
                                        <path d="M6 18L18 6" />
                                        <path d="M6 6L18 18" />
                                    </g>
                                ) : (
                                    <g>
                                        <path d="M4 6L20 6" />
                                        <path d="M4 12L20 12" />
                                        <path d="M4 18L20 18" />
                                    </g>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div 
                    className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out backdrop-blur-sm bg-background/80  ${
                        isMenuOpen 
                            ? 'max-h-64 opacity-100' 
                            : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-gray-200 dark:border-gray-700" >
                        {menuItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.route}
                                className={`block text-foreground hover:text-blue-600 px-3 py-2 text-base font-medium transition-all duration-200 transform ${
                                    isMenuOpen 
                                        ? 'translate-x-0 opacity-100' 
                                        : 'translate-x-4 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
