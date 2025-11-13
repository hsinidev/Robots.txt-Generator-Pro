import React, { useState, Fragment } from 'react';
import type { ModalType } from '../types';

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900/70 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col m-4 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        style={{ animation: 'fade-in-scale 0.3s forwards' }}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-slate-700">
            <svg xmlns="http://www.w.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <div className="p-6 overflow-y-auto text-slate-300 prose prose-invert prose-p:text-slate-300 prose-a:text-purple-400">
          {children}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-scale {
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  const navLinks: { label: string; modal: ModalType }[] = [
    { label: 'About', modal: 'about' },
    { label: 'Contact', modal: 'contact' },
    { label: 'Guide', modal: 'guide' },
    { label: 'Privacy Policy', modal: 'privacy' },
    { label: 'Terms of Service', modal: 'terms' },
    { label: 'DMCA', modal: 'dmca' },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="galaxy-bg">
        <div className="stars"></div>
        <div className="nebula"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      
      <div className="relative z-10">
        <header className="p-4">
            <nav className="container mx-auto flex justify-center items-center flex-wrap gap-x-6 gap-y-2">
                {navLinks.map(link => (
                    <button key={link.label} onClick={() => openModal(link.modal)} className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium relative group">
                        {link.label}
                        <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                ))}
            </nav>
        </header>

        {children}

        <footer className="text-center py-8 px-4 border-t border-slate-800/50 mt-16 md:mt-24">
            <div className="text-slate-400 text-sm">
                <p className="mb-3">
                    <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-purple-400 transition-colors" style={{ color: '#FFD700' }}>Powered by HSINI MOHAMED</a>
                </p>
                <div className="flex justify-center items-center gap-4">
                    <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">doodax.com</a>
                    <span className="text-slate-600">|</span>
                    <a href="mailto:hsini.web@gmail.com" className="hover:text-purple-400 transition-colors">hsini.web@gmail.com</a>
                    <span className="text-slate-600">|</span>
                    <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
      </div>

      <Modal isOpen={activeModal === 'about'} onClose={closeModal} title="About Us">
        <p>This Robots.txt Generator is a tool designed to help webmasters and SEO professionals easily create and manage their robots.txt files. Our goal is to provide a simple, intuitive, and powerful tool that adheres to the latest standards and best practices.</p>
      </Modal>
      <Modal isOpen={activeModal === 'contact'} onClose={closeModal} title="Contact Us">
        <p>For any inquiries, please reach out to us at <a href="mailto:hsini.web@gmail.com">hsini.web@gmail.com</a>.</p>
      </Modal>
      <Modal isOpen={activeModal === 'guide'} onClose={closeModal} title="How-to Guide">
        <p>1. <strong>User-Agent:</strong> Specify the crawler you want to give instructions to. Use '*' for all crawlers.</p>
        <p>2. <strong>Directives:</strong> Add rules to 'Allow' or 'Disallow' crawlers from specific paths on your website.</p>
        <p>3. <strong>Sitemap:</strong> Provide the full URL to your sitemap.xml file.</p>
        <p>4. <strong>Generate & Download:</strong> Click the button to get your final robots.txt file.</p>
      </Modal>
      <Modal isOpen={activeModal === 'privacy'} onClose={closeModal} title="Privacy Policy">
        <p>We do not store any data you enter into this tool. All processing is done client-side in your browser.</p>
      </Modal>
      <Modal isOpen={activeModal === 'terms'} onClose={closeModal} title="Terms of Service">
        <p>This tool is provided "as is" without any warranty. Use it at your own risk. We are not responsible for any issues that may arise from using the generated file.</p>
      </Modal>
      <Modal isOpen={activeModal === 'dmca'} onClose={closeModal} title="DMCA">
        <p>For any DMCA-related inquiries, please contact our designated agent at <a href="mailto:hsini.web@gmail.com">hsini.web@gmail.com</a>.</p>
      </Modal>
    </div>
  );
};

export default Layout;