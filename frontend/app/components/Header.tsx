"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#003366]">
            ÉtudiantPresta
          </Link>
          <nav className="space-x-4">
            <Link 
              href="/login" 
              className="text-gray-600 hover:text-[#003366] px-3 py-2 rounded-lg transition"
            >
              Connexion
            </Link>
            <Link
              href="/register"
              className="bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-[#002244] transition"
            >
              Inscription
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}