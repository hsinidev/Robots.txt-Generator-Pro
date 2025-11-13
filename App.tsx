import React from 'react';
import Layout from './components/Layout';
import RobotsGenerator from './components/RobotsGenerator';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12 md:mb-16 animate-fade-in-down" style={{ animation: 'fade-in-down 0.8s ease-out forwards' }}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 tracking-tight">
            Robots.txt Generator Pro
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Craft a clean, custom, and SEO-safe robots.txt file in seconds. Define crawler directives, add sitemaps, and download your configuration instantly.
          </p>
        </header>
        
        <main className="animate-fade-in-up" style={{ animation: 'fade-in-up 0.8s 0.2s ease-out forwards', opacity: 0 }}>
          <RobotsGenerator />
          <div className="my-16 md:my-24 border-t border-slate-700/50"></div>
          <SeoArticle />
        </main>
      </div>
      <style>{`
        @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Layout>
  );
};

export default App;