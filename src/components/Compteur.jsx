// src/components/Compteur.jsx

// ici j'ai mon import de React et de mon style css
import React from 'react';
import styles from './Compteur.module.css';


// Mon composant qui affiche le nb de participants
function Compteur({ compteur }) {
  return (
    <div className={styles.compteur}>
      <p>Nombre de participants : {compteur}</p>
    </div>
  );
}

// export si je souhaite le réutiliser ailleurs
export default Compteur;
