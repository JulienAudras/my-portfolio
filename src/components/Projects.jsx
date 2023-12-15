import React from 'react'
import visualSense from '../images/visualSense.webp'
import alcl from "../images/alcl.webp"
import event from "../images/event.webp"
import ohMyFood from "../images/OhMyFood.webp"
import nina from "../images/Nina.webp"
import argentBank from "../images/ArgentBank.png"
import kasa from "../images/Kasa.webp"
import sophie from "../images/sophie.webp"
import github from "../images/github.png"


const Projects = () => {
  return (
    <section className="projectsSection">
      <h2 className="projectsSection__title sectionTitle">Portfolio</h2>

      <ul className="cards">
        <li className="cards_item">
          <div className="card" tabindex="0">
            <div className="card_image"><img src={visualSense} alt="visual sense" /></div>
            <div className="card_content">
              <h2 className="card_title">Visual Sense</h2>
              <div className="card_text">
                <p>Dans mon premier projet <strong>professionnel</strong>, je m'occupe d'enrichir la solution logicielle de l'entreprise en introduisant de nouvelles <strong>fonctionnalités</strong>. </p>
                <p>Dans le cadre de l'amélioration continue de notre solution logicielle, j'ai d'abord implémenté des <strong>fonctions de filtres </strong>, pour affiner et personnaliser l'expérience utilisateur. J'ai également révisé le processus de création de projet, permettant une <strong>navigation fluide</strong> entre les différentes étapes. En parallèle, je me suis concentré sur la correction de <strong>bugs</strong> et j'ai modifié le <strong>protocole d'identification</strong> de l'utilisateur. Finalement, j'ai enrichi la section profil avec la possibilité pour chaque utilisateur d'<strong>uploader son propre logo</strong>, offrant une personnalisation visuelle plus poussée.</p>
                <p className="upcharge">#React #Firebase #Firestore #Services</p>
              </div>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card" tabindex="0">
            <div className="card_image"><img src={alcl} alt="ALCL" /></div>
            <div className="card_content">
              <h2 className="card_title">ALCL &#x2022; Alpha</h2>
              <div className="card_text">
                <p>Débuté en parallèle de mes études, ce projet de longue haleine <strong>consiste à développer une solution complète</strong> de <strong>gestion de stocks</strong> et d'optimisation de la <strong>logistique</strong> pour une entreprise de 40 salariés. Cette tâche me permet de mettre en pratique mes compétences en développement, en m'attaquant à des problématiques concrètes de gestion et d'organisation des ressources.</p>
                <p>L'application, caractérisée par sa <strong>polyvalence</strong>, offre plusieurs rôles <strong>d'identification</strong>, adaptés à différents niveaux d'accès et de responsabilités au sein de l'entreprise. J'ai intégré <strong>AgGrid</strong> pour dynamiser les tableaux de stocks, rendant ainsi l'interface utilisateur plus interactive et efficace. Cette intégration a non seulement <strong>simplifié la gestion des stocks</strong>, mais permet également une <strong>visualisation plus intuitive des données</strong> pour les utilisateurs, contribuant ainsi à une meilleure prise de décision au sein de l'entreprise.</p>
                <p className="upcharge">#React #Firebase #Ag-Grid #Zustand</p>
              </div>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card" tabindex="0">
            <div className="card_image"><img src={argentBank} alt="Argent-bank" /></div>
            <div className="card_content">
              <h2 className="card_title">Argent-Bank</h2>
              <div className="card_text">
                <p>Ce projet scolaire a été une occasion formidable pour développer une <strong>application web React</strong> bancaire avec identification et interractions avec la base de données. J'ai créer une interface <strong>réactive et fonctionnelle</strong>, en composants basé sur le HTML et CSS fournis pour les pages principales. L'utilisation de <strong>Redux</strong> a été essentielle pour gérer efficacement l'état global de l'application.</p>
                <p>Dans la première phase, j'ai intégré des fonctionnalités clés telles que la connexion et la déconnexion, ainsi que l'affichage des profils utilisateurs. Il a enfin fallut remplir toutedivclass la documentation au <strong>format .yaml</strong>.</p>
                <p className="upcharge">#React #Redux #MongoDB #Swagger</p>
                <a href="https://github.com/JulienAudras/ArgentBank-website" target="_blank" rel="noreferrer" className="card_link">
                  <img src={github} alt="github logo" className="card_link--icon" />
                  Voir le repo
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card" tabindex="0">
            <div className="card_image"><img src={event} alt="724 Event" /></div>
            <div className="card_content">
              <h2 className="card_title">724 Event</h2>
              <div className="card_text">
                <p>Dans ce projet scolaire, j'ai été chargé de finaliser le site vitrine one-page d'une agence fictive. Mon travail a commencé par l'analyse du code existant et des tâches restantes mentionnées dans l'onglet <strong>"Issues"</strong> du repo initial. L'objectif était de corriger les <strong>bugs</strong> affectant l'utilisation du site par les visiteurs.</p>
                <p>Ma mission incluait la résolution de ces problèmes techniques, la création de tests, et la finalisation du <strong>cahier de recette</strong> pour s'assurer que le site fonctionne correctement. Ce travail nécessitait une attention particulière aux détails et un engagement à respecter les normes de qualité élevées demandées par le projet, tout en veillant à respecter les délais serrés du projet.</p>
                <p className="upcharge">#React #Tests #Debug #Jest</p>
                <a href="https://github.com/JulienAudras/DebugReactApp" target="_blank" rel="noreferrer" className="card_link">
                  <img src={github} alt="github logo" className="card_link--icon" />
                  Voir le repo
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card" tabindex="0">
            <div className="card_image"><img src={nina} alt="Nina Carducci" /></div>
            <div className="card_content">
              <h2 className="card_title">Nina Carducci</h2>
              <div className="card_text">
                <p>Projet scolaire consistant à améliorer la vitesse de chargement et le référencementd'un site. Après une analyse approfondie, j'ai identifié plusieurs améliorations potentielles. Ma mission comprenait :</p>
                <p>
                  <strong>Optimisation des images</strong> pour réduire le temps de chargement.
                  <strong> Optimisation du code et de sa structure</strong> pour améliorer les performances et l'accessibilité.
                  <strong> Amélioration du SEO</strong> pour augmenter la visibilité sur les moteurs de recherche.
                  <strong> Mise en place du référencement local</strong> en utilisant Schema.org.
                  <strong> Ajout de métadonnées pour les réseaux sociaux</strong>, pour augmenter l'engagement.
                  <strong> Amélioration de l'accessibilité</strong> du site conformément aux standards actuels.
                </p>
                <p>En conclusion de ce projet, j'ai produit un <strong>rapport d’optimisation</strong> détaillant les actions entreprises et leur impact sur les performances et l'accessibilité du site, en utilisant des outils comme Lighthouse et Wave.</p>
                <p className="upcharge">#Seo #Optimisation #Lighthouse #Wave</p>
                <a href="https://github.com/JulienAudras/ninacarducciPhoto" target="_blank" rel="noreferrer" className="card_link">
                  <img src={github} alt="github logo" className="card_link--icon" />
                  Voir le repo
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card" tabindex="0">
            <div className="card_image"><img src={kasa} alt="Kasa" /></div>
            <div className="card_content">
              <h2 className="card_title">Kasa</h2>
              <div className="card_text">
                <p>Dans ce projet j'ai dù développer la nouvelle plateforme web d'un site de location d'appartements, Kasa. Ce projet majeur impliquait une refonte complète du site existant en ASP.NET pour passer à une stack moderne en JavaScript avec NodeJS pour le back-end et React pour le front-end. J'ai été chargé de démarrer et de développer l'ensemble de l'application React, en incluant la création des composants React et la configuration des routes React Router.</p>
                <p>En l'absence d'un développeur back-end, j'ai utilisé un fichier JSON fourni contenant les dernières annonces de logements pour construire le front-end correspondant. J'ai suivi les maquettes Figma fournies pour assurer un design réactif et fidèle aux prototypes. Parmi les défis techniques, j'ai dû implémenter des fonctionnalités spécifiques comme un système de galerie photo dynamique et des menus déroulants interactifs (Collapse). Mon travail a contribué à donner vie à un site innovant, respectant les lignes directrices de Kasa et améliorant l'expérience utilisateur.</p>
                <p className="upcharge">#React #Composants #Routeur #Figma</p>
                <a href="https://github.com/JulienAudras/kasa" target="_blank" rel="noreferrer" className="card_link">
                  <img src={github} alt="github logo" className="card_link--icon" />
                  Voir le repo
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card" tabindex="0">
            <div className="card_image"><img src={sophie} alt="Sophie Bluel" /></div>
            <div className="card_content">
              <h2 className="card_title">Sophie Bluel</h2>
              <div className="card_text">
                <p>Dans ce projet, j'ai été chargé de développer plusieurs composants clés pour un site web d'architecture. Mes responsabilités principales comprenaient :</p>
                <p>
                  La création d'une <strong>page de présentation</strong> des travaux de l'architecte, en me basant sur le HTML fourni. Mon objectif était de mettre en valeur les projets de l'architecte tout en assurant une expérience utilisateur fluide et esthétique.
                  Le développement d'une <strong>page de connexion pour l'administrateur</strong> du site. Cette page devait offrir une sécurité et une facilité d'utilisation optimales pour le client.
                  La conception d'une <strong>modale d'upload de médias</strong>. Cette fonctionnalité clé permettait à l'administrateur d'ajouter facilement de nouveaux médias au site, contribuant ainsi à son dynamisme et à sa mise à jour régulière.
                </p>
                <p>Ce projet m'a permis de démontrer ma capacité à créer des interfaces fonctionnelles et esthétiques, tout en répondant à des besoins spécifiques de gestion de contenu.</p>
                <p className="upcharge">#JavaScript #Connexion #Modale #Upload</p>
                <a href="https://github.com/JulienAudras/sophieBluel" target="_blank" rel="noreferrer" className="card_link">
                  <img src={github} alt="github logo" className="card_link--icon" />
                  Voir le repo
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card" tabindex="0">
            <div className="card_image"><img src={ohMyFood} alt="Oh My Food" /></div>
            <div className="card_content">
              <h2 className="card_title">Oh My Food</h2>
              <div className="card_text">
                <p>Dans le cadre d'un projet scolaire, j'ai eu l'opportunité de développer un site web innovant pour "OhMyFood", un concept de plateforme répertoriant les menus de restaurants. Le site devait initialement présenter quatre menus de restaurants partenaires.</p>
                <p>Le développement de ce projet a suivi une approche <strong>"mobile first"</strong>, créant un site pleinement responsive pour mobiles, tablettes et ordinateurs. En exploitant les capacités de <strong>SASS</strong> pour le stylisme, j'ai mis en œuvre des animations délicates et des comportements interactifs basés sur les prototypes Figma fournis. L'objectif était de garantir une expérience utilisateur captivante et intuitive, tout en adhérant scrupuleusement aux spécifications du projet.</p>
                <p>Cette expérience a été cruciale pour développer mes compétences en développement d'intégrateur, en particulier pour traduire des maquettes en un site web fonctionnel, et pour expérimenter avec des animations.</p>
                <p className="upcharge">#Sass #Mobile-First #Animations #Responsive</p>
                <a href="https://github.com/JulienAudras/ohmyfoodProper" target="_blank" rel="noreferrer" className="card_link">
                  <img src={github} alt="github logo" className="card_link--icon" />
                  Voir le repo
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects