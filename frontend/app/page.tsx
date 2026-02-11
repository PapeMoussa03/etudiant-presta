import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  const categories = [
    { name: "Cours particuliers", icon: "📚", count: "24 offres" },
    { name: "Développement web", icon: "💻", count: "18 offres" },
    { name: "Graphisme", icon: "🎨", count: "15 offres" },
    { name: "Dépannage PC", icon: "🔧", count: "12 offres" },
    { name: "Photographie", icon: "📸", count: "9 offres" },
    { name: "Traduction", icon: "🌍", count: "7 offres" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section avec gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/5 to-[#FF6B35]/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-[#e6f0ff] rounded-full text-[#003366] font-medium text-sm mb-6">
              🔥 Plateforme N°1 des services étudiants au Sénégal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-poppins">
              Services de confiance par des{" "}
              <span className="text-[#003366]">étudiants vérifiés</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Trouvez des prestataires qualifiés ou monétisez vos compétences en toute sécurité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register?role=client"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                🔍 Je cherche un service
                <span className="text-lg">→</span>
              </Link>
              <Link
                href="/register?role=prestataire"
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                💼 Je propose mes services
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-8">
              ⚡ Déjà +200 étudiants inscrits • Vérification email académique
            </p>
          </div>
        </div>
      </section>

      {/* Section Catégories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Services populaires
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez les services les plus demandés par la communauté
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((service) => (
            <div 
              key={service.name} 
              className="card p-6 text-center group hover:border-[#003366] cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-gray-900 font-semibold mb-1">
                {service.name}
              </h3>
              <p className="text-sm text-[#FF6B35] font-medium">
                {service.count}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="inline-flex items-center text-[#003366] font-semibold hover:text-[#002244] group"
          >
            Voir tous les services
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="bg-[#003366] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-[#FF6B35] font-medium">Étudiants</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-[#FF6B35] font-medium">Services</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-[#FF6B35] font-medium">Missions</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <p className="text-[#FF6B35] font-medium">Note moyenne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer amélioré */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins">ÉtudiantPresta</h3>
              <p className="text-gray-400 text-sm">
                Plateforme de mise en relation entre étudiants vérifiés et clients au Sénégal.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">À propos</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/conditions" className="hover:text-white transition">Conditions</Link></li>
                <li><Link href="/confidentialite" className="hover:text-white transition">Confidentialité</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">📱</a>
                <a href="#" className="text-gray-400 hover:text-white transition">💬</a>
                <a href="#" className="text-gray-400 hover:text-white transition">📧</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2026 ÉtudiantPresta - Projet étudiant ESP. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  );
}