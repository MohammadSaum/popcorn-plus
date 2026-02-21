import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Importing modern SVG icons
import { Check, Plus, Minus, Tv, Laptop, Smartphone, Gamepad2, ChevronRight } from 'lucide-react';

// Keep your logo.
// IMPORANT: You need to replace these two image files with high-quality alternatives.
import logo from "../assets/images/logo.png";
// SUGGESTION FOR heroBg: A high-res, cinematic wide shot from a major Disney property (e.g., Star Wars landscape, Marvel scene).
import heroBg from "../assets/images/hero-bg.jpg"; 
// SUGGESTION FOR landingImage: A clean mockup showing the Disney+ UI on a TV, laptop, and phone.
import landingImage from "../assets/images/devices.png"; 

const LandingPage = () => {
    const [activeId, setActiveId] = useState(null);

    const FAQs = [
        {
            id: 1,
            question: "What is Disney+?",
            answer: "Disney+ is the streaming home of your favorite stories. With entertainment from Disney, Pixar, Marvel, Star Wars, and National Geographic, there's always something to explore."
        },
        {
            id: 2,
            question: "What can I watch on Disney+?",
            answer: "You can watch Disney+ over various devices like computers, TVs, smartphones, and gaming consoles."
        },
        {
            id: 3,
            question: "How much does Disney+ cost?",
            answer: "Plans start at a low monthly price. There are no hidden fees or long-term commitments."
        },
        {
            id: 4,
            question: "What devices are supported?",
            answer: "TVs, Laptops, Computers, Phones, Gaming consoles, and many more."
        },
        {
            id: 5,
            question: "Are there any commitments when signing up?",
            answer: "For now, no. You can cancel anytime."
        }
    ];

    const expand = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        // Using the official Disney+ deep background color
        <div className="bg-[#040714] font-sans text-white selection:bg-blue-600 selection:text-white">

            {/* Hero Section */}
            <section className='relative min-h-[85vh] flex items-center justify-center overflow-hidden'>
                {/* Background Image with slow, cinematic zoom effect */}
                <div 
                    className='absolute inset-0 bg-cover bg-center scale-105 animate-[pulse_10s_ease-in-out_infinite]' 
                    style={{backgroundImage: `url(${heroBg})`}}
                />

                {/* Complex linear overlays for a premium, cinematic fade */}
                <div className="absolute inset-0 bg-linear-to-r from-[#040714] via-[#040714]/60 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-[#040714] via-transparent to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
                    <img src={logo} alt="Disney+" className="mx-auto mb-8 h-24 md:h-32 object-contain drop-shadow-2xl" />

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6 drop-shadow-lg">
                        Endless stories. <br/>
                        <span className="bg-linear-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent">
                            One magical place.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-12 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow">
                        Discover the world's greatest stories, all in one place. From new releases to timeless classics.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            to="/signup"
                            // Premium button with linear and glow
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-linear-to-br from-[#0063e5] to-[#009afa] p-0.5 font-bold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 focus:outline-none"
                        >
                            <span className="relative flex items-center gap-2 rounded-md bg-opacity-0 px-12 py-4 text-xl transition-all duration-300 group-hover:bg-opacity-0">
                                Get Started
                                <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                        <Link
                            to="/login"
                            className="text-gray-300 hover:text-white text-lg font-semibold tracking-wide px-8 py-4 transition-colors duration-300 border-2 border-transparent hover:border-gray-500 rounded-lg"
                        >
                            LOG IN
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section - Replaced "the girl one" image */}
            <section className='py-32 px-6'>
                <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center'>
                    {/* New image container with a subtle glowing backlight */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-linear-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <img 
                            src={landingImage} 
                            alt="Disney+ on multiple devices" 
                            className='relative rounded-xl drop-shadow-2xl w-full object-cover transform transition-transform duration-500 hover:scale-[1.02]'
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className='text-4xl md:text-5xl font-bold mb-10 tracking-tight'>Watch the way you want</h2>

                        <ul className="space-y-6">
                            {[
                                "Host virtual movie nights with GroupWatch",
                                "Download and watch offline on the go",
                                "Robust parental controls for family safety",
                                "Stunning 4K UHD & Dolby Atmos sound",
                                "Stream on up to 4 devices at once"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-5 text-xl text-gray-300">
                                    <div className="shrink-0 p-2 rounded-full bg-blue-600/20 text-blue-400">
                                        <Check size={24} strokeWidth={3} />
                                    </div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Devices Section */}
            <section className="py-32 bg-linear-to-b from-[#040714] via-[#0c112b] to-[#040714] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight">
                        Available on your favorite devices
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
                        {[
                            { icon: <Tv size={80} strokeWidth={1} />, title: "TV" },
                            { icon: <Laptop size={80} strokeWidth={1} />, title: "Computer" },
                            { icon: <Smartphone size={80} strokeWidth={1} />, title: "Mobile & Tablet" },
                            { icon: <Gamepad2 size={80} strokeWidth={1} />, title: "Consoles" }
                        ].map((device, i) => (
                            <div key={i} className="flex flex-col items-center group cursor-default">
                                <div className="text-gray-500 group-hover:text-blue-400 transition-all duration-500 transform group-hover:-translate-y-4 group-hover:scale-110 drop-shadow-lg">
                                    {device.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-400 group-hover:text-white transition-colors mt-6">
                                    {device.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           {/* FAQs Section - Redesigned to be fluid and minimal */}
            <section className='py-32 px-6 max-w-5xl mx-auto'>
                <h2 className='text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight'>
                    Frequently Asked Questions
                </h2>
                
                <div className='divide-y divide-white/10 border-t border-b border-white/10'>
                    {FAQs.map((item) => (
                        <div key={item.id} className='group'>
                            <button 
                                onClick={() => expand(item.id)}
                                className='w-full flex justify-between items-center py-8 text-left focus:outline-none'
                            >
                                <span className={`text-lg font-medium transition-colors duration-300 ${activeId === item.id ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                                    {item.question}
                                </span>
                                <span className={`transform transition-transform duration-500 ease-in-out ${activeId === item.id ? 'rotate-45 text-white' : 'rotate-0 text-gray-500 group-hover:text-white'}`}>
                                    {/* Using a single Plus icon that rotates 45deg to become an X looks smoother than switching icons */}
                                    <Plus size={32} strokeWidth={1.5} />
                                </span>
                            </button>

                            {/* Answer with smooth fade-in */}
                            <div 
                                className={`grid transition-all duration-500 ease-in-out ${
                                    activeId === item.id ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'
                                }`}
                            >
                                <div className='overflow-hidden text-base text-gray-400 leading-relaxed max-w-3xl pr-12'>
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-[#040714] border-t border-white/10 py-16 px-6 text-center text-gray-500">
                <img src={logo} alt="Disney+" className="mx-auto mb-8 h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />
                <p className="mb-6 text-sm">© 2026 Disney+ Clone. Built by Mohammad Saum.</p>
                <div className="flex justify-center gap-8 text-sm font-medium">
                    <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Terms of Use</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Help Center</a>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;