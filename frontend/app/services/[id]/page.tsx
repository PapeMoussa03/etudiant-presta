"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";

export default function DetailService() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Données fictives du service
  const service = {
    id: 1,
    titre: "Cours particuliers Mathématiques - Niveau L1/L2",
    prestataire: {
      id: 1,
      nom: "Amadou Diallo",
      photo: "AD",
      ecole: "ESP",
      note: 4.9,
      avis: 48,
      missions: 52
    },
    categorie: "Cours particuliers",
    prix: "5 000 FCFA",
    typePrix: "par heure",
    duree: "1h - 2h",
    description: `Je propose des cours particuliers en mathématiques pour les étudiants de Licence 1 et Licence 2. 
    
Diplômé d'un Master 2 en Mathématiques Appliquées à l'ESP, j'ai plus de 3 ans d'expérience dans l'enseignement. 
Ma méthode pédagogique s'adapte à chaque étudiant :

• Explications claires et détaillées
• Exercices pratiques et corrigés
• Préparation aux examens et concours
• Suivi personnalisé entre les séances

N'hésitez pas à me contacter pour discuter de vos besoins spécifiques !`,
    matieres: ["Algèbre", "Analyse", "Probabilités", "Statistiques", "Géométrie"],
    objectifs: [
      "Préparation partiels et examens",
      "Rattrapage et mise à niveau",
      "Approfondissement des connaissances",
      "Aide aux devoirs"
    ],
    disponibilites: [
      "Lundi: 14h - 20h",
      "Mercredi: 16h - 21h",
      "Vendredi: 15h - 19h",
      "Samedi: 10h - 18h"
    ],
    mode: ["En ligne (Zoom/Meet)", "À domicile (Dakar)", "Bibliothèque UCAD"],
    avisRecents: [
      {
        id: 1,
        client: "Fatou Diop",
        note: 5,
        commentaire: "Excellent professeur ! Très pédagogue, il prend le temps d'expliquer. J'ai eu 15/20 à mon partiel grâce à lui.",
        date: "10 Fév 2026"
      },
      {
        id: 2,
        client: "Moussa Sow",
        note: 5,
        commentaire: "Très professionnel, à l'écoute. Les cours sont bien structurés. Je recommande vivement.",
        date: "5 Fév 2026"
      },
      {
        id: 3,
        client: "Aïda Ndiaye",
        note: 4.5,
        commentaire: "Bon contact, explications claires. Quelques minutes de retard mais la qualité est là.",
        date: "28 Jan 2026"
      }
    ],
    questions: [
      {
        id: 1,
        client: "Ibrahima Fall",
        question: "Proposez-vous des cours en groupe ?",
        reponse: "Oui, je propose des cours en petit groupe (2-3 personnes) avec un tarif dégressif : 4 000 FCFA/personne.",
        date: "2 Fév 2026"
      },
      {
        id: 2,
        client: "Mariama Seck",
        question: "Acceptez-vous les paiements Wave ?",
        reponse: "Oui, je suis disponible sur Wave et Orange Money.",
        date: "28 Jan 2026"
      }
    ]
  };

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
          <ul className="flex gap-2 flex-wrap">
            <li><Link href="/" className="hover:text-[#003366]">Accueil</Link></li>
            <li className="before:content-['>'] before:mx-2">
              <Link href="/services/recherche" className="hover:text-[#003366]">Recherche</Link>
            </li>
            <li className="before:content-['>'] before:mx-2">
              <Link href={`/prestataire/${service.prestataire.id}`} className="hover:text-[#003366]">
                {service.prestataire.nom}
              </Link>
            </li>
            <li className="before:content-['>'] before:mx-2 text-[#003366] font-medium truncate">
              {service.titre}
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Colonne principale */}
          <div className="lg:w-2/3">
            {/* En-tête du service */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-4 py-2 bg-[#e6f0ff] text-[#003366] rounded-full text-sm font-medium mb-4">
                    {service.categorie}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.titre}
                  </h1>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">★</span>
                      <span className="font-medium">{service.prestataire.note}</span>
                      <span className="text-sm text-gray-500">({service.prestataire.avis} avis)</span>
                    </div>
                    <span>•</span>
                    <span>🎓 {service.prestataire.ecole}</span>
                    <span>•</span>
                    <span>✅ {service.prestataire.missions}+ missions</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-[#FF6B35]">{service.prix}</p>
                  <p className="text-sm text-gray-600">{service.typePrix} • {service.duree}</p>
                </div>
              </div>

              {/* Carte prestataire */}
              <Link href={`/prestataire/${service.prestataire.id}`} className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#003366] to-[#002244] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {service.prestataire.photo}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Prestataire: {service.prestataire.nom}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center">
                        {renderStars(service.prestataire.note)}
                        <span className="text-sm text-gray-600 ml-2">{service.prestataire.note}/5</span>
                      </div>
                      <span className="text-sm text-[#003366]">Voir le profil →</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Description */}
              <div className="prose max-w-none mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Description du service</h2>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Matières */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Matières enseignées</h2>
                <div className="flex flex-wrap gap-2">
                  {service.matieres.map((matiere, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                      {matiere}
                    </span>
                  ))}
                </div>
              </div>

              {/* Objectifs */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Objectifs du cours</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.objectifs.map((objectif, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">✓</span>
                      {objectif}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modes de prestation */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Modes de prestation</h2>
                <div className="flex flex-wrap gap-3">
                  {service.mode.map((m, index) => (
                    <div key={index} className="px-4 py-3 bg-[#e6f0ff] rounded-lg">
                      <span className="text-[#003366] font-medium">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Avis clients */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Avis clients</h2>
                <div className="space-y-6">
                  {service.avisRecents.map((avis) => (
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
                <Link 
                  href={`/prestataire/${service.prestataire.id}#avis`}
                  className="inline-block mt-6 text-[#003366] hover:text-[#002244] font-medium"
                >
                  Voir tous les avis ({service.prestataire.avis}) →
                </Link>
              </div>

              {/* Questions/réponses */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Questions / Réponses</h2>
                <div className="space-y-6">
                  {service.questions.map((q) => (
                    <div key={q.id} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="text-[#003366] font-bold">Q:</span>
                        <div>
                          <p className="font-medium text-gray-900">{q.question}</p>
                          <p className="text-sm text-gray-600">Par {q.client} • {q.date}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 ml-4">
                        <span className="text-[#FF6B35] font-bold">R:</span>
                        <p className="text-gray-700">{q.reponse}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 text-[#003366] hover:text-[#002244] font-medium flex items-center gap-2">
                  <span>+</span> Poser une question
                </button>
              </div>
            </div>
          </div>

          {/* Colonne latérale - Réservation */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Réserver ce service</h2>
              
              {/* Prix */}
              <div className="flex justify-between items-center mb-6 pb-6 border-b">
                <span className="text-gray-700">Prix</span>
                <div>
                  <span className="text-2xl font-bold text-[#FF6B35]">{service.prix}</span>
                  <span className="text-sm text-gray-600">/{service.typePrix}</span>
                </div>
              </div>

              {/* Disponibilités */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Disponibilités du prestataire
                </label>
                <div className="space-y-2">
                  {service.disponibilites.map((dispo, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">{dispo}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Séance unique ou abonnement */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Type de réservation
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer flex-1">
                    <input
                      type="radio"
                      name="type"
                      className="h-4 w-4 text-[#003366]"
                      defaultChecked
                    />
                    <span className="ml-2 text-sm font-medium">Séance unique</span>
                  </label>
                  <label className="flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer flex-1">
                    <input
                      type="radio"
                      name="type"
                      className="h-4 w-4 text-[#003366]"
                    />
                    <span className="ml-2 text-sm font-medium">Forfait 5h</span>
                  </label>
                </div>
              </div>

              {/* Date et heure */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Heure
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition bg-white"
                  >
                    <option value="">Sélectionner</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                  </select>
                </div>
              </div>

              {/* Message optionnel */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message au prestataire (optionnel)
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition"
                  placeholder="Ex: J'aimerais travailler les intégrales..."
                ></textarea>
              </div>

              {/* Bouton de réservation */}
              <button className="w-full bg-[#FF6B35] text-white py-4 px-6 rounded-lg hover:bg-[#e55a2a] transition font-semibold text-lg shadow-md hover:shadow-lg mb-4">
                Réserver maintenant
              </button>

              {/* Paiements acceptés */}
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Paiements acceptés</p>
                <div className="flex justify-center gap-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm">Wave</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm">Orange Money</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm">Carte</span>
                </div>
              </div>

              {/* Garantie */}
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-xs text-gray-500">
                  🔒 Paiement sécurisé • Annulation gratuite jusqu'à 24h avant
                </p>
              </div>
            </div>

            {/* Carte de localisation */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Zone d'intervention</h3>
              <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center text-gray-500">
                🗺️ Carte Dakar (simulation)
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Intervient à Dakar Plateau, Médina, Fann, et environs
              </p>
            </div>

            {/* Signaler */}
            <div className="mt-6 text-center">
              <button className="text-sm text-gray-500 hover:text-red-500 transition">
                ⚠️ Signaler un problème avec ce service
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}