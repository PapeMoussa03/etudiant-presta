"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    motDePasse: "",
    confirmerMotDePasse: "",
    role: "prestataire", // ou "client"
    ecole: "",
    niveau: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici on enverra les données à l'API plus tard
    console.log("Inscription:", formData);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* En-tête */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Créer un compte
            </h1>
            <p className="text-gray-600">
              Rejoignez la communauté des étudiants prestataires
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Type de compte */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Je souhaite :
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="prestataire"
                    checked={formData.role === "prestataire"}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#003366] focus:ring-[#003366] border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Offrir mes services (prestataire)
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="client"
                    checked={formData.role === "client"}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#003366] focus:ring-[#003366] border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Chercher des services (client)
                  </span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Prénom */}
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition"
                  placeholder="Votre prénom"
                  required
                />
              </div>

              {/* Nom */}
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition"
                  placeholder="Votre nom"
                  required
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email académique
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition"
                  placeholder="prenom.nom@esp.sn"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Utilisez votre email universitaire (.sn, .edu.sn) pour être vérifié
                </p>
              </div>

              {/* Téléphone */}
              <div className="md:col-span-2">
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition"
                  placeholder="77 123 45 67"
                  required
                />
              </div>

              {/* École */}
              <div>
                <label htmlFor="ecole" className="block text-sm font-medium text-gray-700 mb-2">
                  École / Université
                </label>
                <select
                  id="ecole"
                  value={formData.ecole}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition bg-white"
                  required
                >
                  <option value="">Sélectionnez</option>
                  <option value="ESP">ESP - École Supérieure Polytechnique</option>
                  <option value="UCAD">UCAD - Université Cheikh Anta Diop</option>
                  <option value="ISM">ISM - Institut Supérieur de Management</option>
                  <option value="ESMT">ESMT - École Supérieure Multinationale des Télécommunications</option>
                  <option value="autre">Autre établissement</option>
                </select>
              </div>

              {/* Niveau */}
              <div>
                <label htmlFor="niveau" className="block text-sm font-medium text-gray-700 mb-2">
                  Niveau d'études
                </label>
                <select
                  id="niveau"
                  value={formData.niveau}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition bg-white"
                  required
                >
                  <option value="">Sélectionnez</option>
                  <option value="L1">Licence 1</option>
                  <option value="L2">Licence 2</option>
                  <option value="L3">Licence 3</option>
                  <option value="M1">Master 1</option>
                  <option value="M2">Master 2</option>
                  <option value="Doctorat">Doctorat</option>
                </select>
              </div>

              {/* Mot de passe */}
              <div>
                <label htmlFor="motDePasse" className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="motDePasse"
                  value={formData.motDePasse}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Confirmer mot de passe */}
              <div>
                <label htmlFor="confirmerMotDePasse" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="confirmerMotDePasse"
                  value={formData.confirmerMotDePasse}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Conditions */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="conditions"
                  className="h-4 w-4 text-[#003366] focus:ring-[#003366] border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="conditions" className="text-gray-600">
                  J'accepte les{" "}
                  <Link href="/conditions" className="text-[#003366] hover:text-[#002244] hover:underline">
                    conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link href="/confidentialite" className="text-[#003366] hover:text-[#002244] hover:underline">
                    politique de confidentialité
                  </Link>
                </label>
              </div>
            </div>

            {/* Bouton */}
            <button
              type="submit"
              className="w-full bg-[#003366] text-white py-3 px-4 rounded-lg hover:bg-[#002244] transition font-medium text-lg"
            >
              Créer mon compte
            </button>
          </form>

          {/* Lien connexion */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Déjà inscrit ?{" "}
            <Link href="/login" className="text-[#003366] font-semibold hover:text-[#002244] hover:underline">
              Connectez-vous
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
