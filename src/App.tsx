/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MapPin, Phone, Clock, Instagram, Facebook, CupSoda, Utensils } from 'lucide-react';

const MenuItem = ({ name, price, desc, isNew = false }: { name: string, price: string, desc?: string, isNew?: boolean }) => (
  <div className="flex flex-col mb-6">
    <div className="flex justify-between items-baseline mb-1">
      <h4 className="text-lg font-display font-bold text-brand-brown flex items-center gap-2">
        {name}
        {isNew && <span className="bg-brand-orange text-white text-[10px] uppercase px-2 py-0.5 rounded-full tracking-wider">Popular</span>}
      </h4>
      <div className="flex-grow border-b-2 border-dotted border-brand-brown/20 mx-4 relative top-[-6px]"></div>
      <span className="text-brand-orange font-bold text-lg">{price}</span>
    </div>
    {desc && <p className="text-brand-brown/70 text-sm">{desc}</p>}
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-light text-brand-brown font-sans selection:bg-brand-orange/30 selection:text-brand-brown">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white">
              <CupSoda size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-black leading-none tracking-tight text-brand-brown uppercase">
                BUBBLE
              </span>
              <span className="text-2xl font-display font-black leading-none tracking-tight text-brand-brown uppercase">
                WORLD
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-bold tracking-wide text-brand-brown uppercase">
            <a href="#menu" className="hover:text-brand-orange transition-colors">Menu</a>
            <a href="#customize" className="hover:text-brand-orange transition-colors">Customize</a>
            <a href="#visit" className="hover:text-brand-orange transition-colors">Visit Us</a>
          </div>
          
          <div className="hidden md:block">
            <button className="px-6 py-2.5 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-full text-sm tracking-wide uppercase transition-all duration-300 shadow-[0_4px_14px_rgba(240,86,34,0.3)] hover:shadow-[0_6px_20px_rgba(240,86,34,0.4)] hover:-translate-y-0.5">
              Order Online
            </button>
          </div>

          <button 
            className="md:hidden text-brand-brown z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-display font-bold text-brand-brown hover:text-brand-orange transition-colors">Menu</a>
            <a href="#customize" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-display font-bold text-brand-brown hover:text-brand-orange transition-colors">Customize</a>
            <a href="#visit" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-display font-bold text-brand-brown hover:text-brand-orange transition-colors">Visit Us</a>
            <button onClick={() => setMobileMenuOpen(false)} className="mt-8 px-8 py-4 bg-brand-orange text-white font-bold rounded-full text-lg tracking-wide uppercase shadow-lg">
              Order Online
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-100 rounded-bl-[100px] -z-10 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-brand-orange font-bold text-sm tracking-widest uppercase mb-6">
                Taste of Taiwan Since 1995
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-black text-brand-brown leading-[1.1] mb-6 uppercase">
                Sip Up & <br />
                <span className="text-brand-orange">Enjoy</span>
              </h1>
              <p className="text-lg text-brand-brown/80 mb-10 max-w-lg mx-auto lg:mx-0 font-medium">
                Your favorite spot for authentic Taiwanese comfort food, crispy snacks, and fully customizable bubble tea.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-full text-sm tracking-wide uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  View Menu
                </button>
                <button className="px-8 py-4 bg-white border-2 border-brand-brown hover:bg-brand-brown hover:text-white text-brand-brown font-bold rounded-full text-sm tracking-wide uppercase transition-all duration-300">
                  Find a Location
                </button>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-brand-orange rounded-full opacity-20 animate-[subtle-zoom_4s_ease-in-out_infinite_alternate]"></div>
              <img 
                src="https://images.unsplash.com/photo-1558857563-b37102e99e00?auto=format&fit=crop&w=800&q=80" 
                alt="Delicious Bubble Tea" 
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-full border-8 border-white shadow-2xl"
                referrerPolicy="no-referrer"
              />
              {/* Floating badges */}
              <div className="absolute top-10 -left-4 bg-white px-4 py-2 rounded-full shadow-lg font-bold text-brand-brown flex items-center gap-2 animate-[float_3s_ease-in-out_infinite]">
                <span className="text-xl">🧋</span> 100% Customizable
              </div>
              <div className="absolute bottom-20 -right-8 bg-white px-4 py-2 rounded-full shadow-lg font-bold text-brand-brown flex items-center gap-2 animate-[float_4s_ease-in-out_infinite_0.5s]">
                <span className="text-xl">🍗</span> Crispy Snacks
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customize Section */}
      <section id="customize" className="py-20 bg-brand-orange text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-12 uppercase">Customize Your Drink</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">🧊</div>
              <h3 className="font-bold text-xl mb-2">Ice Level</h3>
              <p className="text-white/80 text-sm">Regular, Less, Light, No Ice</p>
            </div>
            <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">🍯</div>
              <h3 className="font-bold text-xl mb-2">Sweetness</h3>
              <p className="text-white/80 text-sm">100%, 70%, 50%, 30%, 0%</p>
            </div>
            <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">⚫</div>
              <h3 className="font-bold text-xl mb-2">Toppings</h3>
              <p className="text-white/80 text-sm">Pearls, Agar Jelly, Pudding...</p>
            </div>
            <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">🥛</div>
              <h3 className="font-bold text-xl mb-2">Milk Options</h3>
              <p className="text-white/80 text-sm">Dairy, Oat, Almond</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-brown mb-4 uppercase">Our Menu</h2>
            <p className="text-brand-orange font-bold tracking-widest uppercase">Favorites & Signatures</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Drinks */}
            <div className="bg-brand-light p-8 md:p-10 rounded-[40px]">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white">
                  <CupSoda size={24} />
                </div>
                <h3 className="text-3xl font-display font-black uppercase text-brand-brown">Drinks</h3>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-brand-orange mb-6 uppercase tracking-wide">Milk Tea</h4>
                <MenuItem name="Honey Milk Tea" price="$5.25" />
                <MenuItem name="Taro Milk Tea" price="$5.50" isNew />
                <MenuItem name="Okinawa Pudding Milk Tea" price="$5.50" />
                <MenuItem name="Brown Sugar Pearl Latte" price="$6.95" isNew />
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-brand-orange mb-6 uppercase tracking-wide">Slush</h4>
                <MenuItem name="Mango Ice Cream Slush" price="$6.95" />
                <MenuItem name="Taro Oreo Slush" price="$6.95" />
                <MenuItem name="Strawberry Mango Slush" price="$6.95" />
              </div>
            </div>
            
            {/* Food */}
            <div className="bg-brand-light p-8 md:p-10 rounded-[40px]">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white">
                  <Utensils size={24} />
                </div>
                <h3 className="text-3xl font-display font-black uppercase text-brand-brown">Food</h3>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-brand-orange mb-6 uppercase tracking-wide">Deep Fried</h4>
                <MenuItem name="Salt & Pepper Chicken Nuggets" price="$12.50" isNew />
                <MenuItem name="Squid Tentacles" price="$12.50" />
                <MenuItem name="Assorted Deep Fried Platter" price="$24.95" desc="Chicken Nuggets, Squid Tentacles, Fish Cake, Fries" />
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-brand-orange mb-6 uppercase tracking-wide">Rice & Noodles</h4>
                <MenuItem name="Classic Beef Noodle Soup" price="$16.95" />
                <MenuItem name="Meat Sauce on Rice (Lu Rou Fan)" price="$11.95" />
                <MenuItem name="Pork Chop Fried Rice" price="$18.95" />
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-white border-2 border-brand-brown hover:bg-brand-brown hover:text-white text-brand-brown font-bold rounded-full text-sm tracking-wide uppercase transition-all duration-300">
              Download Full PDF Menu
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="visit" className="bg-brand-brown text-brand-light pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white">
                <CupSoda size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-black leading-none tracking-tight text-white uppercase">
                  BUBBLE
                </span>
                <span className="text-2xl font-display font-black leading-none tracking-tight text-white uppercase">
                  WORLD
                </span>
              </div>
            </div>
            <p className="text-brand-light/70 font-medium mb-8 max-w-sm">
              Taste of Taiwan Since 1995. Serving up authentic flavors, crispy snacks, and the best boba in town.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-brand-orange">Visit Us</h4>
            <ul className="space-y-4 text-brand-light/80">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 mt-0.5 text-brand-orange" />
                <span>123 Bubble Ave,<br/>Vancouver, BC V6B 1A1</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-brand-orange" />
                <span>(604) 555-0199</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="shrink-0 mt-0.5 text-brand-orange" />
                <div>
                  <p>Mon - Thu: 11:00 AM - 10:00 PM</p>
                  <p>Fri - Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-brand-orange">House Rules</h4>
            <ul className="space-y-3 text-brand-light/80 text-sm">
              <li>1. Please do not consume any outside food or drink in our restaurant.</li>
              <li>2. Minimum charge of $5.25 plus tax per person.</li>
              <li>3. Separate bills are not available for groups of 8 or more.</li>
              <li>4. Vaping and/or smoking are prohibited.</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-light/50 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Bubble World. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
