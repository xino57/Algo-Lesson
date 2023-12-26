// déclarer une variable 
var MaVariable = "Hello World"
// afficher la variable (MaVariable)
afficher(MaVariable);
// concatener une variable
var str1 ="Prenom: "
var str2 ="Thomas"
afficher(str1+str2)

// concatener deux nombres
var nb1=5;
var nb2=7;
afficher(nb1 , nb2)         

afficher(nb1.toString()  +  nb2.toString()) //maniere plus conventionnelle dans la plupart des languages

function IsInf(nb=10){
    let nb_user = lire("Saississez un nombre")
    afficher(nb_user<nb)
    if (nb_user<nb){
        afficher(nb_user + "<" + false)
    }else{
        afficher(nb_user +">" + true)
    }

    }
    IsInf(nb=10);

    // if (nb_user>nb){
    //     afficher(nb_user.toString()+ "<" + nb.toString() ," ",false)
    // }
    // else
    // {
    //     afficher(nb_user.toString()+ "< " + nb.toString() ," ",true)
    // }



// tableau indexé /liste
let tab=[1,2,3,4];
afficher (tab[2]); 

// tableau associative / dictionnaire
let tabassociative={'noms':'Mansion','prénoms':'Thomas'};
afficher (tabassociative['noms']);

// fusionner un tableau 
let tab2=[9,7,11,10,18];
let tab3=[10,11,12,15,16];
afficher ("Fusion tableaux:" + tab2 + tab3);

// Parcourir un tableau

function ParcourirTableau(tableau=tab3){
    for(i=0 ; i<taille(tableau) ; i++){
        afficher("Il y a la valeur " + tableau[i] + " à la position "+ i)
    }
}
function IsinList(tableau=tab3){
    let val_user= prompt("Mets ta valeur: ")*1
    let found = false       // Booleen pour savoir si la valeur a été trouvée (initialisé à non trouvé)
    for(i=0;i<taille(tableau);i++){
        if(val_user==tableau[i]){
            afficher("La valeur "+ val_user + " est dans le tableau à la position "+ i)
            found = true
        }
    }

    
    if(!found){
        afficher("La valeur "+ val_user + " n'est pas dans le tableau")
    }
}

// IsinList();