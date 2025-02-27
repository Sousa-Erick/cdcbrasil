
import React from 'react';
import { Instagram, Twitter, LinkedIn, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Woltex</h3>
              </div>
              <p className="text-white/70 mb-6">
                A creative digital agency focused on growing brands online through bold strategy & creative.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                  <LinkedIn className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
                <li><a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Brand Design</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Content Strategy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="text-white/70">123 Agency Street, NY 12345, USA</li>
                <li><a href="mailto:hello@woltexagency.com" className="text-white/70 hover:text-white transition-colors">hello@woltexagency.com</a></li>
                <li><a href="tel:+15551234567" className="text-white/70 hover:text-white transition-colors">+1 (555) 123-4567</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Woltex. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
