# Robots.txt Generator Pro

A modern, SEO-safe robots.txt file generator built with React and Tailwind CSS. Create custom directives for crawlers, add sitemaps, and download your file instantly with a clean, intuitive interface set against a stunning animated galaxy background.

## ✨ Key Features

-   **Intuitive Interface**: Clean, functional design that mimics a configuration file editor.
-   **Dynamic Directives**: Easily add, remove, and edit `Allow` and `Disallow` rules for any user-agent.
-   **Sitemap & Crawl-Delay**: Include your sitemap URL and an optional (legacy) crawl-delay.
-   **Live Preview**: Instantly see the generated `robots.txt` content as you type.
-   **One-Click Actions**: Copy the content to your clipboard or download the `robots.txt` file directly.
-   **Fully Responsive**: Works beautifully on all devices, from desktops to mobile phones.
-   **Immersive Theme**: Features a stunning, animated multi-colored galaxy background.
-   **In-Depth SEO Guide**: Includes a comprehensive 3500+ word article on `robots.txt` best practices and advanced strategies.
-   **SEO Optimized**: Built with SEO in mind, including full JSON-LD schema for the tool and article.

## 🛠️ Tech Stack

-   **Framework**: React
-   **Styling**: Tailwind CSS
-   **File Generation**: Client-side JavaScript (Blob API)
-   **Language**: TypeScript

## 🚀 How to Use

1.  **Set User-Agent**: Specify the crawler you want to give instructions to (e.g., `*`, `Googlebot`).
2.  **Add Directives**:
    -   Click the **"+ Add Directive"** button to create a new rule.
    -   Select `Allow` or `Disallow` from the dropdown.
    -   Enter the URL path you want to apply the rule to (e.g., `/admin/`).
3.  **Add Sitemap URL**: Enter the full URL to your `sitemap.xml`.
4.  **(Optional) Set Crawl Delay**: Enter a number if needed, but be aware that most major crawlers no longer respect this.
5.  **Generate & Download**:
    -   The output panel on the right shows a live preview of your `robots.txt` file.
    -   Click **"Copy"** to copy the content to your clipboard.
    -   Click **"Generate & Download robots.txt"** to save the file to your computer.

## 📂 Project Structure

This is a single-page application with a clear component-based architecture.

```
/
├── components/
│   ├── Layout.tsx           # Main layout with header, footer, modals, and background
│   ├── RobotsGenerator.tsx  # The core generator UI and logic
│   └── SeoArticle.tsx       # The collapsible SEO article component
├── services/
│   └── robotsBuilder.ts     # Pure TypeScript function to build the robots.txt string
├── App.tsx                  # Main application component
├── index.html               # The entry point HTML file
├── index.tsx                # React app entry point
├── types.ts                 # Shared TypeScript types
└── README.md                # This file
```

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Powered by <a href="https://github.com/hsinidev" target="_blank">HSINI MOHAMED</a>
</p>
