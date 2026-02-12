"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";

export default function RechercheServices() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("tous");
  const [priceRange, setPriceRange] = useState("tous");
  const [sortBy, setSortBy] = useState("pertinence");

  // Données fictives des prestataires
  const prestataires = [
    {
      id: 1,
      nom: "Amadou Diallo",
      photo: "AD",
      specialite: "Mathématiques",
      ecole: "ESP",
      note: 4.9,
      avis: 24,
      prix: "5 000 FCFA/h",
      tags: ["Cours particuliers", "L1-L2", "Algèbre"],
      disponible: true
    },
    {
      id: 2,
      nom: "Awa Ndiaye",
      photo: "AN",
      specialite: "Développement web",
      ecole: "UCAD",
      note: 4.8,
      avis: 18,
      prix: "15 000 FCFA/h",
      tags: ["React", "Node.js", "WordPress"],
      disponible: true
    },
    {
      id: 3,
      nom: "Ibrahima Fall",
      photo: "IF",
      specialite: "Dépannage PC",
      ecole: "ISM",
      note: 4.7,
      avis: 32,
      prix: "10 000 FCFA",
      tags: ["Hardware", "Software", "Réseau"],
      disponible: false
    },
    {
      id: 4,
      nom: "Mariama Seck",
      photo: "MS",
      specialite: "Traduction",
      ecole: "UGB",
      note: 4.9,
      avis: 15,
      prix: "8 000 FCFA/h",
      tags: ["Anglais", "Français", "Wolof"],
      disponible: true
    },
    {
      id: 5,
      nom: "Khadija Fall",
      photo: "KF",
      specialite: "Graphisme",
      ecole: "ESMT",
      note: 4.6,
      avis: 21,
      prix: "25 000 FCFA",
      tags: ["Logo", "Affiche", "UI/UX"],
      disponible: true
    },
    {
      id: 6,
      nom: "Oumar Sow",
      photo: "OS",
      specialite: "Photographie",
      ecole: "ESP",
      note: 4.8,
      avis: 27,
      prix: "20 000 FCFA/séance",
      tags: ["Événementiel", "Portrait", "Produit"],
      disponible: true
    }
  ];

  const categories = [
    "Tous les services",
    "Cours particuliers",
    "Développement web",
    "Graphisme",
    "Dépannage PC",
    "Photographie",
    "Traduction"
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Rechercher un service
          </h1>
          <p className="text-gray-600">
            Trouvez le prestataire idéal parmi nos étudiants vérifiés
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Que recherchez-vous ? (ex: cours maths, site web...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition"
              />
              <span className="absolute left-4 top-4 text-gray-400 text-xl">
                🔍
              </span>
            </div>
            <button className="bg-[#003366] text-white px-8 py-4 rounded-lg hover:bg-[#002244] transition font-semibold">
              Rechercher
            </button>
          </div>
        </div>

        {/* Filtres et résultats */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filtres */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="font-semibold text-gray-900 mb-4 pb-4 border-b">
                Filtres
              </h2>
              
              {/* Catégories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Catégories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={cat.toLowerCase()}
                        checked={selectedCategory === cat.toLowerCase()}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="h-4 w-4 text-[#003366] focus:ring-[#003366] border-gray-300"
                      />
                      <span className="ml-3 text-sm text-gray-600">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Prix */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Budget
                </h3>
                <div className="space-y-2">
                  {["Tous", "Moins de 10 000 FCFA", "10 000 - 25 000 FCFA", "25 000 - 50 000 FCFA", "Plus de 50 000 FCFA"].map((price) => (
                    <label key={price} className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        value={price}
                        checked={priceRange === price}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="h-4 w-4 text-[#003366] focus:ring-[#003366] border-gray-300"
                      />
                      <span className="ml-3 text-sm text-gray-600">{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Disponibilité */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Disponibilité
                </h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-[#003366] focus:ring-[#003366] border-gray-300 rounded"
                  />
                  <span className="ml-3 text-sm text-gray-600">Disponible maintenant</span>
                </label>
              </div>

              {/* École */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  École
                </h3>
                <div className="space-y-2">
                  {["ESP", "UCAD", "ISM", "ESMT", "UGB"].map((ecole) => (
                    <label key={ecole} className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-[#003366] focus:ring-[#003366] border-gray-300 rounded"
                      />
                      <span className="ml-3 text-sm text-gray-600">{ecole}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full text-[#003366] border border-[#003366] px-4 py-2 rounded-lg hover:bg-[#e6f0ff] transition font-medium">
                Réinitialiser
              </button>
            </div>
          </div>

          {/* Résultats */}
          <div className="lg:w-3/4">
            {/* En-tête des résultats */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">{prestataires.length}</span> prestataires trouvés
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Trier par:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none"
                >
                  <option value="pertinence">Pertinence</option>
                  <option value="note">Meilleure note</option>
                  <option value="prix-croissant">Prix croissant</option>
                  <option value="prix-decroissant">Prix décroissant</option>
                </select>
              </div>
            </div>

            {/* Grille des prestataires */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prestataires.map((prestataire) => (
                <div key={prestataire.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                  {/* En-tête carte */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                      prestataire.ecole === "ESP" ? "bg-[#003366]" :
                      prestataire.ecole === "UCAD" ? "bg-green-600" :
                      prestataire.ecole === "ISM" ? "bg-purple-600" :
                      prestataire.ecole === "ESMT" ? "bg-orange-600" :
                      "bg-gray-600"
                    }`}>
                      {prestataire.photo}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {prestataire.nom}
                          </h3>
                          <p className="text-sm text-gray-600">{prestataire.specialite}</p>
                        </div>
                        {!prestataire.disponible && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            Indisponible
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-[#e6f0ff] text-[#003366] rounded-full">
                          {prestataire.ecole}
                        </span>
                        <div className="flex items-center">
                          <span className="text-yellow-400 text-sm">★</span>
                          <span className="text-sm font-medium ml-1">{prestataire.note}</span>
                          <span className="text-xs text-gray-500 ml-1">({prestataire.avis})</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {prestataire.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Prix et action */}
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-600">À partir de</p>
                      <p className="text-lg font-bold text-[#FF6B35]">{prestataire.prix}</p>
                    </div>
                    <Link
                      href={`/prestataire/${prestataire.id}`}
                      className="bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-[#002244] transition text-sm font-medium"
                    >
                      Voir le profil
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  ←
                </button>
                <button className="px-4 py-2 bg-[#003366] text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}