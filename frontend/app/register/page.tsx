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
    role: "prestataire",
    ecole: "",
    niveau: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // États pour les champs "Autre"
  const [autreEcole, setAutreEcole] = useState("");
  const [showAutreEcole, setShowAutreEcole] = useState(false);
  const [autreNiveau, setAutreNiveau] = useState("");
  const [showAutreNiveau, setShowAutreNiveau] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleEcoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    handleChange(e);
    setShowAutreEcole(value === "autre");
    if (value !== "autre") {
      setAutreEcole("");
    }
  };

  const handleAutreEcoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutreEcole(e.target.value);
    setFormData({
      ...formData,
      ecole: e.target.value
    });
  };

  const handleNiveauChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    handleChange(e);
    setShowAutreNiveau(value === "autre");
    if (value !== "autre") {
      setAutreNiveau("");
    }
  };

  const handleAutreNiveauChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutreNiveau(e.target.value);
    setFormData({
      ...formData,
      niveau: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🔵 FORMULAIRE SOUMIS !");
    console.log("📦 État actuel du formulaire:", formData);
    
    setLoading(true);
    setErrorMessage("");
    
    // Vérification que les mots de passe correspondent
    if (formData.motDePasse !== formData.confirmerMotDePasse) {
      console.log("🔴 Erreur: mots de passe différents");
      setErrorMessage("❌ Les mots de passe ne correspondent pas");
      setLoading(false);
      return;
    }

    // Vérification des champs obligatoires
    if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone) {
      console.log("🔴 Erreur: champs obligatoires manquants");
      setErrorMessage("❌ Veuillez remplir tous les champs obligatoires");
      setLoading(false);
      return;
    }

    // Vérification de l'école
    if (!formData.ecole) {
      console.log("🔴 Erreur: école manquante");
      setErrorMessage("❌ Veuillez sélectionner ou saisir votre école");
      setLoading(false);
      return;
    }

    // Vérification du niveau
    if (!formData.niveau) {
      console.log("🔴 Erreur: niveau manquant");
      setErrorMessage("❌ Veuillez sélectionner ou saisir votre niveau");
      setLoading(false);
      return;
    }

    // Préparation des données pour l'API
    const apiData = {
      email: formData.email,
      password: formData.motDePasse,
      password2: formData.confirmerMotDePasse,
      first_name: formData.prenom,
      last_name: formData.nom,
      phone: formData.telephone,
      role: formData.role,
      school: formData.ecole,
      level: formData.niveau,
    };

    console.log("📤 Données envoyées à l'API:", apiData);

    try {
      console.log("🟡 Envoi de la requête à Django...");
      console.log("🌐 URL: http://127.0.0.1:8000/api/auth/register/");
      
      const response = await fetch('http://127.0.0.1:8000/api/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });

      console.log("🟢 Réponse reçue !");
      console.log("📊 Status:", response.status);
      console.log("📊 Status text:", response.statusText);
      
      const data = await response.json();
      console.log("📦 Données reçues de l'API:", data);

      if (response.ok) {
        console.log("✅ INSCRIPTION RÉUSSIE !");
        console.log("👤 Utilisateur créé:", data.user);
        
        // Stocker les tokens
        localStorage.setItem('access_token', data.tokens.access);
        localStorage.setItem('refresh_token', data.tokens.refresh);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        alert(`✅ Félicitations ${data.user.first_name} ! Votre compte a été créé avec succès !`);
        
        // Redirection selon le rôle
        if (data.user.role === "prestataire") {
          console.log("➡️ Redirection vers dashboard prestataire");
          window.location.href = "/dashboard/prestataire";
        } else {
          console.log("➡️ Redirection vers dashboard client");
          window.location.href = "/dashboard/client";
        }
      } else {
        console.log("🔴 ERREUR API - Status:", response.status);
        console.log("🔴 Détails de l'erreur:", data);
        
        // Gérer les erreurs de validation Django
        if (typeof data === 'object') {
          const errors = [];
          for (const key in data) {
            if (Array.isArray(data[key])) {
              errors.push(`${key}: ${data[key].join(', ')}`);
            } else {
              errors.push(`${key}: ${data[key]}`);
            }
          }
          setErrorMessage(`❌ ${errors.join('\n')}`);
        } else {
          setErrorMessage(`❌ ${data.error || "Erreur lors de l'inscription"}`);
        }
      }
    } catch (error) {
      console.log("🔴 ERREUR CATASTROPHIQUE:");
      console.log(error);
      setErrorMessage(`❌ Erreur de connexion au serveur. Vérifie que Django est lancé sur http://127.0.0.1:8000 et que le serveur est accessible.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {/* En-tête */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Créer un compte
            </h1>
            <p className="text-lg text-gray-600">
              Rejoignez la communauté des étudiants prestataires
            </p>
          </div>

          {/* Message d'erreur */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 whitespace-pre-line">
              {errorMessage}
            </div>
          )}

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Type de compte */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Je souhaite : <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center p-4 bg-white rounded-lg border-2 border-transparent has-[:checked]:border-[#003366] cursor-pointer flex-1 hover:bg-gray-50 transition">
                  <input
                    type="radio"
                    id="role"
                    name="role"
                    value="prestataire"
                    checked={formData.role === "prestataire"}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#003366] focus:ring-[#003366] border-gray-300"
                  />
                  <span className="ml-3 text-gray-700 font-medium">
                    Offrir mes services
                    <span className="block text-sm text-gray-500 font-normal">(prestataire)</span>
                  </span>
                </label>
                <label className="flex items-center p-4 bg-white rounded-lg border-2 border-transparent has-[:checked]:border-[#003366] cursor-pointer flex-1 hover:bg-gray-50 transition">
                  <input
                    type="radio"
                    id="role"
                    name="role"
                    value="client"
                    checked={formData.role === "client"}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#003366] focus:ring-[#003366] border-gray-300"
                  />
                  <span className="ml-3 text-gray-700 font-medium">
                    Chercher des services
                    <span className="block text-sm text-gray-500 font-normal">(client)</span>
                  </span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Prénom */}
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom <span className="text-red-500">*</span>
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
                  Nom <span className="text-red-500">*</span>
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
                  Email académique <span className="text-red-500">*</span>
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
                  Numéro de téléphone <span className="text-red-500">*</span>
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

              {/* École / Université */}
              <div className="md:col-span-2">
                <label htmlFor="ecole" className="block text-sm font-medium text-gray-700 mb-2">
                  École / Université <span className="text-red-500">*</span>
                </label>
                <select
                  id="ecole"
                  value={showAutreEcole ? "autre" : formData.ecole}
                  onChange={handleEcoleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition bg-white"
                  required
                >
                  <option value="">Sélectionnez votre établissement</option>
                  <option value="ESP">ESP - École Supérieure Polytechnique</option>
                  <option value="UCAD">UCAD - Université Cheikh Anta Diop</option>
                  <option value="ISM">ISM - Institut Supérieur de Management</option>
                  <option value="ESMT">ESMT - École Supérieure Multinationale des Télécommunications</option>
                  <option value="UGB">UGB - Université Gaston Berger</option>
                  <option value="UT">UT - Université de Thiès</option>
                  <option value="UADB">UADB - Université Alioune Diop de Bambey</option>
                  <option value="UASZ">UASZ - Université Assane Seck de Ziguinchor</option>
                  <option value="EPT">EPT - École Polytechnique de Thiès</option>
                  <option value="INSEPS">INSEPS - Institut National Supérieur de l'Éducation Populaire et du Sport</option>
                  <option value="EBAD">EBAD - École de Bibliothécaires, Archivistes et Documentalistes</option>
                  <option value="autre">Autre établissement (à préciser)</option>
                </select>
                
                {/* Champ pour "Autre établissement" */}
                {showAutreEcole && (
                  <div className="mt-3">
                    <input
                      type="text"
                      id="autreEcole"
                      value={autreEcole}
                      onChange={handleAutreEcoleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition"
                      placeholder="Nom de votre établissement"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Entrez le nom complet de votre école ou université
                    </p>
                  </div>
                )}
              </div>

              {/* Niveau d'études */}
              <div className="md:col-span-2">
                <label htmlFor="niveau" className="block text-sm font-medium text-gray-700 mb-2">
                  Niveau d'études <span className="text-red-500">*</span>
                </label>
                <select
                  id="niveau"
                  value={showAutreNiveau ? "autre" : formData.niveau}
                  onChange={handleNiveauChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition bg-white"
                  required
                >
                  <option value="">Sélectionnez votre niveau</option>
                  <option value="L1">Licence 1</option>
                  <option value="L2">Licence 2</option>
                  <option value="L3">Licence 3</option>
                  <option value="M1">Master 1</option>
                  <option value="M2">Master 2</option>
                  <option value="Doctorat">Doctorat</option>
                  <option value="autre">Autre (à préciser)</option>
                </select>
                
                {/* Champ pour "Autre niveau" */}
                {showAutreNiveau && (
                  <div className="mt-3">
                    <input
                      type="text"
                      id="autreNiveau"
                      value={autreNiveau}
                      onChange={handleAutreNiveauChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition"
                      placeholder="Précisez votre niveau"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Mot de passe */}
              <div>
                <label htmlFor="motDePasse" className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe <span className="text-red-500">*</span>
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
                  Confirmer le mot de passe <span className="text-red-500">*</span>
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
                  <Link href="/conditions" className="text-[#003366] font-semibold hover:text-[#002244] hover:underline">
                    conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link href="/confidentialite" className="text-[#003366] font-semibold hover:text-[#002244] hover:underline">
                    politique de confidentialité
                  </Link>{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            {/* Bouton */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#003366] text-white py-4 px-6 rounded-lg hover:bg-[#002244] transition-all duration-200 font-semibold text-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Création en cours...
                </>
              ) : (
                "Créer mon compte"
              )}
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