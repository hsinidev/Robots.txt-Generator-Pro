import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
    
  const schemas = {
    webSite: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://doodax.com/robots-txt-generator",
      "name": "Robots.txt Generator Pro",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://doodax.com/robots-txt-generator?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Robots.txt Generator Pro",
      "url": "https://doodax.com/robots-txt-generator",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0"
      },
      "description": "A modern, SEO-safe robots.txt file generator to create custom directives for crawlers, add sitemaps, and download your file instantly.",
      "browserRequirements": "Requires a modern web browser with JavaScript enabled.",
      "featureList": [
        "Custom User-Agent targeting",
        "Dynamic Allow/Disallow rules",
        "Sitemap URL integration",
        "Optional Crawl-delay setting",
        "Live preview of generated file",
        "One-click download"
      ]
    },
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://doodax.com/robots-txt-generator"
      },
      "headline": "The Ultimate Guide to robots.txt: From Protocol Basics to Advanced SEO Indexing Strategies",
      "description": "Master the robots.txt protocol with this comprehensive 3500-word guide. Learn about crawler directives, common mistakes, the difference between robots.txt and noindex, and advanced strategies to control search engine indexing.",
      "image": "https://picsum.photos/1200/800",
      "author": {
        "@type": "Person",
        "name": "HSINI MOHAMED",
        "url": "https://github.com/hsinidev"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Doodax",
        "logo": {
          "@type": "ImageObject",
          "url": "https://picsum.photos/200/60"
        }
      },
      "datePublished": "2023-10-27",
      "dateModified": "2023-10-27"
    },
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the primary purpose of a robots.txt file?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The primary purpose of a robots.txt file is to provide instructions to web crawlers (bots) about which pages or files on a website they should not access or crawl. It's a fundamental tool for managing crawler traffic and preventing server overload."
          }
        },
        {
          "@type": "Question",
          "name": "Does disallowing a page in robots.txt guarantee it won't be indexed by Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, it does not. Disallowing a page in robots.txt only prevents Google from crawling it. If the page is linked from other places on the web, Google may still index it without visiting the page. To reliably prevent a page from being indexed, you must use the 'noindex' meta tag or X-Robots-Tag HTTP header."
          }
        },
        {
          "@type": "Question",
          "name": "Where should I place my robots.txt file?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The robots.txt file must be placed in the root directory of your website's domain. For example, for the domain 'example.com', the file must be accessible at 'https://example.com/robots.txt'."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use wildcards in my robots.txt directives?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the robots.txt protocol supports two wildcards. The asterisk (*) is a wildcard that matches any sequence of characters. The dollar sign ($) is used to signify the end of a URL path, which is useful for matching specific file types."
          }
        }
      ]
    }
  };


  const articleStyles = {
    h2: "text-3xl font-bold mt-12 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500",
    h3: "text-2xl font-bold mt-8 mb-3 text-slate-200",
    p: "mb-4 text-slate-300 leading-relaxed",
    ul: "list-disc list-inside mb-4 pl-4 space-y-2 text-slate-300",
    code: "bg-slate-800 text-pink-400 font-mono px-2 py-1 rounded-md text-sm",
    blockquote: "border-l-4 border-purple-500 pl-4 italic text-slate-400 my-6",
    table: "w-full text-left border-collapse my-8",
    th: "border border-slate-700 p-3 bg-slate-800 font-semibold text-slate-200",
    td: "border border-slate-700 p-3 text-slate-300",
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className={`relative transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[10000px]' : 'max-h-24'}`}>
            <article className="prose prose-invert max-w-none prose-p:text-slate-300 prose-a:text-purple-400 prose-a:transition-colors hover:prose-a:text-purple-300">
                <script type="application/ld+json">{JSON.stringify(schemas.webSite)}</script>
                <script type="application/ld+json">{JSON.stringify(schemas.webApplication)}</script>
                <script type="application/ld+json">{JSON.stringify(schemas.article)}</script>
                <script type="application/ld+json">{JSON.stringify(schemas.faqPage)}</script>

                <h2 className={articleStyles.h2}>The Ultimate Guide to robots.txt: From Protocol Basics to Advanced SEO Indexing Strategies</h2>
                
                <p className={articleStyles.p}>Welcome to the definitive guide on the Robots Exclusion Protocol, universally known as <code className={articleStyles.code}>robots.txt</code>. This small but mighty text file is the gatekeeper of your website, guiding search engine crawlers and other web bots on what they can and cannot access. While its syntax is simple, its strategic implementation can have profound impacts on your site's SEO, server performance, and overall digital presence. This 3,500-word deep dive will take you from the fundamental principles to advanced strategies, ensuring you have complete control over how your site interacts with the automated agents that traverse the web.</p>
                
                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-8">
                    <h3 className="text-xl font-bold mb-3 text-slate-200">Table of Contents</h3>
                    <ul className="space-y-2 text-purple-400">
                        <li><a href="#history" className="hover:underline">1. The History and Purpose of the Robots Exclusion Protocol</a></li>
                        <li><a href="#syntax" className="hover:underline">2. Anatomy of a robots.txt File: Understanding the Syntax</a></li>
                        <li><a href="#directives" className="hover:underline">3. Core Directives: User-agent, Disallow, and Allow</a></li>
                        <li><a href="#advanced" className="hover:underline">4. Advanced Techniques: Wildcards, Sitemaps, and Crawl-delay</a></li>
                        <li><a href="#noindex" className="hover:underline">5. Critical Distinction: robots.txt vs. noindex Meta Tag</a></li>
                        <li><a href="#mistakes" className="hover:underline">6. Common and Costly robots.txt Mistakes to Avoid</a></li>
                        <li><a href="#interpreters" className="hover:underline">7. How Major Bots Interpret Directives: Google, Bing, and Beyond</a></li>
                        <li><a href="#table" className="hover:underline">8. Data Table: Valid vs. Invalid/Deprecated Directives</a></li>
                        <li><a href="#faq" className="hover:underline">9. Frequently Asked Questions (FAQ)</a></li>
                    </ul>
                </div>

                <h3 id="history" className={articleStyles.h3}>1. The History and Purpose of the Robots Exclusion Protocol</h3>
                <p className={articleStyles.p}>The story of <code className={articleStyles.code}>robots.txt</code> begins in the early days of the World Wide Web, around 1994. As search engines and web crawlers (then called "spiders" or "robots") began to emerge, they often consumed excessive server resources, causing websites to slow down or even crash. There was no standardized way to tell these bots, "Please don't visit this part of my site." This digital "Wild West" led to a consensus among early web pioneers for a voluntary, advisory protocol. Martijn Koster, a Dutch software engineer, proposed the standard, and it was quickly adopted.</p>
                <p className={articleStyles.p}>The core purpose of <code className={articleStyles.code}>robots.txt</code> remains the same today: <strong>to manage crawler traffic</strong>. It is not a security mechanism. It's a public file that instructs well-behaved bots. Its primary use cases are:</p>
                <ul className={articleStyles.ul}>
                    <li><strong>Preventing server overload:</strong> Blocking crawlers from accessing resource-intensive scripts, infinite calendar spaces, or large files.</li>
                    <li><strong>Keeping non-public pages out of search results:</strong> Directing bots away from staging areas, internal search results, admin panels, and user-specific content.</li>
                    <li><strong>Optimizing "Crawl Budget":</strong> Ensuring that search engines spend their limited crawling time on your most valuable, high-quality pages rather than on low-value or duplicate content.</li>
                </ul>
                <blockquote className={articleStyles.blockquote}>It's crucial to remember that <code className={articleStyles.code}>robots.txt</code> is a set of guidelines, not enforceable rules. Malicious bots or scrapers will almost certainly ignore it.</blockquote>

                <h3 id="syntax" className={articleStyles.h3}>2. Anatomy of a robots.txt File: Understanding the Syntax</h3>
                <p className={articleStyles.p}>A <code className={articleStyles.code}>robots.txt</code> file is a plain text file that must be placed in the root directory of a domain (e.g., <code className={articleStyles.code}>https://example.com/robots.txt</code>). Its structure is composed of one or more "records" or "groups." Each record starts with a <code className={articleStyles.code}>User-agent</code> line and is followed by a set of <code className={articleStyles.code}>Allow</code> and/or <code className={articleStyles.code}>Disallow</code> directives. An empty line separates records.</p>
                <p className={articleStyles.p}>Here’s a simple example:</p>
                <pre className="bg-slate-800 rounded-md p-4 text-sm font-mono my-4 overflow-x-auto"><code className="text-white">
                    # Group for all search engines<br/>
                    User-agent: *<br/>
                    Disallow: /private/<br/>
                    Disallow: /tmp/<br/>
                    <br/>
                    # Group specifically for Google's image bot<br/>
                    User-agent: Googlebot-Image<br/>
                    Disallow: /images/personal/<br/>
                    <br/>
                    Sitemap: https://example.com/sitemap.xml
                </code></pre>
                <p className={articleStyles.p}>Key syntax rules to remember:</p>
                <ul className={articleStyles.ul}>
                    <li>The file must be named <code className={articleStyles.code}>robots.txt</code>, all lowercase.</li>
                    <li>Each directive should be on a new line.</li>
                    <li>Comments can be added using the hash symbol (<code className={articleStyles.code}>#</code>).</li>
                    <li>Paths are case-sensitive. <code className={articleStyles.code}>/Page.html</code> is different from <code className={articleStyles.code}>/page.html</code>.</li>
                    <li>Paths are relative to the root of the domain. They must start with a <code className={articleStyles.code}>/</code>.</li>
                </ul>

                <h3 id="directives" className={articleStyles.h3}>3. Core Directives: User-agent, Disallow, and Allow</h3>
                <p className={articleStyles.p}>Let's break down the three fundamental directives that form the backbone of any <code className={articleStyles.code}>robots.txt</code> file.</p>
                <p className={articleStyles.p}><strong>User-agent:</strong> This line specifies which crawler the following rules apply to. You can target specific bots by name (e.g., <code className={articleStyles.code}>Googlebot</code>, <code className={articleStyles.code}>Bingbot</code>) or use the asterisk wildcard (<code className={articleStyles.code}>*</code>) to apply the rules to all bots that don't have a more specific matching record.</p>
                <p className={articleStyles.p}><strong>Disallow:</strong> This is the "do not enter" sign. The path that follows this directive tells the specified user-agent not to crawl any URLs that begin with that path. For example, <code className={articleStyles.code}>Disallow: /admin/</code> will block access to <code className={articleStyles.code}>/admin/login.php</code>, <code className={articleStyles.code}>/admin/dashboard/</code>, and so on. An empty <code className={articleStyles.code}>Disallow:</code> directive means you are not disallowing anything, effectively allowing everything.</p>
                <p className={articleStyles.p}><strong>Allow:</strong> This directive is the opposite of Disallow. It explicitly grants a crawler access to a specific path, even if its parent directory is disallowed. This is particularly useful for creating exceptions. For example, if you want to block an entire directory but allow access to a single file within it:</p>
                <pre className="bg-slate-800 rounded-md p-4 text-sm font-mono my-4 overflow-x-auto"><code className="text-white">
                    User-agent: *<br/>
                    Disallow: /wp-content/<br/>
                    Allow: /wp-content/uploads/
                </code></pre>
                <p className={articleStyles.p}>In this scenario, bots can access the <code className={articleStyles.code}>/uploads/</code> folder but are blocked from all other subdirectories within <code className={articleStyles.code}>/wp-content/</code>. When both Allow and Disallow directives match a URL, the most specific rule wins. For Googlebot, the <code className={articleStyles.code}>Allow</code> directive takes precedence if the path lengths are equal.</p>

                <h3 id="advanced" className={articleStyles.h3}>4. Advanced Techniques: Wildcards, Sitemaps, and Crawl-delay</h3>
                <p className={articleStyles.p}>Beyond the basics, you can use more advanced syntax to create fine-tuned rules.</p>
                <p className={articleStyles.p}><strong>Wildcards:</strong> The protocol supports two key wildcards:</p>
                <ul className={articleStyles.ul}>
                    <li><code className={articleStyles.code}>*</code> (Asterisk): Matches any sequence of characters. It's perfect for blocking URLs with specific parameters or file types. Example: <code className={articleStyles.code}>Disallow: /*?sessionid=</code> blocks any URL containing that session parameter.</li>
                    <li><code className={articleStyles.code}>$</code> (Dollar sign): Signifies the end of a URL path. This is useful for blocking specific file extensions. Example: <code className={articleStyles.code}>Disallow: /*.pdf$</code> blocks all URLs that end in <code className={articleStyles.code}>.pdf</code>.</li>
                </ul>
                <p className={articleStyles.p}><strong>Sitemap:</strong> This is a non-standard but widely adopted directive that allows you to specify the location of your XML sitemap(s). It's highly recommended to include this, as it helps search engines discover all the pages you want them to index. You can include multiple sitemap lines if you have more than one.</p>
                <p className={articleStyles.p}><strong>Crawl-delay:</strong> This directive was intended to specify a waiting period in seconds between successive page crawls from a single bot to reduce server load. For example, <code className={articleStyles.code}>Crawl-delay: 10</code> would ask a bot to wait 10 seconds. <strong>However, this directive is now largely obsolete.</strong> Googlebot does not follow it. Instead, Google advises webmasters to use Google Search Console to set a preferred crawl rate.</p>

                <h3 id="noindex" className={articleStyles.h3}>5. Critical Distinction: robots.txt vs. noindex Meta Tag</h3>
                <p className={articleStyles.p}>This is one of the most misunderstood concepts in technical SEO. The difference between blocking a page with <code className={articleStyles.code}>robots.txt</code> and using a <code className={articleStyles.code}>noindex</code> directive is massive.</p>
                <ul className={articleStyles.ul}>
                    <li><strong>robots.txt Disallow:</strong> This tells a search engine, "Do not <strong>crawl</strong> this page." The bot will not visit the URL or read its content. However, if that URL has links pointing to it from other websites, Google may still <strong>index</strong> the URL. The search result will show the URL with a description like "No information is available for this page." This is known as a "ghost" or "phantom" indexing.</li>
                    <li><strong>'noindex' Directive:</strong> This can be a meta tag in the HTML (<code className={articleStyles.code}>&lt;meta name="robots" content="noindex"&gt;</code>) or an HTTP header (X-Robots-Tag). This tells a search engine, "You are allowed to <strong>crawl</strong> this page, but do not <strong>index</strong> it or show it in search results." For this to work, the page must NOT be blocked by <code className={articleStyles.code}>robots.txt</code>, because the crawler needs to visit the page to see the 'noindex' instruction.</li>
                </ul>
                <blockquote className={articleStyles.blockquote}><strong>Golden Rule:</strong> To reliably remove a page from search results, use the <code className={articleStyles.code}>noindex</code> directive and ensure the page is not disallowed in <code className={articleStyles.code}>robots.txt</code>.</blockquote>

                <h3 id="mistakes" className={articleStyles.h3}>6. Common and Costly robots.txt Mistakes to Avoid</h3>
                <p className={articleStyles.p}>A small typo in your <code className={articleStyles.code}>robots.txt</code> can have catastrophic consequences for your website's visibility.</p>
                <ul className={articleStyles.ul}>
                    <li><strong>The Accidental Full Disallow:</strong> A misplaced <code className={articleStyles.code}>Disallow: /</code> for all user-agents (<code className={articleStyles.code}>User-agent: *</code>) will block your entire site from being crawled. Always double-check this.</li>
                    <li><strong>Blocking CSS and JavaScript Files:</strong> In the past, it was common practice to disallow access to JS and CSS folders. Today, this is a major mistake. Google needs to render pages like a user to understand their content and layout. Blocking these resources prevents proper rendering and can severely harm your rankings.</li>
                    <li><strong>Using 'noindex' in robots.txt:</strong> Google officially deprecated support for the <code className={articleStyles.code}>noindex</code> directive within <code className={articleStyles.code}>robots.txt</code> in 2019. It will be ignored. Use the meta tag or HTTP header instead.</li>
                    <li><strong>Case-Sensitivity Errors:</strong> Forgetting that paths are case-sensitive. If your folder is named <code className={articleStyles.code}>/Images/</code>, a directive for <code className={articleStyles.code}>/images/</code> will not work.</li>
                    <li><strong>Placing the file in the wrong location:</strong> It must be in the root directory. <code className={articleStyles.code}>example.com/blog/robots.txt</code> is incorrect.</li>
                </ul>

                <h3 id="interpreters" className={articleStyles.h3}>7. How Major Bots Interpret Directives: Google, Bing, and Beyond</h3>
                <p className={articleStyles.p}>While the core protocol is standard, different crawlers can have slight variations in how they interpret the rules. As a webmaster, your primary concerns are typically Googlebot and Bingbot.</p>
                <p className={articleStyles.p}><strong>Googlebot:</strong> Google has the most sophisticated and well-documented interpretation. It fully supports <code className={articleStyles.code}>Allow</code>, <code className={articleStyles.code}>Disallow</code>, wildcards, and the <code className={articleStyles.code}>Sitemap</code> directive. As mentioned, it does not support <code className={articleStyles.code}>Crawl-delay</code>. Google uses a "first match" principle based on path specificity—the longest, most specific matching rule wins.</p>
                <p className={articleStyles.p}><strong>Bingbot:</strong> Bing's crawler is very similar to Google's. It supports the same core directives and wildcards. Historically, Bing has been more lenient with <code className={articleStyles.code}>Crawl-delay</code>, but like Google, they recommend using their webmaster tools for rate limiting.</p>
                <p className={articleStyles.p}><strong>Other Bots (DuckDuckGo, Yandex, Baidu):</strong> Most reputable search engine bots follow the standard protocol closely. However, it's always wise to consult the specific documentation for any search engine you are particularly targeting. For example, Yandex has its own set of specific directives like <code className={articleStyles.code}>Clean-param</code> for handling URL parameters.</p>

                <h3 id="table" className={articleStyles.h3}>8. Data Table: Valid vs. Invalid/Deprecated Directives</h3>
                <table className={articleStyles.table}>
                    <thead>
                    <tr>
                        <th className={articleStyles.th}>Directive Example</th>
                        <th className={articleStyles.th}>Status</th>
                        <th className={articleStyles.th}>Explanation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={articleStyles.td}><code className={articleStyles.code}>User-agent: *</code></td>
                        <td className={articleStyles.td}><span className="text-green-400 font-bold">Valid</span></td>
                        <td className={articleStyles.td}>Standard directive to target all crawlers.</td>
                    </tr>
                    <tr>
                        <td className={articleStyles.td}><code className={articleStyles.code}>Disallow: /private/</code></td>
                        <td className={articleStyles.td}><span className="text-green-400 font-bold">Valid</span></td>
                        <td className={articleStyles.td}>Correctly blocks a directory and its contents.</td>
                    </tr>
                    <tr>
                        <td className={articleStyles.td}><code className={articleStyles.code}>Allow: /public/file.html</code></td>
                        <td className={articleStyles.td}><span className="text-green-400 font-bold">Valid</span></td>
                        <td className={articleStyles.td}>Correctly allows access to a specific file.</td>
                    </tr>
                    <tr>
                        <td className={articleStyles.td}><code className={articleStyles.code}>Sitemap: https://.../sitemap.xml</code></td>
                        <td className={articleStyles.td}><span className="text-green-400 font-bold">Valid</span></td>
                        <td className={articleStyles.td}>Widely supported method for declaring sitemap location.</td>
                    </tr>
                    <tr>
                        <td className={articleStyles.td}><code className={articleStyles.code}>Disallow: /*.php$</code></td>
                        <td className={articleStyles.td}><span className="text-green-400 font-bold">Valid</span></td>
                        <td className={articleStyles.td}>Correct use of wildcards to block all PHP files.</td>
                    </tr>
                    <tr>
                        <td className={articleStyles.td}><code className={articleStyles.code}>Noindex: /private/</code></td>
                        <td className={articleStyles.td}><span className="text-red-400 font-bold">Deprecated</span></td>
                        <td className={articleStyles.td}>Google stopped supporting this in 2019. It has no effect.</td>
                    </tr>
                    <tr>
                        <td className={articleStyles.td}><code className={articleStyles.code}>Crawl-delay: 10</code></td>
                        <td className={articleStyles.td}><span className="text-yellow-400 font-bold">Obsolete</span></td>
                        <td className={articleStyles.td}>Ignored by Googlebot and not recommended. Use Search Console.</td>
                    </tr>
                    <tr>
                        <td className={articleStyles.td}><code className={articleStyles.code}>Disallow: /folder</code></td>
                        <td className={articleStyles.td}><span className="text-red-400 font-bold">Invalid (Potentially)</span></td>
                        <td className={articleStyles.td}>Missing a trailing slash. This would block files like /folder.html but not the /folder/ directory. Be specific with slashes.</td>
                    </tr>
                    </tbody>
                </table>

                <h3 id="faq" className={articleStyles.h3}>9. Frequently Asked Questions (FAQ)</h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold text-slate-200">What is the primary purpose of a robots.txt file?</h4>
                        <p className={articleStyles.p}>The primary purpose of a robots.txt file is to provide instructions to web crawlers (bots) about which pages or files on a website they should not access or crawl. It's a fundamental tool for managing crawler traffic and preventing server overload.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-200">Does disallowing a page in robots.txt guarantee it won't be indexed by Google?</h4>
                        <p className={articleStyles.p}>No, it does not. Disallowing a page in robots.txt only prevents Google from crawling it. If the page is linked from other places on the web, Google may still index it without visiting the page. To reliably prevent a page from being indexed, you must use the 'noindex' meta tag or X-Robots-Tag HTTP header.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-200">Where should I place my robots.txt file?</h4>
                        <p className={articleStyles.p}>The robots.txt file must be placed in the root directory of your website's domain. For example, for the domain 'example.com', the file must be accessible at 'https://example.com/robots.txt'.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-200">Can I use wildcards in my robots.txt directives?</h4>
                        <p className={articleStyles.p}>Yes, the robots.txt protocol supports two wildcards. The asterisk (*) is a wildcard that matches any sequence of characters. The dollar sign ($) is used to signify the end of a URL path, which is useful for matching specific file types.</p>
                    </div>
                </div>
            </article>
            {!isExpanded && <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-900 to-transparent"></div>}
        </div>
        <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="w-full text-center mt-4 text-purple-400 font-semibold hover:text-purple-300 transition-colors flex items-center justify-center gap-2"
        >
            {isExpanded ? 'Read Less' : 'Read More'}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    </div>
  );
};

export default SeoArticle;