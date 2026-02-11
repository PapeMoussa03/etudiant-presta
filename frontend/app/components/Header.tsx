"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">EP</span>
            </div>
            <span className="text-2xl font-bold text-[#003366] font-poppins">
              ÉtudiantPresta
            </span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link 
              href="/login" 
              className="text-gray-600 hover:text-[#003366] px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#e6f0ff] font-medium"
            >
              Connexion
            </Link>
            <Link
              href="/register"
              className="bg-[#003366] text-white px-6 py-2.5 rounded-lg hover:bg-[#002244] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
            >
              Inscription
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}