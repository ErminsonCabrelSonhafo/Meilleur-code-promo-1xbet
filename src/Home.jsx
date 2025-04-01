import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Données des codes promo
const promoCodeData = {
  mainCode: "1XWAP200",
  yearDisplay: "2025",
  mainBonus: "130 €/$",
  casinoBonus: "1950 €/$ +150 tours gratuits",
};

// Données des pays et bonus
const countryBonusData = [
  {
    country: "1xBet RD Congo",
    bonus: "100% jusqu'à 260,000 CDF",
    code: promoCodeData.mainCode,
  },
  {
    country: "1xBet Burkina Faso",
    bonus: "100% jusqu'à 78,000 XOF",
    code: promoCodeData.mainCode,
  },
  {
    country: "1xBet Côte d'Ivoire",
    bonus: "100% jusqu'à 156,000 XOF",
    code: promoCodeData.mainCode,
  },
  {
    country: "1xBet Cameroun",
    bonus: "100% jusqu'à 260,000 XAF",
    code: promoCodeData.mainCode,
  },
  {
    country: "1xBet Bénin",
    bonus: "100% jusqu'à 169,000 XOF",
    code: promoCodeData.mainCode,
  },
  {
    country: "1xBet Sénégal",
    bonus: "100% jusqu'à 78,000 XOF",
    code: promoCodeData.mainCode,
  },
  {
    country: "1xBet Afrique",
    bonus: `100% jusqu'à ${promoCodeData.mainBonus}`,
    code: promoCodeData.mainCode,
  },
  {
    country: "1xBet Maroc",
    bonus: "100% jusqu'à 970 MAD",
    code: promoCodeData.mainCode,
  },
  {
    country: "1xBet Togo",
    bonus: "100% jusqu'à 165,000 XOF",
    code: promoCodeData.mainCode,
  },
];

// Conditions d'utilisation du code promo
const promoCodeConditions = [
  "l'offre n'est valable que sous certaines conditions;",
  "le code doit être à jour;",
  "vous ne pouvez utiliser le code promotionnel 1xBet qu'une seule fois;",
  "les bonus et autres préférences fournis par le code ne sont disponibles que pour le joueur qui a utilisé le code promotionnel.",
];

// Étapes d'utilisation du code promo
const promoCodeUsageSteps = [
  "Allez sur le site du bookmaker et inscrivez-vous;",
  `Après avoir rempli le questionnaire, entrez le code promo 1xBet: ${promoCodeData.mainCode};`,
  "Décidez du type de bonus de bienvenue, pour un bookmaker ou pour un casino;",
  "Confirmez l'inscription par e-mail ou numéro de téléphone portable;",
  `Effectuez votre premier dépôt pour n'importe quel montant et obtenez un bonus de bienvenue de ${promoCodeData.mainBonus}.`,
];

// Étapes pour obtenir le bonus casino
const casinoBonusSteps = [
  "Complétez l'inscription complète au Casino 1xBet. Vérifier;",
  "Choisissez un bonus de bienvenue pour le casino;",
  `Entrez le code Bonus 1xBet lors de l'inscription: ${promoCodeData.mainCode};`,
  "Effectuez le premier dépôt d'un montant d'au moins 10€/$.",
  "Obtenez Un Bonus De Bienvenue Au Casino 1xBet Gratuitement!",
];

// Avantages de 1xBet
const advantages = [
  "des cotes élevées, quel que soit le niveau de l'événement sportif",
  "petite marge, à la fois en prematch et en Live",
  "présentation pratique de l'information, disponibilité de statistiques fraîches",
  "le volume énorme de la ligne, qui comprend des événements dans une variété de sports",
  "une peinture large qui comprend un grand nombre de marchés",
  "un support technique compétent et adéquat pour les clients",
  "calcul rapide des Paris, remboursement des Paris lors de l'annulation",
  "recharge pratique et rapide, paiements rapides sans commissions",
];

