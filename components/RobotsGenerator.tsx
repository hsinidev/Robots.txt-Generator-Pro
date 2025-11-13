import React, { useState, useEffect, useCallback } from 'react';
import type { Directive } from '../types';
import { buildRobotsTxt } from '../services/robotsBuilder';

const RobotsGenerator: React.FC = () => {
  const [userAgent, setUserAgent] = useState<string>('*');
  const [directives, setDirectives] = useState<Directive[]>([
    { id: 1, type: 'Disallow', path: '/wp-admin/' },
    { id: 2, type: 'Allow', path: '/wp-admin/admin-ajax.php' },
  ]);
  const [sitemap, setSitemap] = useState<string>('https://doodax.com/sitemap.xml');
  const [crawlDelay, setCrawlDelay] = useState<number | undefined>(undefined);
  const [robotsTxtContent, setRobotsTxtContent] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const content = buildRobotsTxt({
      userAgent,
      directives,
      sitemap,
      crawlDelay
    });
    setRobotsTxtContent(content);
  }, [userAgent, directives, sitemap, crawlDelay]);

  const addDirective = () => {
    setDirectives(prev => [...prev, { id: Date.now(), type: 'Disallow', path: '' }]);
  };

  const removeDirective = (id: number) => {
    setDirectives(prev => prev.filter(d => d.id !== id));
  };

  const updateDirective = (id: number, field: keyof Omit<Directive, 'id'>, value: string) => {
    setDirectives(prev => prev.map(d => d.id === id ? { ...d, [field]: value } : d));
  };

  const handleDownload = useCallback(() => {
    const blob = new Blob([robotsTxtContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [robotsTxtContent]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(robotsTxtContent).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    });
  }, [robotsTxtContent]);

  const inputClasses = "w-full bg-slate-800/50 border border-slate-700 rounded-lg p-2.5 text-slate-200 font-mono focus:ring-2 focus:ring-pink-500/70 focus:border-pink-500 transition-all outline-none shadow-sm";
  const labelClasses = "block text-sm font-semibold text-slate-300 mb-2";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
      {/* Input Form */}
      <div className="bg-slate-900/50 backdrop-blur-lg border border-slate-800/70 p-6 md:p-8 rounded-xl shadow-2xl">
        <div className="space-y-6">
          <div>
            <label htmlFor="userAgent" className={labelClasses}>User-Agent</label>
            <input id="userAgent" type="text" value={userAgent} onChange={e => setUserAgent(e.target.value)} className={inputClasses} placeholder="e.g., * or Googlebot" />
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-slate-200 mb-3">Directives</h3>
            <div className="space-y-3">
              {directives.map((d, index) => (
                <div key={d.id} className="flex items-center gap-2 animate-fade-in-up" style={{animationDelay: `${index * 50}ms`}}>
                  <select value={d.type} onChange={e => updateDirective(d.id, 'type', e.target.value)} className={`${inputClasses} w-1/3`}>
                    <option>Allow</option>
                    <option>Disallow</option>
                  </select>
                  <input type="text" value={d.path} onChange={e => updateDirective(d.id, 'path', e.target.value)} className={`${inputClasses} w-2/3`} placeholder="/path/to/resource/" />
                  <button onClick={() => removeDirective(d.id)} className="p-2 text-slate-500 hover:text-red-500 transition-colors rounded-full bg-slate-800/50 hover:bg-slate-700/50 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              ))}
            </div>
            <button onClick={addDirective} className="mt-4 w-full text-purple-400 border border-purple-400/50 rounded-lg py-2.5 text-sm font-semibold hover:bg-purple-500/10 transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              Add Directive
            </button>
          </div>

          <div>
            <label htmlFor="sitemap" className={labelClasses}>Sitemap URL</label>
            <input id="sitemap" type="url" value={sitemap} onChange={e => setSitemap(e.target.value)} className={inputClasses} placeholder="https://example.com/sitemap.xml" />
          </div>

          <div>
            <label htmlFor="crawlDelay" className={labelClasses}>Crawl Delay (Optional)</label>
            <input id="crawlDelay" type="number" value={crawlDelay || ''} onChange={e => setCrawlDelay(e.target.value ? parseInt(e.target.value, 10) : undefined)} className={inputClasses} placeholder="e.g., 5" />
            <p className="text-xs text-slate-500 mt-2">Note: Most major crawlers like Googlebot no longer obey this directive.</p>
          </div>
        </div>
      </div>

      {/* Output Panel */}
      <div className="bg-slate-900/50 backdrop-blur-lg border border-slate-800/70 p-6 md:p-8 rounded-xl shadow-2xl flex flex-col">
        <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold text-slate-200">Generated robots.txt</h3>
            <button onClick={handleCopy} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-700/50">
                {copied ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Copied!
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        Copy
                    </>
                )}
            </button>
        </div>
        <textarea
          readOnly
          value={robotsTxtContent}
          className="flex-grow w-full bg-slate-900/80 border border-slate-700/50 rounded-lg p-4 text-slate-300 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-pink-500/50"
          rows={15}
        />
        <button onClick={handleDownload} className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-purple-500/20">
          Generate & Download robots.txt
        </button>
      </div>
    </div>
  );
};

export default RobotsGenerator;