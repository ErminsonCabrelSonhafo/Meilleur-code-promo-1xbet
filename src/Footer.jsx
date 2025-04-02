import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaTelegram,
  FaChevronRight,
  FaGift,
  FaExclamationTriangle,
} from "react-icons/fa";
const Footer = () => {
  // Données des codes promo
  const promoCodeData = {
    mainCode: "KY800",
    yearDisplay: "2025",
    mainBonus: "130 €/$",
    casinoBonus: "1950 €/$ +150 tours gratuits",
  };
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-6 border-t border-gray-800 justify-content-center">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section principale du footer avec grille responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Colonne 1: À propos et code promo */}
          <div
            className="col-span-1 md:col-span-1 lg:col-span-1"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                À Propos de 1xBet
              </h3>
              <p className="text-gray-300 mb-4">
                Découvrez la meilleure plateforme de paris sportifs et de jeux
                de casino en ligne.
              </p>
              <div
                className="mt-6 bg-gradient-to-r from-blue-900 to-blue-800 p-4 rounded-lg border border-blue-700 shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <p className="text-white font-bold mb-2">
                  Obtenez votre bonus exclusif!
                </p>
                <p className="text-blue-300 mb-3">
                  Utilisez notre code promo pour recevoir jusqu'à{" "}
                  {`${promoCodeData.mainBonus}`} de bonus
                </p>
                <div className="flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-2 px-4 rounded-md shadow-md hover:from-red-700 hover:to-red-900 transition-all duration-300">
                  <span className="mr-2">
                    <FaGift className="inline" />
                  </span>
                  <span>{`${promoCodeData.mainCode}`}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 2: Contactez-nous */}
          <div
            className="col-span-1 md:col-span-1 lg:col-span-1"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Contactez-nous
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li
                className="flex items-center"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <FaPhoneAlt className="mr-2 text-teal-400" />
                <a
                  href="tel:+672782236"
                  className="hover:text-blue-300 transition-colors"
                >
                  +237 6 72 78 22 36
                </a>
              </li>
              <li
                className="flex items-center"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <FaWhatsapp className="mr-2 text-green-400" />
                <a
                  href="https://wa.me/672782236"
                  className="hover:text-blue-300 transition-colors"
                >
                  +237 6 72 78 22 36
                </a>
              </li>
              <li
                className="flex items-center"
                data-aos="fade-right"
                data-aos-delay="250"
              >
                <FaEnvelope className="mr-2 text-blue-400" />
                <a
                  href="mailto:tchoffoivan5@gmail.com"
                  className="hover:text-blue-300 transition-colors"
                >
                  tchoffoivan5@gmail.com
                </a>
              </li>
              <li
                className="flex items-center"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <FaTelegram className="mr-2 text-blue-500" />
                <a
                  href="https://t.me/+hHgTUEdOgl9lNTg0"
                  className="hover:text-blue-300 transition-colors"
                >
                  Canal Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Liens Rapides */}
          <div
            className="col-span-1 md:col-span-1 lg:col-span-1"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Liens Rapides
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li data-aos="fade-left" data-aos-delay="150">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-300 transition-colors"
                >
                  <FaChevronRight className="mr-2 text-xs text-teal-400" />{" "}
                  Comment s'inscrire
                </a>
              </li>
              <li data-aos="fade-left" data-aos-delay="200">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-300 transition-colors"
                >
                  <FaChevronRight className="mr-2 text-xs text-teal-400" />{" "}
                  Bonus de bienvenue
                </a>
              </li>
              <li data-aos="fade-left" data-aos-delay="250">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-300 transition-colors"
                >
                  <FaChevronRight className="mr-2 text-xs text-teal-400" />{" "}
                  Paris sportifs
                </a>
              </li>
              <li data-aos="fade-left" data-aos-delay="300">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-300 transition-colors"
                >
                  <FaChevronRight className="mr-2 text-xs text-teal-400" />{" "}
                  Casino en ligne
                </a>
              </li>
              <li data-aos="fade-left" data-aos-delay="350">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-300 transition-colors"
                >
                  <FaChevronRight className="mr-2 text-xs text-teal-400" />{" "}
                  Méthodes de paiement
                </a>
              </li>
              <li data-aos="fade-left" data-aos-delay="400">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-300 transition-colors"
                >
                  <FaChevronRight className="mr-2 text-xs text-teal-400" /> FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Avertissement de jeu responsable */}
        <div
          className="bg-gradient-to-r from-yellow-900 to-amber-900 p-4 rounded-lg border-l-4 border-yellow-600 mb-6"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="flex items-start">
            <FaExclamationTriangle className="text-yellow-400 text-xl mr-3 mt-1" />
            <div>
              <h4 className="font-bold text-yellow-400 mb-1">
                Jouez responsable
              </h4>
              <p className="text-gray-200 text-sm">
                Le jeu doit rester un divertissement. Ne jouez pas avec de
                l'argent que vous ne pouvez pas vous permettre de perdre
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center text-gray-500 text-sm pt-4 border-t border-gray-800"
          data-aos="fade-up"
        >
          <p>
            © {new Date().getFullYear()} 1xBet Code Promo. Tous droits réservés.
          </p>
          <div className="flex justify-center mt-2 space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-400 transition-colors"
            >
              Politique de confidentialité
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-400 transition-colors"
            >
              Conditions générales
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-400 transition-colors"
            >
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