// Options de support 1xBet
const supportOptions = [
  "Clavardage.",
  "E-mail.",
  "WhatsApp.",
  "Viber.",
  'Formulaire de commentaires sur le site, situé dans la section "Contacts".',
];

// Composant pour afficher le code promo avec animation
const PromoCodeDisplay = ({ code }) => (
  <span className="bg-yellow-200 px-2 py-1 font-bold rounded text-red-600 inline-block transform transition-transform hover:scale-110">
    {code}
  </span>
);

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-8" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
            Code Promo 1xBet {promoCodeData.yearDisplay} ⇒ Bonus VIP jusqu'à{" "}
            {promoCodeData.mainBonus}
          </h1>
        </header>

        <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-6 mb-8">
          <div className="prose max-w-none text-gray-200">
            <p className="mb-4 text-lg text-blue-300" data-aos="fade-up">
              Code promo 1xBet gratuit du jour {promoCodeData.yearDisplay}: ☆{" "}
              <PromoCodeDisplay code={promoCodeData.mainCode} /> ☆, utilisez le
              code lors de votre inscription et recevez un bonus de bienvenue
              100% VIP pour {promoCodeData.yearDisplay} jusqu'à{" "}
              {promoCodeData.mainBonus} sur les paris sportifs ou{" "}
              {promoCodeData.casinoBonus} sur les machines à sous.
            </p>

            <p className="mb-6" data-aos="fade-up" data-aos-delay="100">
              L'inscription est autorisée pour les personnes ayant atteint l'âge
              de 18 ans et résidant dans des pays où l'activité du bookmaker
              n'est pas limitée au niveau législatif. La promotion est valable
              pour les nouveaux joueurs ayant saisi un code promo lors de
              l'inscription. De plus, le bookmaker est souvent prêt à offrir de
              tels avantages, en utilisant des codes promotionnels et d'autres
              offres intéressantes à ces fins.
            </p>

            <div data-aos="fade-up" data-aos-delay="150">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent my-6">
                Code Promo 1xBet
              </h1>
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-900 to-blue-800 py-3 rounded-lg mb-4 border border-blue-700">
                <span className="text-red-400 px-2">
                  {promoCodeData.mainCode}
                </span>
              </h2>
            </div>

            <p
              className="font-medium text-lg mb-4 text-teal-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Promotion 1xBet {promoCodeData.yearDisplay} : codes promo et codes
              bonus exclusifs.
            </p>

            <p className="mb-6" data-aos="fade-up" data-aos-delay="250">
              Le code promo 1xBet {promoCodeData.yearDisplay}:{" "}
              <PromoCodeDisplay code={promoCodeData.mainCode} />. Utilisez le
              code bonus pour obtenir un bonus VIP de 100% jusqu'à
              {promoCodeData.mainBonus} pour les paris sportifs, ainsi qu'un
              bonus de casino de {promoCodeData.casinoBonus}.
            </p>

            <p className="mb-4" data-aos="fade-up" data-aos-delay="300">
              La chose la plus intéressante est que le joueur ne paie rien pour
              l'utilisation du code bonus. La tâche du client est de trouver le
              code actuel et de l'utiliser aux fins prévues à temps. C'est ça!
              Si toutes les conditions sont remplies, en récompense, le
              bookmaker offre aux joueurs des bonus ou des préférences
              supplémentaires. Il y a plusieurs nuances qui doivent être prises
              en compte lors de l'utilisation de codes promotionnels:
            </p>

            <ul
              className="list-disc pl-6 mb-6 space-y-2 text-gray-300"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              {promoCodeConditions.map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>

            <div
              className="flex justify-center my-8"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img
                className="rounded-lg shadow-xl border border-gray-700 max-w-full h-auto"
                src="https://files.fm/thumb_show.php?i=v4sz6u78ka"
                alt="Code Promo 1xBet"
              />
            </div>

            <h2
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mt-8 mb-4"
              data-aos="fade-up"
            >
              Comment utiliser le Code promo 1xBet
            </h2>

            <p className="mb-4" data-aos="fade-up" data-aos-delay="100">
              Copiez le Code Promo 1xBet:{" "}
              <PromoCodeDisplay code={promoCodeData.mainCode} /> et précisez-le
              dans la colonne lors de l'enregistrement d'un compte, c'est lui
              qui active le bonus de bienvenue de {promoCodeData.mainBonus}.
            </p>

            <p className="mb-6" data-aos="fade-up" data-aos-delay="150">
              Pour que le code promotionnel 1xBet apporte de réels avantages,
              vous devez procéder comme suit:
            </p>

            <ul
              className="list-disc pl-6 mb-6 space-y-2 text-gray-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {promoCodeUsageSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>

            <h2
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mt-8 mb-4"
              data-aos="fade-up"
            >
              Meilleur code promo 1xBet {promoCodeData.yearDisplay}
            </h2>

            <div
              className="overflow-x-auto mb-6 rounded-lg shadow-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <table className="min-w-full border border-gray-700 rounded-lg">
                <thead className="bg-gradient-to-r from-blue-800 to-teal-800 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Pays</th>
                    <th className="py-3 px-4 text-left">Bonus</th>
                    <th className="py-3 px-4 text-left">Code promo 1xBet</th>
                  </tr>
                </thead>
                <tbody>
                  {countryBonusData.map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                      } border-b border-gray-700 hover:bg-gray-700`}
                      data-aos="fade-right"
                      data-aos-delay={150 + index * 50}
                    >
                      <td className="py-2 px-4 border-r border-gray-700">
                        {item.country}
                      </td>
                      <td className="py-2 px-4 border-r border-gray-700">
                        {item.bonus}
                      </td>
                      <td className="py-2 px-4">
                        <PromoCodeDisplay code={item.code} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mt-8 mb-4"
              data-aos="fade-up"
            >
              Code Promo 1xBet Aujourd'hui
            </h2>

            <p className="mb-6" data-aos="fade-up" data-aos-delay="100">
              Le code promo 1xBet aujourd'hui:{" "}
              <PromoCodeDisplay code={promoCodeData.mainCode} />. Les nouveaux
              joueurs peuvent utiliser ce code lors de l'ouverture de votre
              compte pour obtenir un bonus allant jusqu'à
              {promoCodeData.mainBonus}.
            </p>

            <div
              className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-lg shadow-xl border border-blue-700 mb-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                Code Promo du Casino 1xBet
              </h2>

              <p className="mb-4">
                Code Bonus du Casino 1xBet:{" "}
                <PromoCodeDisplay code={promoCodeData.mainCode} /> - Vous pouvez
                également utiliser ce code bonus lors de votre inscription au
                casino 1xbet pour recevoir un bonus de bienvenue de{" "}
                {promoCodeData.casinoBonus.split("+")[0]} et{" "}
                {promoCodeData.casinoBonus.split("+")[1]}.
              </p>
            </div>

            <h2
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mt-8 mb-4"
              data-aos="fade-up"
            >
              Comment obtenir un Bonus 1xBet Casino
            </h2>

            <p className="mb-4" data-aos="fade-up" data-aos-delay="100">
              Le code promo 1xBet pour aujourd'hui {promoCodeData.yearDisplay}:{" "}
              <PromoCodeDisplay code={promoCodeData.mainCode} />. Lorsque vous
              vous inscrivez, utilisez-le et vous bénéficierez d'un bonus de
              bienvenue gratuit de {promoCodeData.mainBonus.split(" ")[0]}$.
            </p>

            <ol
              className="list-decimal pl-6 mb-6 space-y-2 text-gray-300"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {casinoBonusSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            <div
              className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-lg shadow-xl border border-blue-700 mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                1xBet Casino Bonus Sans Dépôt
              </h2>

              <p className="mb-4">
                Le code promo 1xbet (vérifié et valable en{" "}
                {promoCodeData.yearDisplay}) est :{" "}
                <PromoCodeDisplay code={promoCodeData.mainCode} />, vous pouvez
                bénéficier d'un bonus de bienvenue gratuit de 100% de l'offre
                VIP jusqu'à {promoCodeData.mainBonus.split(" ")[0]}€.
              </p>
            </div>

            <h3
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mt-8 mb-4"
              data-aos="fade-up"
            >
              Avantages et inconvénients de 1xBet
            </h3>

            <p className="mb-4" data-aos="fade-up" data-aos-delay="100">
              Code promo 1xBet:{" "}
              <PromoCodeDisplay code={promoCodeData.mainCode} />, activez-le
              lors de votre inscription en {promoCodeData.yearDisplay} et
              recevez jusqu'à
              {promoCodeData.mainBonus.split(" ")[0]}$ de bonus de bienvenue
              sous la forme de 100% du montant du premier dépôt.
            </p>

            <div
              className="grid md:grid-cols-2 gap-6 mb-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div
                className="bg-gradient-to-r from-green-900 to-teal-900 p-4 rounded-lg border border-green-700 shadow-xl"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h4 className="font-bold text-green-400 mb-2">Avantages</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  {advantages.map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                  ))}
                </ul>
              </div>

              <div
                className="bg-gradient-to-r from-red-900 to-red-800 p-4 rounded-lg border border-red-700 shadow-xl"
                data-aos="fade-left"
                data-aos-delay="250"
              >
                <h4 className="font-bold text-red-400 mb-2">Inconvénients</h4>
                <p>
                  Cependant, il y a un bookmaker et les inconvénients. Par
                  exemple, beaucoup de joueurs font attention à la légalité
                  limitée du bureau. Malgré la présence d'une licence
                  internationale de jeu d'un Régulateur faisant autorité, dans
                  de nombreux pays, le bookmaker 1xBet est interdit et son site
                  officiel est bloqué.
                </p>
              </div>
            </div>

            <h3
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mt-8 mb-4"
              data-aos="fade-up"
            >
              Conclusion
            </h3>

            <p className="mb-6" data-aos="fade-up" data-aos-delay="100">
              Le programme de bonus du casino 1xbet implique tout un ensemble de
              bonus avec lesquels les joueurs peuvent augmenter considérablement
              leurs chances de gagner. En plus des fonds qui sont fournis sur le
              compte bonus, les joueurs ont la possibilité d'obtenir des tours
              gratuits.
            </p>

            <h3
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mt-8 mb-4"
              data-aos="fade-up"
            >
              Soutien 1xBet
            </h3>

            <ol
              className="list-decimal pl-6 mb-6 space-y-2 text-gray-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {supportOptions.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ol>

            <div
              className="bg-gradient-to-r from-yellow-900 to-amber-800 p-6 rounded-lg border-l-4 border-yellow-600 shadow-xl mb-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                Attention! Avertissement!
              </h3>

              <p className="mb-2">
                18+ Conditions générales s'appliquent | begambleaware.org |
                gamestop.co.uk / Jouez de manière responsable / Le Guide du
                joueur.
              </p>

              <p>
                18+ Le jeu est interdit aux mineurs. Le jeu comporte des
                risques: endettement, dépendance.
              </p>
            </div>

            <p className="text-sm text-gray-400 mt-8" data-aos="fade-up">
              © Tous droits réservés. Le site est à titre informatif uniquement
              et aucune information publiée sur ce site ne constitue en aucun
              cas une offre publique définie par les dispositions du paragraphe
              de l'article du Code civil. Toutes ces conditions sont
              susceptibles d'être modifiées sans préavis.
            </p>

            <p
              className="text-sm text-gray-400 mt-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              En utilisant ce site Web, vous acceptez l'utilisation de cookies
              conformément à cet avis sur les cookies. Si vous n'acceptez pas
              notre utilisation de ce type de fichier, vous devez configurer les
              paramètres de votre navigateur en conséquence ou ne pas utiliser
              le site.
            </p>

            <div className="border-t border-gray-700 mt-6 pt-4">
              <p className="text-gray-400 text-center">
                ____________________________________________________________________
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
