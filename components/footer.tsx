import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white text-primary py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm">
            © {new Date().getFullYear()} Jiayi Li. All rights reserved.
          </div>
          <div className="text-sm">
            All made by Jiayi with ❤
          </div>
          <div className="flex gap-8 text-sm">
            <Link 
              href="mailto:jiayi.li0004@gmail.com"
              className="hover:bg-accent transition-colors"
            >
              Contact
            </Link>
            <a 
              href="https://www.linkedin.com/in/jiayi-li0414/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:bg-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 