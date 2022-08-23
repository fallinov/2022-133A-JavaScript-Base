/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande une interprétation stricte du code
  const val1 = Number( prompt('Entrez un nombre') );
  const val2 = Number( prompt('Entrez un autre nombre') );

  if( isNaN(val1) || isNaN(val2)) {
    alert('Entrez des nombres !');
    return;
  }

  alert(`Résultat, ${val1 + val2} !`);


}()); // Main IIFE