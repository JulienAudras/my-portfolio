import React from 'react'
import reactLogo from '../images/react.png'
import reduxLogo from '../images/redux.png'
import zustandLogo from '../images/zustand.png'
import firebaseLogo from '../images/firebase.png'
import firestoreLogo from '../images/firestore.png'
import firebaseauthLogo from '../images/firebaseauth.png'
import jsLogo from '../images/js.png'
import nodeLogo from '../images/node.png'
import swaggerLogo from '../images/swagger.png'
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css.png'
import sassLogo from '../images/sass.png'
import microformatLogo from '../images/microformat.png'
import waveLogo from '../images/wave.png'
import lighthouseLogo from '../images/lighthouse.png'

const Skills = () => {
  return (
    <section className="skillsSection">
        <h2 className="skillSection__title sectionTitle">Compétences</h2>
        <div className="skillsSection__content">
        <article className="skillsSection__content--article">
            <div className="skillsSection__content--article--imgContainer">
                <img src={reactLogo} alt="react logo" className="skillsSection__content--article--imgContainer--img"/>
            </div>
            <p className="skillsSection__content--article--text">Je dispose de compétences solides en React, notamment dans la mise en place de routes dynamiques à l'aide du routeur React pour assurer une navigation efficace au sein de l'application. Ma maîtrise du contexte me permet de partager des données entre les composants de manière optimale, facilitant une communication fluide. De plus, je suis capable de gérer un état global avec des solutions telles que Redux et Zustand, assurant une gestion cohérente des données à l'échelle de l'ensemble de l'application. J'ai également l'habitude de travailler avec des bibliothèque extérieures telles que Spring ou ag grids.</p>
            <div className ="skillsSection__content--article--iconContainer">
                <img src={reduxLogo} alt="redux logo" className="skillsSection__content--article--iconContainer--icon"/>
                <img src={zustandLogo} alt="zustand logo" id="zustandLogo" className="skillsSection__content--article--iconContainer--icon"/>
                {/* <img src={routeurLogo} alt="routeur logo" className="skillsSection__content--article--iconContainer--icon"/> */}
            </div>
        </article>
        <article className="skillsSection__content--article">
            <div className="skillsSection__content--article--imgContainer">
                <img src={jsLogo} alt="firebase logo" className="skillsSection__content--article--imgContainer--img"/>
            </div>
            <p className="skillsSection__content--article--text">Possédant une bonne maîtrise de JavaScript, je suis particulièrement à l'aise dans la transformation dynamique de données en éléments du DOM, facilitant ainsi une manipulation fluide de l'interface utilisateur. En ce qui concerne le backend, je suis capable de configurer des serveurs CRUD et de coder les routes API nécessaires, permettant une communication efficace entre le frontend et le backend de l'application. Cette combinaison de compétences me permet de développer des applications web fonctionnelles et bien intégrées.</p>
            <div className ="skillsSection__content--article--iconContainer">
                <img src={nodeLogo} alt="firebaseAuth logo logo" className="skillsSection__content--article--iconContainer--icon"/>
                <img src={swaggerLogo} alt="firestore logo" className="skillsSection__content--article--iconContainer--icon"/>
            </div>
        </article>
        <article className="skillsSection__content--article">
            <div className="skillsSection__content--article--imgContainer">
                <img src={htmlLogo} alt="firebase logo" className="skillsSection__content--article--imgContainer--img"/>
            </div>
            <p className="skillsSection__content--article--text">Doté de compétences approfondies en HTML, je suis capable de concevoir la structure complète d'une application, assurant une base solide pour son développement. Ma méthodologie inclut le choix judicieux de balises sémantiques, favorisant une organisation claire et compréhensible du contenu. Je m'engage également dans l'optimisation de l'accessibilité, en utilisant des outils tels que WAVE pour garantir une expérience utilisateur inclusive. De plus, ma maîtrise des rich snippets contribue à améliorer la visibilité et la compréhension du contenu par les moteurs de recherche, renforçant ainsi la présence en ligne de l'application.</p>
            <div className ="skillsSection__content--article--iconContainer">
                <img src={waveLogo} alt="firebaseAuth logo logo" className="skillsSection__content--article--iconContainer--icon"/>
                <img src={microformatLogo} alt="firestore logo" className="skillsSection__content--article--iconContainer--icon"/>
            </div>
        </article>
        <article className="skillsSection__content--article">
            <div className="skillsSection__content--article--imgContainer">
                <img src={cssLogo} alt="firebase logo" className="skillsSection__content--article--imgContainer--img"/>
            </div>
            <p className="skillsSection__content--article--text">Au niveau du CSS, je façonne habilement des animations et des mises en page élégantes pour donner vie à mes applications. Ma maîtrise de Sass, avec une attention particulière à son indentation, assure une gestion efficace du code et une facilité de maintenance. Parallèlement, je m'attache à optimiser les performances de mes créations conformément aux recommandations de Google Lighthouse, garantissant ainsi une expérience utilisateur fluide et rapide. En somme, je m'efforce de créer des interfaces visuellement attrayantes et techniquement performantes.</p>
            <div className ="skillsSection__content--article--iconContainer">
                <img src={sassLogo} alt="firebaseAuth logo logo" className="skillsSection__content--article--iconContainer--icon"/>
                <img src={lighthouseLogo} alt="firestore logo" className="skillsSection__content--article--iconContainer--icon"/>
            </div>
        </article>
        <article className="skillsSection__content--article">
            <div className="skillsSection__content--article--imgContainer">
                <img src={firebaseLogo} alt="firebase logo" className="skillsSection__content--article--imgContainer--img"/>
            </div>
            <p className="skillsSection__content--article--text">Je suis compétent dans la mise en place d'une base de données Firebase et la gestion des interactions avec l'application, que ce soit pour la création ou la modification de collections. Grâce à Firebase Auth, je suis également en mesure de gérer diverses méthodes de connexion et de configurer des rôles, assurant ainsi une gestion sécurisée et personnalisée des utilisateurs au sein de l'application. Cette expertise me permet d'intégrer efficacement les fonctionnalités de Firebase dans mes projets, renforçant ainsi la robustesse et la flexibilité de mes applications.</p>
            <div className ="skillsSection__content--article--iconContainer">
                <img src={firebaseauthLogo} alt="firebaseAuth logo logo" className="skillsSection__content--article--iconContainer--icon"/>
                <img src={firestoreLogo} alt="firestore logo" className="skillsSection__content--article--iconContainer--icon"/>
            </div>
        </article>
        </div>

    </section>
  )
}

export default Skills