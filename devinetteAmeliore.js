/* 
Activité : jeu de devinette
*/

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Initialisation des variables
var numeroGagnant = Number(prompt("Ah le jeu de la devinette!! \n  Devinez le chiffre entre 1 et 100 que je cache dans mon programme"));
var tours;
var chances = 6;

// On fait une belle boucle 'for' vu que le nombre de tours est connue !! 
for (tours = 1; tours <= 6; tours++) {
     
      chances = chances - 1; // On enlève une chance à chaque tour. Logique :)
    
      if(numeroGagnant > solution) {              // Si le nombre choisi est plus grand que la solution alors : 
            console.log("C'est moins !! Précédent:" + numeroGagnant);
        } else if (numeroGagnant < solution) {    // Si le nombre choisi est plus petit que la solution alors : 
            console.log("C'est plus  !! Précédent:" + numeroGagnant);
        } else {                                  // Si ce sont les mêmes alors : Bingo ! 
            console.log("Bravo!! Vous avez gagné !! Vous avez trouvé au bout du " + tours + " eme tour !!");
            break; // Si trouvé alors fin de la boucle
        }
    
    
        if(tours < 6) {     // S'il reste des tours à faire alors on redemande un nombre
            var numeroGagnant = Number(prompt("Toujours pas trouvé ? Reessayez encore une fois ! \n Il te reste " + chances + " chance(s)  !!" ));
        }   

}

if (tours == 7){ // Si on a épuisé toutes ses chances alors affichage de la solution
    console.log("Dommage, tas perdu!! "+"(La solution etait " + solution + ")");
}

console.log("Fin du jeu");
