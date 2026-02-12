"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";

export default function DashboardClient() {
  const [activeTab, setActiveTab] = useState("demandes");

  // Données fictives
  const stats = {
    demandesEnCours: 2,
    missionsRealisees: 8,
    depensesMois: "45 000 FCFA",
    prestatairesFavoris: 4
  };

  const demandesEnCours = [
    { id: 1, service: "Cours de Maths L2", prestataire: "Amadou Diallo", date: "15 Fév 2026", montant: "15 000 FCFA", statut: "En attente" },
    { id: 2, service: "Développement site web", prestataire: "Awa Ndiaye", date: "17 Fév 2026", montant: "50 000 FCFA", statut: "Confirmé" },
  ];

  const missionsPassees = [
    { id: 1, service: "Dépannage PC", prestataire: "Ibrahima Fall", date: "10 Fév 2026", montant: "10 000 FCFA", note: 5 },
    { id: 2, service: "Traduction anglais", prestataire: "Mariama Seck", date: "5 Fév 2026", montant: "8 000 FCFA", note: 4 },
  ];

  const prestatairesFavoris = [
    { id: 1, nom: "Amadou Diallo", specialite: "Mathématiques", note: 4.9, missions: 12 },
    { id: 2, nom: "Awa Ndiaye", specialite: "Développement web", note: 4.8, missions: 8 },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard Client
            </h1>
            <p className="text-gray-600">
              Bienvenue sur votre espace client 👋
            </p>
          </div>
          <Link
            href="/services/recherche"
            className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg hover:bg-[#e55a2a] transition font-semibold flex items-center gap-2"
          >
            🔍 Rechercher un service
          </Link>
        </div>

        {/* Cartes statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-sm text-gray-600 mb-2">Demandes en cours</p>
            <p className="text-3xl font-bold text-[#003366]">{stats.demandesEnCours}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-sm text-gray-600 mb-2">Missions réalisées</p>
            <p className="text-3xl font-bold text-[#003366]">{stats.missionsRealisees}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-sm text-gray-600 mb-2">Dépenses (Février)</p>
            <p className="text-3xl font-bold text-[#003366]">{stats.depensesMois}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-sm text-gray-600 mb-2">Prestataires favoris</p>
            <p className="text-3xl font-bold text-[#003366]">{stats.prestatairesFavoris}</p>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab("demandes")}
                className={`py-4 px-2 border-b-2 font-medium transition ${
                  activeTab === "demandes"
                    ? "border-[#003366] text-[#003366]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Mes demandes
              </button>
              <button
                onClick={() => setActiveTab("missions")}
                className={`py-4 px-2 border-b-2 font-medium transition ${
                  activeTab === "missions"
                    ? "border-[#003366] text-[#003366]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Historique
              </button>
              <button
                onClick={() => setActiveTab("favoris")}
                className={`py-4 px-2 border-b-2 font-medium transition ${
                  activeTab === "favoris"
                    ? "border-[#003366] text-[#003366]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Prestataires favoris
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Onglet Demandes */}
            {activeTab === "demandes" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Demandes en cours
                  </h2>
                  <Link
                    href="/services/recherche"
                    className="text-[#003366] hover:text-[#002244] font-medium text-sm"
                  >
                    + Nouvelle demande
                  </Link>
                </div>
                <div className="space-y-4">
                  {demandesEnCours.map((demande) => (
                    <div key={demande.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{demande.service}</p>
                        <p className="text-sm text-gray-600">Prestataire: {demande.prestataire}</p>
                        <p className="text-sm text-gray-500">{demande.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-[#003366]">{demande.montant}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                          demande.statut === "Confirmé" 
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {demande.statut}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Onglet Historique */}
            {activeTab === "missions" && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Missions réalisées
                </h2>
                <div className="space-y-4">
                  {missionsPassees.map((mission) => (
                    <div key={mission.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{mission.service}</p>
                        <p className="text-sm text-gray-600">Prestataire: {mission.prestataire}</p>
                        <p className="text-sm text-gray-500">{mission.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-[#003366]">{mission.montant}</p>
                        <div className="flex items-center gap-1 mt-2">
                          <span className="text-yellow-400">{'★'.repeat(mission.note)}</span>
                          <span className="text-gray-300">{'★'.repeat(5 - mission.note)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Onglet Favoris */}
            {activeTab === "favoris" && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Vos prestataires favoris
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {prestatairesFavoris.map((prestataire) => (
                    <div key={prestataire.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-[#e6f0ff] rounded-full flex items-center justify-center text-[#003366] font-bold text-lg">
                        {prestataire.nom.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{prestataire.nom}</p>
                        <p className="text-sm text-gray-600">{prestataire.specialite}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm font-medium">{prestataire.note}</span>
                          <span className="text-xs text-gray-500">({prestataire.missions} missions)</span>
                        </div>
                      </div>
                      <button className="text-[#003366] hover:text-[#002244]">
                        📩 Contacter
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section services récents */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Services récemment consultés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <p className="font-medium text-gray-900">Cours de Mathématiques</p>
              <p className="text-sm text-gray-600">Par Amadou Diallo</p>
              <p className="text-[#FF6B35] font-semibold mt-2">5 000 FCFA/h</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <p className="font-medium text-gray-900">Développement React</p>
              <p className="text-sm text-gray-600">Par Awa Ndiaye</p>
              <p className="text-[#FF6B35] font-semibold mt-2">15 000 FCFA/h</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <p className="font-medium text-gray-900">Graphisme/Logo</p>
              <p className="text-sm text-gray-600">Par Khadija Fall</p>
              <p className="text-[#FF6B35] font-semibold mt-2">25 000 FCFA</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}