// let tab1=[5,2,3,1,55,67,16,11];
let tab =[
    [1,2],
    [3,4],
];

function exercice1(tab){
    let somme=0;
    tab = tabInsertion(tab, [tab[0][0] + tab[1][0], tab[0][1] + tab[1][1]], 2);
    for(let i=0; i<taille(tab);i++){ 
        for(let j=0;j<taille(tab[i]);j++){
            somme = somme + tab[i][j];
        }
        afficher(tab[i][0], " + ", tab[i][1], " = ", somme);
        tabAjout(tab[i],somme);
        somme=0;
    }
    return tab;
 
    
    
}
afficher(tab);
afficher(exercice1(tab));

function exercice2(tab){
    let valeursParcourues = [];
    // on stocke toutes les valeurs dans un nouveau tableau 
    for (let i = 0; i < taille(tab); i++){
        let sousTab = tab[i];
        // on récupère a chaque tableau
        for (let j = 0; j < taille(sousTab); j++){
            // on push la valeur dans le tableau valeursParcourues
            valeursParcourues[taille(valeursParcourues)] = sousTab[j];
        }
    }

    // on parcours toutes les valeurs a partir du début
    for (let i = 0; i < taille(valeursParcourues); i++){
        let valeur = valeursParcourues[i];
        // on parcours les valeurs suivantes après la position de i
        for (let j = i+1; j < taille(valeursParcourues); j++){
            // on vérifie si elles sont identiques
            if (valeur == valeursParcourues[j]){
                return false;
            }
        }
    }

    return true;
}
afficher(tab);
afficher(exercice2(tab));

