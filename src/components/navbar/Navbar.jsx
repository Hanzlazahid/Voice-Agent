"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navRef = useRef(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
                setActiveDropdown(null);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 rounded-lg shadow-lg">
            <div className="max-w-[100rem] mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-24">
                    {/* Logo - Left */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center cursor-pointer">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-2">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="text-white font-semibold text-3xl">Voice Agent</span>
                        </Link>
                    </div>

                    {/* Desktop Menu - Center */}
                    <div className="hidden lg:flex items-center justify-center flex-1">
                        <div className="flex items-baseline space-x-8">
                            {/* Solutions Dropdown */}
                            <div className="relative group">
                                <button
                                    className="text-white hover:text-gray-300 px-3 py-2 text-lg font-medium flex items-center transition-colors duration-200 cursor-pointer"
                                >
                                    Solutions
                                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                                </button>
                                {/* Added pt-2 to create seamless hover area */}
                                <div className="absolute top-full left-0 pt-2 w-64 transition-all duration-300 transform origin-top opacity-0 scale-95 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                                    <div className="rounded-2xl shadow-2xl bg-black/90 backdrop-blur-xl border border-white/20 overflow-hidden">
                                        <div className="py-4">
                                            <div className="px-4 pb-2">
                                                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Solutions</span>
                                            </div>
                                            <Link href="/solutions/ai-automation" className="group/item flex items-center px-6 py-3 text-sm text-white hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 cursor-pointer">
                                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                </div>
                                                <div>
                                                    <div className="font-medium">AI Automation</div>
                                                    <div className="text-xs text-gray-400">Streamline your workflows</div>
                                                </div>
                                            </Link>
                                            <Link href="/solutions/voice-assistants" className="group/item flex items-center px-6 py-3 text-sm text-white hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 cursor-pointer">
                                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                </div>
                                                <div>
                                                    <div className="font-medium">Voice Assistants</div>
                                                    <div className="text-xs text-gray-400">Intelligent voice solutions</div>
                                                </div>
                                            </Link>
                                            <Link href="/solutions/chatbots" className="group/item flex items-center px-6 py-3 text-sm text-white hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 cursor-pointer">
                                                <div className="w-8 h-8 bg-gradient-to-r from-pink-500/20 to-pink-600/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                                                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                                                </div>
                                                <div>
                                                    <div className="font-medium">Chatbots</div>
                                                    <div className="text-xs text-gray-400">Conversational AI agents</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link href="/integrations" className="text-white hover:text-gray-300 px-3 py-2 text-lg font-medium transition-colors duration-200 cursor-pointer">
                                Integrations
                            </Link>
                            <Link href="/pricing" className="text-white hover:text-gray-300 px-3 py-2 text-lg font-medium transition-colors duration-200 cursor-pointer">
                                Pricing
                            </Link>

                            {/* Resources Dropdown */}
                            <div className="relative group">
                                <button
                                    className="text-white hover:text-gray-300 px-3 py-2 text-lg font-medium flex items-center transition-colors duration-200 cursor-pointer"
                                >
                                    Resources
                                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                                </button>
                                {/* Added pt-2 to create seamless hover area */}
                                <div className="absolute top-full left-0 pt-2 w-64 transition-all duration-300 transform origin-top opacity-0 scale-95 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                                    <div className="rounded-2xl shadow-2xl bg-black/90 backdrop-blur-xl border border-white/20 overflow-hidden">
                                        <div className="py-4">
                                            <div className="px-4 pb-2">
                                                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Resources</span>
                                            </div>
                                            <Link href="/docs" className="group/item flex items-center px-6 py-3 text-sm text-white hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 cursor-pointer">
                                                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                                </div>
                                                <div>
                                                    <div className="font-medium">Documentation</div>
                                                    <div className="text-xs text-gray-400">Developer guides & API</div>
                                                </div>
                                            </Link>
                                            <Link href="/blog" className="group/item flex items-center px-6 py-3 text-sm text-white hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 cursor-pointer">
                                                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                                                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                                </div>
                                                <div>
                                                    <div className="font-medium">Blog</div>
                                                    <div className="text-xs text-gray-400">Latest news & insights</div>
                                                </div>
                                            </Link>
                                            <Link href="/support" className="group/item flex items-center px-6 py-3 text-sm text-white hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 cursor-pointer">
                                                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                                                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                                </div>
                                                <div>
                                                    <div className="font-medium">Support</div>
                                                    <div className="text-xs text-gray-400">Get help & assistance</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side buttons - Right */}
                    <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
                        <Link
                            href="/free-trial"
                            className="bg-gray-800/50 hover:bg-gray-700/50 text-white px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 border border-gray-600/50 backdrop-blur-sm cursor-pointer hover:scale-105"
                        >
                            Free Trial
                        </Link>
                        <Link
                            href="/contact-sales"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl"
                        >
                            Contact Sales
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white hover:text-gray-300 p-2 rounded-md transition-colors duration-200 cursor-pointer"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden bg-black/30 backdrop-blur-md border-t border-white/20 transition-all duration-300 overflow-hidden ${
                isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <div className="block">
                        <button
                            onClick={() => toggleDropdown('solutions-mobile')}
                            className="text-white hover:bg-white/10 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between transition-colors duration-200 cursor-pointer"
                        >
                            Solutions
                            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                                activeDropdown === 'solutions-mobile' ? 'rotate-180' : ''
                            }`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${
                            activeDropdown === 'solutions-mobile' ? 'max-h-48' : 'max-h-0'
                        }`}>
                            <div className="pl-6 space-y-1 py-2">
                                <Link href="/solutions/ai-automation" className="text-gray-300 hover:text-white block px-3 py-2 text-sm transition-colors duration-200 cursor-pointer">
                                    AI Automation
                                </Link>
                                <Link href="/solutions/voice-assistants" className="text-gray-300 hover:text-white block px-3 py-2 text-sm transition-colors duration-200 cursor-pointer">
                                    Voice Assistants
                                </Link>
                                <Link href="/solutions/chatbots" className="text-gray-300 hover:text-white block px-3 py-2 text-sm transition-colors duration-200 cursor-pointer">
                                    Chatbots
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/integrations" className="text-white hover:bg-white/10 block px-3 py-2 text-base font-medium transition-colors duration-200 cursor-pointer">
                        Integrations
                    </Link>
                    <Link href="/pricing" className="text-white hover:bg-white/10 block px-3 py-2 text-base font-medium transition-colors duration-200 cursor-pointer">
                        Pricing
                    </Link>

                    <div className="block">
                        <button
                            onClick={() => toggleDropdown('resources-mobile')}
                            className="text-white hover:bg-white/10 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between transition-colors duration-200 cursor-pointer"
                        >
                            Resources
                            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                                activeDropdown === 'resources-mobile' ? 'rotate-180' : ''
                            }`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${
                            activeDropdown === 'resources-mobile' ? 'max-h-48' : 'max-h-0'
                        }`}>
                            <div className="pl-6 space-y-1 py-2">
                                <Link href="/docs" className="text-gray-300 hover:text-white block px-3 py-2 text-sm transition-colors duration-200 cursor-pointer">
                                    Documentation
                                </Link>
                                <Link href="/blog" className="text-gray-300 hover:text-white block px-3 py-2 text-sm transition-colors duration-200 cursor-pointer">
                                    Blog
                                </Link>
                                <Link href="/support" className="text-gray-300 hover:text-white block px-3 py-2 text-sm transition-colors duration-200 cursor-pointer">
                                    Support
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/20 pt-4 space-y-2">
                        <Link href="/free-trial" className="bg-gray-800/50 hover:bg-gray-700/50 text-white block px-3 py-2 text-base font-medium rounded-lg mx-3 text-center border border-gray-600/50 transition-all duration-200 cursor-pointer">
                            Free Trial
                        </Link>
                        <Link href="/contact-sales" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white block px-3 py-2 text-base font-medium rounded-lg mx-3 text-center shadow-lg transition-all duration-200 cursor-pointer">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;