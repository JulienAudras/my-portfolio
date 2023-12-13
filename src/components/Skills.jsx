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
                <div className="skillsSection__content--group">
                    <article className="skillsSection__content--group--article">
                        <div className="skillsSection__content--group--article--imgContainer">
                            <img src={reactLogo} alt="react logo" className="skillsSection__content--group--article--imgContainer--img" />
                        </div>
                        <ul className="skillsSection__content--group--article--list">
                            <li className="skillsSection__content--group--article--list--text">Gestion d'état global (Redux, Zustand, Context)</li>
                            <li className="skillsSection__content--group--article--list--text">Routeur</li>
                            <li className="skillsSection__content--group--article--list--text">Composants et routes dynamiques</li>
                            <li className="skillsSection__content--group--article--list--text">Composants de classes et de fonctions</li>
                        </ul>
                        <div className="skillsSection__content--group--article--iconContainer">
                            <img src={reduxLogo} alt="redux logo" className="skillsSection__content--group--article--iconContainer--icon" />
                            <img src={zustandLogo} alt="zustand logo" id="zustandLogo" className="skillsSection__content--group--article--iconContainer--icon" />
                            {/* <img src={routeurLogo} alt="routeur logo" className="skillsSection__content--article--iconContainer--icon"/> */}
                        </div>
                    </article>
                    <article className="skillsSection__content--group--article">
                        <div className="skillsSection__content--group--article--imgContainer">
                            <img src={jsLogo} alt="firebase logo" className="skillsSection__content--group--article--imgContainer--img" />
                        </div>
                        <ul className="skillsSection__content--group--article--list">
                            <li className="skillsSection__content--group--article--list--text">Transformation dynamique des données en éléments du DOM.</li>
                            <li className="skillsSection__content--group--article--list--text">Programmation asynchrone</li>
                            <li className="skillsSection__content--group--article--list--text">Configuration de serveurs CRUD et routes API.</li>
                            <li className="skillsSection__content--group--article--list--text">Redaction et mise a jour de documentation Swagger (.yaml)</li>
                        </ul>
                        <div className="skillsSection__content--group--article--iconContainer">
                            <img src={nodeLogo} alt="firebaseAuth logo logo" className="skillsSection__content--group--article--iconContainer--icon" />
                            <img src={swaggerLogo} alt="firestore logo" className="skillsSection__content--group--article--iconContainer--icon" />
                        </div>
                    </article>
                </div>
                <div className="skillsSection__content--group">
                    <article className="skillsSection__content--group--article">
                        <div className="skillsSection__content--group--article--imgContainer">
                            <img src={htmlLogo} alt="firebase logo" className="skillsSection__content--group--article--imgContainer--img" />
                        </div>
                        <ul className="skillsSection__content--group--article--list">
                            <li className="skillsSection__content--group--article--list--text">Structuration avec balises sémantiques</li>
                            <li className="skillsSection__content--group--article--list--text">Optimisation pour l'accessibilité (confirmité Wave)</li>
                            <li className="skillsSection__content--group--article--list--text">Rich Snippets pour SEO</li>
                        </ul>
                        <div className="skillsSection__content--group--article--iconContainer">
                            <img src={waveLogo} alt="firebaseAuth logo logo" className="skillsSection__content--group--article--iconContainer--icon" />
                            <img src={microformatLogo} alt="firestore logo" className="skillsSection__content--group--article--iconContainer--icon" />
                        </div>
                    </article>
                    <article className="skillsSection__content--group--article">
                        <div className="skillsSection__content--group--article--imgContainer">
                            <img src={cssLogo} alt="firebase logo" className="skillsSection__content--group--article--imgContainer--img" />
                        </div>
                        <ul className="skillsSection__content--group--article--list">
                            <li className="skillsSection__content--group--article--list--text">Mise en page et animations</li>
                            <li className="skillsSection__content--group--article--list--text">Gestion du code avec Sass</li>
                            <li className="skillsSection__content--group--article--list--text">Optimisation de performances (Lighthouse)</li>
                        </ul>
                        <div className="skillsSection__content--group--article--iconContainer">
                            <img src={sassLogo} alt="firebaseAuth logo logo" className="skillsSection__content--group--article--iconContainer--icon" />
                            <img src={lighthouseLogo} alt="firestore logo" className="skillsSection__content--group--article--iconContainer--icon" />
                        </div>
                    </article>
                </div>
                <div className="skillsSection__content--group">
                    <article className="skillsSection__content--group--article">
                        <div className="skillsSection__content--group--article--imgContainer">
                            <img src={firebaseLogo} alt="firebase logo" className="skillsSection__content--group--article--imgContainer--img" />
                        </div>
                        <ul className="skillsSection__content--group--article--list">
                            <li className="skillsSection__content--group--article--list--text">Base de donnée et gestion de collection</li>
                            <li className="skillsSection__content--group--article--list--text">Firebase Auth pour authentification</li>
                            <li className="skillsSection__content--group--article--list--text">Ecriture de règles et routes pour base de donnée et storage</li>
                        </ul>
                        <div className="skillsSection__content--group--article--iconContainer">
                            <img src={firebaseauthLogo} alt="firebaseAuth logo logo" className="skillsSection__content--group--article--iconContainer--icon" />
                            <img src={firestoreLogo} alt="firestore logo" className="skillsSection__content--group--article--iconContainer--icon" />
                        </div>
                    </article>
                </div>
            </div>

        </section>
    )
}

export default Skills