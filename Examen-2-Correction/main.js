let tab1=[2,2,3,1,55,67,16,11];
let tab =[
    [2,1],
    [3,4],
];

function exercice1(tab){
    let result =[]; let total=0; let totaux=[]; let totalGlobale=0;
    for(let i=0; i<taille(tab);i++){
        result[i]=[];
        total=0;
        for(let j=0;j<taille(tab[i]);j++){
            result[i][j]=tab[i][j];
            total+=tab[i][j];
            if(taille(totaux)==j){
                totaux[j]=0;
            }
            totaux[j]+=tab[i][j];
            totalGlobale+=tab[i][j];
        }
        result[i][taille(result[i])]=total;
    }
    totaux[taille(totaux)]=totalGlobale;
    result[taille(result)]=totaux;
    return result;
    
}
// afficher(tab)
// afficher(exercice1(tab))

function valInArray(valeur,tab){
    for(let i=0; i<taille(tab); i++){
        if(tab[i]==valeur){
            return true;
        }
    }
    return false;
}
// afficher(valInArray(2,tab1))

function exercice2(tab){
    let valeurs =[];
    for(let i=0; i<taille(tab); i++){
        for(let j=0; j<taille(tab[i]); j++){
            if(valInArray(tab[i][j],valeurs)){
                return false;
            }
         valeurs[taille(valeurs)]=tab[i][j];
        }
    }
return true;
}
afficher(tab)
afficher(exercice2(tab))


