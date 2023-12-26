 /* Pour interro 
    déclarer une variable 
    afficher une variable/ concatatener/stocker une variable 
    additionner une vrairable 
    contaténer une varibale = fusionner 
    faire une boucle while / if/ for
    déclarer une fonction et l'exécuter 
    tableau indexé
    tableau associative 
    Parcourir un tableau indexé 
    */

    let tab1=[0,7,4,10];
    let tableau={"nom":"Mansion","prenom":"Thomas", "age": "18"};
    let str1="hello";
    let str2="World";
    let var1="1"
    let var2="2"
    let tab =[
        [4,2],
        [8,7]
    ];
    
    function tableauIndexe (tab1){
    affichertab1 [2];
    }
    
    function tableauassociative(tableau){
    afficher (tableau["prenom"])
    }
    // "pas de position"
    
    
    
    function concatenation(str1,str2){
    afficher(str1+str2);
    }
    
    function concatenation2(var1,var2){
    afficher(var1+var2);
     // Test : 12 
    // Multiplier par *1 pour que js comprend que c'est un nombre numérique 
    }
   
    
    function tableauDeuxdimenssions(tab){
      
       afficher(tab)
    
         for (let i=0; i<taille(tab);i++){
            newTab = tab[i];
            for(let j=0; j<taille(newTab);j++){
                afficher(newTab[j]);
            }
        } 
    
    }
    tableauDeuxdimenssions(tab);

    