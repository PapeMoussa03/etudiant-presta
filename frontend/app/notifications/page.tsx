"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";

export default function NotificationsPage() {
  const [filter, setFilter] = useState("toutes");

  // Données fictives des notifications
  const notifications = [
    {
      id: 1,
      type: "message",
      titre: "Nouveau message de Amadou Diallo",
      description: "Bonjour, je suis disponible ce soir pour le cours de maths",
      date: "Il y a 5 minutes",
      lu: false,
      lien: "/messages",
      icon: "💬",
      couleur: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      type: "reservation",
      titre: "Réservation confirmée",
      description: "Cours de maths avec Amadou Diallo - Samedi 15h",
      date: "Il y a 2 heures",
      lu: false,
      lien: "/dashboard/client",
      icon: "✓",
      couleur: "bg-green-100 text-green-600"
    },
    {
      id: 3,
      type: "paiement",
      titre: "Paiement reçu",
      description: "50 000 FCFA - Site vitrine pour Awa Ndiaye",
      date: "Hier",
      lu: true,
      lien: "/dashboard/prestataire/revenus",
      icon: "💰",
      couleur: "bg-[#e6f0ff] text-[#003366]"
    },
    {
      id: 4,
      type: "avis",
      titre: "Nouvel avis reçu",
      description: "Fatou Diop a laissé un avis 5★ sur votre service",
      date: "Hier",
      lu: true,
      lien: "/prestataire/1#avis",
      icon: "⭐",
      couleur: "bg-yellow-100 text-yellow-600"
    },
    {
      id: 5,
      type: "rappel",
      titre: "Rappel : Mission dans 2 heures",
      description: "Dépannage PC chez Moussa Sow à 17h",
      date: "Il y a 3 heures",
      lu: false,
      lien: "/dashboard/prestataire",
      icon: "⏰",
      couleur: "bg-orange-100 text-orange-600"
    },
    {
      id: 6,
      type: "systeme",
      titre: "Vérification email requise",
      description: "Veuillez vérifier votre email académique pour activer votre compte",
      date: "Hier",
      lu: true,
      lien: "/parametres",
      icon: "📧",
      couleur: "bg-purple-100 text-purple-600"
    },
    {
      id: 7,
      type: "promotion",
      titre: "Offre spéciale étudiante",
      description: "-20% sur votre première réservation avec le code ETUDIANT2026",
      date: "2 jours",
      lu: true,
      lien: "/services/recherche",
      icon: "🎁",
      couleur: "bg-pink-100 text-pink-600"
    },
    {
      id: 8,
      type: "message",
      titre: "Nouveau message de Ibrahima Fall",
      description: "Je passe chez vous à 17h pour le dépannage",
      date: "Lundi",
      lu: true,
      lien: "/messages",
      icon: "💬",
      couleur: "bg-blue-100 text-blue-600"
    }
  ];

  const notificationsNonLues = notifications.filter(n => !n.lu).length;

  const filteredNotifications = filter === "toutes" 
    ? notifications 
    : filter === "non-lues"
      ? notifications.filter(n => !n.lu)
      : notifications.filter(n => n.type === filter);

  const marquerCommeLu = (id: number) => {
    alert(`Notification ${id} marquée comme lue (simulation)`);
  };

  const toutMarquerLu = () => {
    alert("Toutes les notifications marquées comme lues (simulation)");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Notifications
            </h1>
            <p className="text-gray-600">
              {notificationsNonLues > 0 
                ? `Vous avez ${notificationsNonLues} notification${notificationsNonLues > 1 ? 's' : ''} non lue${notificationsNonLues > 1 ? 's' : ''}`
                : "Aucune nouvelle notification"
              }
            </p>
          </div>
          {notificationsNonLues > 0 && (
            <button
              onClick={toutMarquerLu}
              className="mt-4 sm:mt-0 px-6 py-3 bg-[#003366] text-white rounded-lg hover:bg-[#002244] transition font-medium flex items-center gap-2"
            >
              <span>✓✓</span>
              Tout marquer comme lu
            </button>
          )}
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => setFilter("toutes")}
              className={`px-4 py-2 rounded-lg transition font-medium ${
                filter === "toutes"
                  ? "bg-[#003366] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Toutes
            </button>
            <button
              onClick={() => setFilter("non-lues")}
              className={`px-4 py-2 rounded-lg transition font-medium flex items-center gap-2 ${
                filter === "non-lues"
                  ? "bg-[#003366] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span>🔴</span>
              Non lues
              {notificationsNonLues > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                  {notificationsNonLues}
                </span>
              )}
            </button>
            <button
              onClick={() => setFilter("message")}
              className={`px-4 py-2 rounded-lg transition font-medium ${
                filter === "message"
                  ? "bg-[#003366] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              💬 Messages
            </button>
            <button
              onClick={() => setFilter("reservation")}
              className={`px-4 py-2 rounded-lg transition font-medium ${
                filter === "reservation"
                  ? "bg-[#003366] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              📅 Réservations
            </button>
            <button
              onClick={() => setFilter("paiement")}
              className={`px-4 py-2 rounded-lg transition font-medium ${
                filter === "paiement"
                  ? "bg-[#003366] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              💰 Paiements
            </button>
            <button
              onClick={() => setFilter("avis")}
              className={`px-4 py-2 rounded-lg transition font-medium ${
                filter === "avis"
                  ? "bg-[#003366] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              ⭐ Avis
            </button>
          </div>
        </div>

        {/* Liste des notifications */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {filteredNotifications.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-6 hover:bg-gray-50 transition ${
                    !notification.lu ? 'bg-blue-50/30' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icône */}
                    <div className={`w-12 h-12 rounded-full ${notification.couleur} flex items-center justify-center text-2xl flex-shrink-0`}>
                      {notification.icon}
                    </div>

                    {/* Contenu */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <h3 className={`font-semibold ${
                          !notification.lu ? 'text-[#003366]' : 'text-gray-900'
                        }`}>
                          {notification.titre}
                          {!notification.lu && (
                            <span className="ml-2 inline-block w-2 h-2 bg-[#FF6B35] rounded-full"></span>
                          )}
                        </h3>
                        <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                          {notification.date}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {notification.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <Link
                          href={notification.lien}
                          className="text-sm text-[#003366] hover:text-[#002244] font-medium flex items-center gap-1"
                        >
                          Voir les détails
                          <span>→</span>
                        </Link>
                        {!notification.lu && (
                          <button
                            onClick={() => marquerCommeLu(notification.id)}
                            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
                          >
                            <span>✓</span>
                            Marquer comme lu
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="text-6xl mb-4">🔔</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucune notification
              </h3>
              <p className="text-gray-600">
                {filter === "toutes" 
                  ? "Vous n'avez aucune notification pour le moment"
                  : "Aucune notification ne correspond à ce filtre"
                }
              </p>
              {filter !== "toutes" && (
                <button
                  onClick={() => setFilter("toutes")}
                  className="mt-6 px-6 py-3 bg-[#003366] text-white rounded-lg hover:bg-[#002244] transition font-medium"
                >
                  Voir toutes les notifications
                </button>
              )}
            </div>
          )}
        </div>

        {/* Paramètres de notifications */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚙️</span>
            Paramètres de notification
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Notifications push</p>
                <p className="text-sm text-gray-600">Recevoir les notifications sur votre navigateur</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003366]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Notifications email</p>
                <p className="text-sm text-gray-600">Recevoir les notifications par email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003366]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Notifications SMS</p>
                <p className="text-sm text-gray-600">Recevoir les notifications par SMS</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#003366]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Footer notifications */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            🔔 Les notifications sont un service gratuit pour vous tenir informé de votre activité sur ÉtudiantPresta
          </p>
        </div>
      </div>
    </main>
  );
}