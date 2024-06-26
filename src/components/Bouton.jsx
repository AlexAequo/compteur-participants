// src/components/Bouton.jsx

// L'importation de React et de son style css bouton
import React from 'react';
import styles from './Bouton.module.css';


// Composant qui fait le bouton
function Bouton({ onClick, children }) {
  return (
    <button className={styles.bouton} onClick={onClick}>
      {children}
    </button>
  );
}
// L'export pour la réutilisation
export default Bouton;
