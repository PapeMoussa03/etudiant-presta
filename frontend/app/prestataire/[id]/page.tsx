"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";

export default function ProfilPrestataire() {
  const [activeTab, setActiveTab] = useState("services");

  // Données fictives du prestataire
  const prestataire = {
    id: 1,
    nom: "Amadou Diallo",
    photo: "AD",
    role: "Prestataire",
    ecole: "ESP - École Supérieure Polytechnique",
    niveau: "Master 2",
    specialite: "Mathématiques & Développement web",
    bio: "Étudiant en Master 2 de Mathématiques Appliquées à l'ESP. Passionné par l'enseignement et le développement web. J'enseigne les maths depuis 3 ans et j'ai réalisé plus de 50 missions avec une satisfaction de 100%.",
    note: 4.9,
    avis: 48,
    missions: 52,
    inscription: "Septembre 2025",
    disponible: true,
    tarifHoraire: "5 000 - 15 000 FCFA",
    email: "amadou.diallo@esp.sn",
    telephone: "77 123 45 67",
    competences: [
      { nom: "Mathématiques", niveau: "Expert", cours: ["Algèbre", "Analyse", "Probabilités"] },
      { nom: "Développement web", niveau: "Intermédiaire", cours: ["React", "Node.js", "Python"] },
      { nom: "Statistiques", niveau: "Avancé", cours: ["R", "Python", "SPSS"] }
    ],
    services: [
      { id: 1, titre: "Cours particuliers Mathématiques", prix: "5 000 FCFA/h", duree: "1h - 2h", demandes: 12 },
      { id: 2, titre: "Préparation examens Maths/Physique", prix: "7 000 FCFA/h", duree: "2h", demandes: 8 },
      { id: 3, titre: "Développement site vitrine", prix: "50 000 FCFA", duree: "Projet", demandes: 5 },
    ],
    avisRecents: [
      { id: 1, client: "Fatou Diop", note: 5, commentaire: "Excellent professeur, très pédagogue. J'ai réussi mon partiel grâce à lui !", date: "10 Fév 2026" },
      { id: 2, client: "Moussa Sow", note: 5, commentaire: "Très professionnel, à l'écoute. Je recommande vivement.", date: "5 Fév 2026" },
      { id: 3, client: "Aïda Ndiaye", note: 4.5, commentaire: "Bon contact, explications claires. Un peu de retard mais qualité au rendez-vous.", date: "28 Jan 2026" },
    ]
  };

  // Données des avis avec étoiles
  const renderStars = (note: number) => {
    const fullStars = Math.floor(note);
    const halfStar = note % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <span className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
        {halfStar && <span className="text-yellow-400 text-lg">½</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="text-gray-300 text-lg">★</span>
        ))}
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Fil d'Ariane */}
        <div className="text-sm breadcrumbs text-gray-500 mb-6">
          <ul className="flex gap-2">
            <li><Link href="/" className="hover:text-[#003366]">Accueil</Link></li>
            <li className="before:content-['>'] before:mx-2">Recherche</li>
            <li className="before:content-['>'] before:mx-2 text-[#003366] font-medium">{prestataire.nom}</li>
          </ul>
        </div>

        {/* En-tête du profil */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#003366] to-[#002244] rounded-full flex items-center justify-center text-white font-bold text-4xl shadow-lg">
                {prestataire.photo}
              </div>
              {prestataire.disponible ? (
                <span className="mt-4 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Disponible maintenant
                </span>
              ) : (
                <span className="mt-4 px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                  Indisponible
                </span>
              )}
            </div>

            {/* Infos principales */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {prestataire.nom}
                  </h1>
                  <p className="text-lg text-[#FF6B35] font-semibold">
                    {prestataire.specialite}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      {renderStars(prestataire.note)}
                      <span className="text-2xl font-bold text-gray-900 ml-2">{prestataire.note}</span>
                    </div>
                    <p className="text-sm text-gray-600">Basé sur {prestataire.avis} avis</p>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-4 py-2 bg-[#e6f0ff] text-[#003366] rounded-lg text-sm font-medium">
                  🎓 {prestataire.ecole}
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium">
                  📚 {prestataire.niveau}
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
                  ✅ {prestataire.missions} missions réalisées
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium">
                  📅 Membre depuis {prestataire.inscription}
                </span>
              </div>

              {/* Bio */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {prestataire.bio}
              </p>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-[#FF6B35] text-white px-6 py-3 rounded-lg hover:bg-[#e55a2a] transition font-semibold flex items-center justify-center gap-2">
                  <span>📩</span>
                  Contacter maintenant
                </button>
                <button className="flex-1 bg-white border-2 border-[#003366] text-[#003366] px-6 py-3 rounded-lg hover:bg-[#e6f0ff] transition font-semibold flex items-center justify-center gap-2">
                  <span>⭐</span>
                  Ajouter aux favoris
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab("services")}
                className={`py-4 px-2 border-b-2 font-medium transition whitespace-nowrap ${
                  activeTab === "services"
                    ? "border-[#003366] text-[#003366]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Services proposés
              </button>
              <button
                onClick={() => setActiveTab("avis")}
                className={`py-4 px-2 border-b-2 font-medium transition whitespace-nowrap ${
                  activeTab === "avis"
                    ? "border-[#003366] text-[#003366]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Avis clients ({prestataire.avis})
              </button>
              <button
                onClick={() => setActiveTab("competences")}
                className={`py-4 px-2 border-b-2 font-medium transition whitespace-nowrap ${
                  activeTab === "competences"
                    ? "border-[#003366] text-[#003366]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Compétences
              </button>
              <button
                onClick={() => setActiveTab("infos")}
                className={`py-4 px-2 border-b-2 font-medium transition whitespace-nowrap ${
                  activeTab === "infos"
                    ? "border-[#003366] text-[#003366]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Informations
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Onglet Services */}
            {activeTab === "services" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Services proposés par {prestataire.nom}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {prestataire.services.map((service) => (
                    <div key={service.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {service.titre}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <p className="text-2xl font-bold text-[#FF6B35]">
                          {service.prix}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <span>⏱️</span> {service.duree}
                        </p>
                        <p className="text-sm text-gray-600">
                          📊 {service.demandes} demandes ce mois
                        </p>
                      </div>
                      <button className="w-full bg-[#003366] text-white py-2 rounded-lg hover:bg-[#002244] transition font-medium">
                        Réserver
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Onglet Avis */}
            {activeTab === "avis" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Avis clients
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center">
                        {renderStars(prestataire.note)}
                        <span className="text-2xl font-bold text-gray-900 ml-2">{prestataire.note}</span>
                      </div>
                      <p className="text-sm text-gray-600">Sur {prestataire.avis} avis</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  {prestataire.avisRecents.map((avis) => (
                    <div key={avis.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-gray-900">{avis.client}</p>
                          <div className="flex items-center gap-2 mt-1">
                            {renderStars(avis.note)}
                            <span className="text-sm text-gray-500">{avis.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">"{avis.commentaire}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Onglet Compétences */}
            {activeTab === "competences" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Compétences et expertises
                </h2>
                <div className="space-y-6">
                  {prestataire.competences.map((comp, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {comp.nom}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          comp.niveau === "Expert" ? "bg-green-100 text-green-800" :
                          comp.niveau === "Avancé" ? "bg-blue-100 text-blue-800" :
                          "bg-yellow-100 text-yellow-800"
                        }`}>
                          {comp.niveau}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {comp.cours.map((cours, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {cours}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Onglet Informations */}
            {activeTab === "infos" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Informations détaillées
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500 w-8">🎓</span>
                      <div>
                        <p className="text-sm text-gray-600">Établissement</p>
                        <p className="font-medium text-gray-900">{prestataire.ecole}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500 w-8">📚</span>
                      <div>
                        <p className="text-sm text-gray-600">Niveau d'études</p>
                        <p className="font-medium text-gray-900">{prestataire.niveau}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500 w-8">💰</span>
                      <div>
                        <p className="text-sm text-gray-600">Tarif horaire</p>
                        <p className="font-medium text-[#FF6B35]">{prestataire.tarifHoraire}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500 w-8">📅</span>
                      <div>
                        <p className="text-sm text-gray-600">Membre depuis</p>
                        <p className="font-medium text-gray-900">{prestataire.inscription}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500 w-8">📧</span>
                      <div>
                        <p className="text-sm text-gray-600">Email de contact</p>
                        <p className="font-medium text-gray-900">{prestataire.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500 w-8">📱</span>
                      <div>
                        <p className="text-sm text-gray-600">Téléphone</p>
                        <p className="font-medium text-gray-900">{prestataire.telephone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section services similaires */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Autres prestataires en {prestataire.specialite.split(" ")[0]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/prestataire/2" className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <p className="font-medium text-gray-900">Awa Ndiaye</p>
              <p className="text-sm text-gray-600">Développement web</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">★★★★½</span>
                <span className="text-sm text-gray-500 ml-2">4.8</span>
              </div>
            </Link>
            <Link href="/prestataire/3" className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <p className="font-medium text-gray-900">Ibrahima Fall</p>
              <p className="text-sm text-gray-600">Mathématiques</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-500 ml-2">5.0</span>
              </div>
            </Link>
            <Link href="/prestataire/4" className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <p className="font-medium text-gray-900">Mariama Seck</p>
              <p className="text-sm text-gray-600">Statistiques</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">★★★★☆</span>
                <span className="text-sm text-gray-500 ml-2">4.7</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}