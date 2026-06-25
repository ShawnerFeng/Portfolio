import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f19]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-8xl mx-auto px-24 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <Link href="/" className="font-bold text-xl hover:text-cyan-400 transition">
          Wang Xiaofeng
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 text-sm text-gray-300">

          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link href="/projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>

          <Link href="/designer" className="hover:text-cyan-400 transition">
            Design
          </Link>

          <Link href="/art" className="hover:text-cyan-400 transition">
            Art
          </Link>

          <Link href="/gameExperience" className="hover:text-cyan-400 transition">
            Games
          </Link>

          <Link href="/resume" className="hover:text-cyan-400 transition">
            About Me
          </Link>

        </div>
      </div>
    </nav>
  );
}