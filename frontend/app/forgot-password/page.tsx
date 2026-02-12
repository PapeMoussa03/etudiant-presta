"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simuler l'envoi
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* En-tête */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Mot de passe oublié ?
            </h1>
            <p className="text-gray-600">
              {!submitted 
                ? "Saisissez votre email académique pour recevoir un lien de réinitialisation"
                : "Vérifiez votre boîte de réception"
              }
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email académique
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition"
                  placeholder="exemple@esp.sn"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Utilisez votre email universitaire (.sn, .edu.sn)
                </p>
              </div>

              {/* Bouton */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#003366] text-white py-3 px-4 rounded-lg hover:bg-[#002244] transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer le lien"
                )}
              </button>

              {/* Lien retour */}
              <p className="text-center text-sm text-gray-600">
                <Link href="/login" className="text-[#003366] hover:text-[#002244] hover:underline">
                  ← Retour à la connexion
                </Link>
              </p>
            </form>
          ) : (
            <div className="text-center space-y-6">
              {/* Icône succès */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              <div>
                <p className="text-gray-800 font-medium mb-2">
                  Email envoyé à {email}
                </p>
                <p className="text-sm text-gray-600">
                  Cliquez sur le lien dans l'email pour réinitialiser votre mot de passe.
                  Si vous ne voyez pas l'email, vérifiez vos spams.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/login"
                  className="text-[#003366] font-semibold hover:text-[#002244] hover:underline"
                >
                  Retour à la connexion
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}