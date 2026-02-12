"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState("1");
  const [newMessage, setNewMessage] = useState("");

  // Données fictives des conversations
  const conversations = [
    {
      id: "1",
      avec: {
        id: 1,
        nom: "Amadou Diallo",
        photo: "AD",
        role: "Prestataire",
        specialite: "Mathématiques",
        enLigne: true
      },
      dernierMessage: {
        contenu: "Bonjour, je suis disponible ce soir pour le cours de maths",
        date: "10:23",
        lu: false,
        envoyeur: "lui"
      },
      messages: [
        {
          id: 1,
          envoyeur: "moi",
          contenu: "Bonjour Amadou, je souhaiterais réserver un cours de maths pour ce weekend",
          date: "09:45",
          lu: true
        },
        {
          id: 2,
          envoyeur: "lui",
          contenu: "Bonjour ! Oui bien sûr, je suis disponible samedi après-midi. Quel niveau ?",
          date: "09:52",
          lu: true
        },
        {
          id: 3,
          envoyeur: "moi",
          contenu: "Je suis en L2, j'aimerais travailler les intégrales",
          date: "10:05",
          lu: true
        },
        {
          id: 4,
          envoyeur: "lui",
          contenu: "Parfait, je maîtrise bien ce chapitre. Je vous propose samedi à 15h ?",
          date: "10:23",
          lu: false
        }
      ]
    },
    {
      id: "2",
      avec: {
        id: 2,
        nom: "Awa Ndiaye",
        photo: "AN",
        role: "Prestataire",
        specialite: "Développement web",
        enLigne: false
      },
      dernierMessage: {
        contenu: "Merci pour le paiement ! Je commence le travail demain",
        date: "Hier",
        lu: true,
        envoyeur: "lui"
      },
      messages: [
        {
          id: 1,
          envoyeur: "moi",
          contenu: "Bonjour Awa, j'ai besoin d'un site vitrine pour mon entreprise",
          date: "Hier",
          lu: true
        },
        {
          id: 2,
          envoyeur: "lui",
          contenu: "Bonjour ! Avec plaisir. Quel est votre budget approximatif ?",
          date: "Hier",
          lu: true
        },
        {
          id: 3,
          envoyeur: "moi",
          contenu: "Autour de 50 000 FCFA",
          date: "Hier",
          lu: true
        },
        {
          id: 4,
          envoyeur: "lui",
          contenu: "Parfait, je vous envoie un devis dans la journée",
          date: "Hier",
          lu: true
        },
        {
          id: 5,
          envoyeur: "lui",
          contenu: "Merci pour le paiement ! Je commence le travail demain",
          date: "Hier",
          lu: true
        }
      ]
    },
    {
      id: "3",
      avec: {
        id: 3,
        nom: "Ibrahima Fall",
        photo: "IF",
        role: "Prestataire",
        specialite: "Dépannage PC",
        enLigne: true
      },
      dernierMessage: {
        contenu: "Je passe chez vous à 17h pour le dépannage",
        date: "Lun",
        lu: true,
        envoyeur: "lui"
      },
      messages: []
    },
    {
      id: "4",
      avec: {
        id: 4,
        nom: "Fatou Diop",
        photo: "FD",
        role: "Client",
        specialite: "Client",
        enLigne: false
      },
      dernierMessage: {
        contenu: "Merci beaucoup pour le cours, j'ai tout compris !",
        date: "Dim",
        lu: true,
        envoyeur: "lui"
      },
      messages: []
    }
  ];

  const conversationActive = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Simuler l'envoi du message
      alert(`Message envoyé: ${newMessage}`);
      setNewMessage("");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex h-[calc(100vh-12rem)]">
            {/* Liste des conversations */}
            <div className="w-full md:w-1/3 border-r border-gray-200 bg-gray-50">
              {/* En-tête */}
              <div className="p-6 border-b border-gray-200 bg-white">
                <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
                <p className="text-sm text-gray-600 mt-1">
                  {conversations.filter(c => c.dernierMessage && !c.dernierMessage.lu).length} messages non lus
                </p>
              </div>

              {/* Barre de recherche */}
              <div className="p-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher une conversation..."
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition bg-white"
                  />
                  <span className="absolute left-3 top-3 text-gray-400">🔍</span>
                </div>
              </div>

              {/* Liste */}
              <div className="overflow-y-auto h-[calc(100%-8rem)]">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`w-full p-4 flex items-start gap-3 hover:bg-white transition border-b border-gray-200 text-left ${
                      selectedConversation === conv.id ? 'bg-white border-l-4 border-l-[#003366]' : ''
                    }`}
                  >
                    {/* Avatar avec statut */}
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        conv.avec.role === 'Prestataire' 
                          ? 'bg-gradient-to-br from-[#003366] to-[#002244]' 
                          : 'bg-gradient-to-br from-[#FF6B35] to-[#e55a2a]'
                      }`}>
                        {conv.avec.photo}
                      </div>
                      {conv.avec.enLigne && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                      )}
                    </div>

                    {/* Infos conversation */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {conv.avec.nom}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {conv.dernierMessage?.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {conv.dernierMessage?.envoyeur === 'moi' ? 'Vous: ' : ''}
                        {conv.dernierMessage?.contenu}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
                          {conv.avec.role}
                        </span>
                        {conv.avec.specialite !== conv.avec.role && (
                          <span className="text-xs px-2 py-0.5 bg-[#e6f0ff] rounded-full text-[#003366]">
                            {conv.avec.specialite}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Indicateur non lu */}
                    {conv.dernierMessage && !conv.dernierMessage.lu && (
                      <span className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Zone de conversation */}
            {conversationActive ? (
              <div className="hidden md:flex md:w-2/3 flex-col bg-white">
                {/* En-tête conversation */}
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        conversationActive.avec.role === 'Prestataire' 
                          ? 'bg-gradient-to-br from-[#003366] to-[#002244]' 
                          : 'bg-gradient-to-br from-[#FF6B35] to-[#e55a2a]'
                      }`}>
                        {conversationActive.avec.photo}
                      </div>
                      {conversationActive.avec.enLigne && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                      )}
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-900">
                        {conversationActive.avec.nom}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-600">
                          {conversationActive.avec.role}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-600">
                          {conversationActive.avec.specialite}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className={`text-xs ${
                          conversationActive.avec.enLigne 
                            ? 'text-green-600' 
                            : 'text-gray-500'
                        }`}>
                          {conversationActive.avec.enLigne ? 'En ligne' : 'Hors ligne'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link 
                      href={`/prestataire/${conversationActive.avec.id}`}
                      className="text-gray-500 hover:text-[#003366] transition"
                    >
                      👤 Profil
                    </Link>
                    <button className="text-gray-500 hover:text-[#003366] transition">
                      📞 Appel
                    </button>
                    <button className="text-gray-500 hover:text-[#003366] transition">
                      ⚡ Vidéo
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                  {conversationActive.messages.length > 0 ? (
                    conversationActive.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.envoyeur === 'moi' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.envoyeur !== 'moi' && (
                          <div className="w-8 h-8 rounded-full bg-[#003366] flex items-center justify-center text-white text-xs font-bold mr-2 mt-1">
                            {conversationActive.avec.photo}
                          </div>
                        )}
                        <div
                          className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                            message.envoyeur === 'moi'
                              ? 'bg-[#003366] text-white rounded-br-none'
                              : 'bg-white text-gray-900 shadow-sm rounded-bl-none'
                          }`}
                        >
                          <p className="text-sm">{message.contenu}</p>
                          <p className={`text-xs mt-1 ${
                            message.envoyeur === 'moi' 
                              ? 'text-white/70' 
                              : 'text-gray-500'
                          }`}>
                            {message.date}
                            {message.envoyeur === 'moi' && (
                              <span className="ml-2">
                                {message.lu ? '✓✓' : '✓'}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <p className="text-5xl mb-4">💬</p>
                        <p className="font-medium">Aucun message pour le moment</p>
                        <p className="text-sm mt-2">Envoyez votre premier message !</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Zone de saisie */}
                <div className="p-6 border-t border-gray-200 bg-white">
                  <form onSubmit={handleSendMessage} className="flex gap-4">
                    <button
                      type="button"
                      className="text-gray-500 hover:text-[#003366] transition"
                    >
                      📎
                    </button>
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Écrivez votre message..."
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-[#003366] outline-none transition"
                    />
                    <button
                      type="submit"
                      className="bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#002244] transition font-medium flex items-center gap-2"
                    >
                      <span>Envoyer</span>
                      <span>→</span>
                    </button>
                  </form>
                  <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                    <span>📱 Messenger</span>
                    <span>•</span>
                    <span>🔒 Chiffré</span>
                    <span>•</span>
                    <span>⚡ Réponse typique: &lt; 2h</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex md:w-2/3 bg-white items-center justify-center text-gray-500">
                <div className="text-center">
                  <p className="text-6xl mb-4">💬</p>
                  <p className="text-xl font-medium text-gray-900">Aucune conversation sélectionnée</p>
                  <p className="mt-2">Choisissez une conversation pour commencer à discuter</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}