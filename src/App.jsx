// src/App.jsx

// Import de React et du hook useState
import React, { useState } from 'react';

//Import des styles css
import styles from './style.module.css';
// Import des composants de mon compteur et de mon bouton
import Compteur from './components/Compteur';
import Bouton from './components/Bouton';


// Composant principal de l'appli
function App() {
  //Déclaration de l'état 'compteur' et de la fonction 'setCompteur' pour la mise à jour
  const [compteur, setCompteur] = useState(0);

  // L'incrémentation du compteur
  const incrementer = () => {
    setCompteur(compteur + 1);
  };
// Idem pour décrémenter le compteur, et aussi d'être sur que ça n'aille pas en desous de 0
  const decrementer = () => {
    if (compteur > 0) {
      setCompteur(compteur - 1);
    }
  };
// Fonction pour la remise à 0
  const reset = () => {
    setCompteur(0);
  };
// Rendu ducomposant de l'app
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1>Compteur de Participants</h1>
        <Compteur compteur={compteur} />
        <Bouton onClick={incrementer}>Ajouter un participant</Bouton>
        <Bouton onClick={decrementer}>Enlever un participant</Bouton>
        <Bouton onClick={reset}>Remettre à zéro</Bouton>
      </header>
    </div>
  );
}
// Export du composant pour l'utiliser ailleurs
export default App;

