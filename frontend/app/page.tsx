import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Services de confiance par des étudiants vérifiés
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Trouvez des prestataires qualifiés ou monétisez vos compétences
          </p>
          <div className="space-x-4">
            <Link
              href="/register?role=client"
              className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55a2a] transition"
            >
              Je cherche un service
            </Link>
            <Link
              href="/register?role=prestataire"
              className="inline-block bg-white text-[#003366] px-6 py-3 rounded-lg font-semibold border-2 border-[#003366] hover:bg-gray-50 transition"
            >
              Je propose mes services
            </Link>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Services populaires
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Cours particuliers", icon: "📚" },
            { name: "Développement web", icon: "💻" },
            { name: "Graphisme", icon: "🎨" },
            { name: "Dépannage PC", icon: "🔧" },
            { name: "Photographie", icon: "📸" },
            { name: "Traduction", icon: "🌍" }
          ].map((service) => (
            <div key={service.name} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <div className="text-4xl mb-2">{service.icon}</div>
              <p className="text-gray-800 font-medium">{service.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600">
            © 2026 ÉtudiantPresta - Projet étudiant ESP
          </p>
        </div>
      </footer>
    </main>
  );
}