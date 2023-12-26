function HelloWorld(){
    let message =lire("HelloWorld");
    afficher(message);
}

function indiquéSupInf10(){
    let nb = 1*lire ("Saisir nombre")
    if (nb<10){
        afficher(nb + " < 10")
    } else { (nb>10)
        afficher(nb + " > 10")
    }
    for(let i=0;i<=nb;i++) {
        afficher(i)
    }
    let j=0
    while (j<=nb){
        afficher(j++);
    }
}
function adition(nb1,nb2){
    let result;
    result = nb1+nb2
    return result;
}

// afficher(adition(3,5)); pour faire + voir l'addition

function creerTableauPreDefini(){
    let tableau = [1,2,3,4,5];
    afficher (tableau)
    for (i=0;i<taille(tableau);i++){
        afficher(tableau[i]);
    }
}

function listNameInfo(){
    let user = {"nom":"Mansion","prénom":"Thomas"};
    afficher(user)
    afficher(user["nom"])
}

function ListUserInfo(){
    let list = {"user":"thomas","info":"mail " + " phone"};
    afficher(list ["user"]);
}


function verificationValeurTableau(){
    let list =[1,2,3,4,5];
    let found = false; 
    
    while (!found){
        let valeur = 1*lire("Donner une valeur");
        // on peut rajouter un while qui entoure la boucle for while ( !found ){}
        for (let i=0 ; i < taille(list) ; i++){ // le pas de i 
            if (valeur == list[i]){
                afficher("la valeur est dans la liste sur la position" + i) // afficher la position de i 
                found = true;
            }
        }
        if (!found){
            afficher ("le nombre n'est pas dans la liste")
        }
    }
}    // verificationValeurTableau() // afficher la fonction 

/* Javascript writing syntax :  

if(){ S }else{  }  

for(let i=0; i < 10; i++){  }  

while(){  }   

function nomDelaFonction(){  } */

/* function test1(param){
        param=2;
 
    let nb = 42; 
    let tab=[1,2,3];
    afficher (nb);     // affiche 42
}
test1(); // mettre en commentaire pour désactiver */

/*function copytableau(tableauAcopier){;
let tableauCopie =[]
for (let i=0; i<taille(tableauACopier);i++){
    tableauCopie[i]= tableauACopier[i];
}
    return tableauCopie; 
}
let tab=[3,4,5];
let tab2=copytableau(tab);
afficher(tab);
afficher(tab2); */



function supprimer(){
    let tab = [1,2,3,4,5,6,7,8,9]
    afficher(tab);
    let case1 = lire("Donnez la position de la case à supprimer : ");
    delete tab[case1];
    afficher(tab);
    }


function fusionner(){
    let tab = [1,2,3,4,5,6,7,8,9];
    let tab1 =[1,2,3,4,5,6,7,8,9];
    let fusionner =[tab,tab1];
    afficher(fusionner);
}


function scinderUntableeau(){
    let tab = [1,2,3,4,5,6,7,8,9]; // création de tab 
    let scinder =taille(tab) / 2; // variable qui permet de scinder un  tableau en 2 

    i = 0;
    for (i = 0; i < scinder; i++){ // la boucle "pour" permet que I soit plus petit que la variable scinder 
    let tabscinder = [tab[i]]; // la variable  tabscinder permet de retoruner la variable correspondant à la variable scinder 
    afficher(tabscinder);
    }
}

function chercherValeurpresente(){
        let list =[1,2,3,4,5];
        let found = false; 
        
        while (!found){
            let valeur = 1*lire("Donner une valeur");
            // on peut rajouter un while qui entoure la boucle for while ( !found ){}
            for (let i=0 ; i < taille(list) ; i++){ // le pas de i 
                if (valeur == list[i]){
                    afficher("la valeur est dans la liste sur la position" + i) // afficher la position de i 
                    found = true;
            
                    
                } 
            }
            if (!found){
                afficher ("le nombre n'est pas dans la liste")
            }
        }
    } 


    
    
   
    


