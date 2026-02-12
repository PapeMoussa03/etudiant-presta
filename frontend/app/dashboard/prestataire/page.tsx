"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";

export default function DashboardPrestataire() {
  const [activeTab, setActiveTab] = useState("apercu");

  // Données fictives
  const stats = {
    missionsEnCours: 3,
    missionsTerminees: 12,
    revenuMois: "125 000 FCFA",
    noteMoyenne: 4.8,
    avis: 24
  };

  const missionsEnCours = [
    { id: 1, client: "Fatou Diop", service: "Cours de Maths L1", date: "15 Fév 2026", montant: "15 000 FCFA", statut: "À venir" },
    { id: 2, client: "Moussa Sow", service: "Dépannage PC", date: "16 Fév 2026", montant: "10 000 FCFA", statut: "En cours" },
    { id: 3, client: "Aïda Ndiaye", service: "Site vitrine", date: "18 Fév 2026", montant: "50 000 FCFA", statut: "À venir" },
  ];

  const servicesProposes = [
    { id: 1, titre: "Cours particuliers Maths", prix: "5 000 FCFA/h", demandes: 8, statut: "Actif" },
    { id: 2, titre: "Développement web React", prix: "15 000 FCFA/h", demandes: 3, statut: "Actif" },
    { id: 3, titre: "Dépannage informatique", prix: "10 000 FCFA", demandes: 12, statut: "Actif" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard Prestataire
            </h1>
            <p className="text-gray-600">
              Bienvenue sur votre espace, Pape Moussa 👋
            </p>
          </div>
          <Link
            href="/services/nouveau"
            className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg hover:bg-[#e55a2a] transition font-semibold flex items-center gap-2"
          >
            <span className="text-xl">+</span>
            Nouveau service
          </Link>
        </div>

        {/* Cartes statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-sm text-gray-600 mb-2">Missions en cours</p>
            <p className="text-3xl font-bold text-[#003366]">{stats.missionsEnCours}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-sm text-gray-600 mb-2">Missions terminées</p>
            <p className="text-3xl font-bold text-[#003366]">{stats.missionsTerminees}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-sm text-gray-600 mb-2">Revenu (Février)</p>
            <p className="text-3xl font-bold text-[#003366]">{stats.revenuMois}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-sm text-gray-600 mb-2">Note moyenne</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold text-[#003366]">{stats.noteMoyenne}</p>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-sm text-gray-600">({stats.avis} avis)</span>
            </div>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab("apercu")}
                className={`py-4 px-2 border-b-2 font-medium transition ${
                  activeTab === "apercu"
                    ? "border-[#003366] text-[#003366]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Aperçu
              </button>
              <button
                onClick={() => setActiveTab("missions")}
                className={`py-4 px-2 border-b-2 font-medium transition ${
                  activeTab === "missions"
                    ? "border-[#003366] text-[#003366]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Missions
              </button>
              <button
                onClick={() => setActiveTab("services")}
                className={`py-4 px-2 border-b-2 font-medium transition ${
                  activeTab === "services"
                    ? "border-[#003366] text-[#003366]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Mes services
              </button>
              <button
                onClick={() => setActiveTab("revenus")}
                className={`py-4 px-2 border-b-2 font-medium transition ${
                  activeTab === "revenus"
                    ? "border-[#003366] text-[#003366]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Revenus
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Onglet Aperçu */}
            {activeTab === "apercu" && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Missions à venir
                </h2>
                <div className="space-y-4">
                  {missionsEnCours.map((mission) => (
                    <div key={mission.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <div>
                        <p className="font-medium text-gray-900">{mission.service}</p>
                        <p className="text-sm text-gray-600">Client: {mission.client}</p>
                        <p className="text-sm text-gray-500">{mission.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-[#003366]">{mission.montant}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                          mission.statut === "En cours" 
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {mission.statut}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Onglet Missions */}
            {activeTab === "missions" && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Historique des missions
                </h2>
                <p className="text-gray-600">
                  Liste complète des missions à venir...
                </p>
              </div>
            )}

            {/* Onglet Services */}
            {activeTab === "services" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Vos services proposés
                  </h2>
                  <Link
                    href="/services/nouveau"
                    className="text-[#003366] hover:text-[#002244] font-medium text-sm flex items-center gap-1"
                  >
                    <span className="text-lg">+</span> Ajouter
                  </Link>
                </div>
                <div className="space-y-4">
                  {servicesProposes.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{service.titre}</p>
                        <p className="text-sm text-[#FF6B35] font-semibold">{service.prix}</p>
                        <p className="text-sm text-gray-600">{service.demandes} demandes en attente</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                          {service.statut}
                        </span>
                        <button className="text-gray-400 hover:text-gray-600">
                          ✎
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Onglet Revenus */}
            {activeTab === "revenus" && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Historique des paiements
                </h2>
                <p className="text-gray-600">
                  Graphiques et détails des revenus à venir...
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Section messages récents */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Messages récents
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition">
              <div className="w-10 h-10 bg-[#e6f0ff] rounded-full flex items-center justify-center text-[#003366] font-bold">
                FD
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Fatou Diop</p>
                <p className="text-sm text-gray-600">Bonjour, je suis intéressée par votre cours de maths...</p>
              </div>
              <span className="text-xs text-gray-500">Il y a 2h</span>
            </div>
            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition">
              <div className="w-10 h-10 bg-[#ffe6d9] rounded-full flex items-center justify-center text-[#FF6B35] font-bold">
                MS
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Moussa Sow</p>
                <p className="text-sm text-gray-600">Merci pour votre intervention, tout fonctionne parfaitement !</p>
              </div>
              <span className="text-xs text-gray-500">Hier</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}