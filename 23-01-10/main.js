function tabFusion(tab1,tab2){
    let result =[]
    // result =0
    for(i=0 ; i<taille(tab1) ; i++){
        result[taille(result)] = tab1[i];
        // on initialise la taille de result (0) et on incremente i de tab1 
    }
    for(i=0; i<taille(tab2);i++){
        result[taille(result)] = tab2[i];
    }
    return result 

}


let tab1=[9,7,11,10,18];
let tab2=[10,11,12,15,16];

// afficher(tabFusion(tab1, tab2))

function tabInsertion(tab,val,pos){
    let result=[];
    for(i=0 ; i<taille(tab) ; i++){
        
        if (i==pos){

         result[taille(result)]=val;

        }
        result[taille(result)]= tab[i]; 
        }
        if(pos>=taille(tab)){
            result[taille(result)]=val;
        }
    
    return result;
}
// afficher(tabInsertion(tab1,99,3));

function tabCission(tab,pos){
    let tab1 = [];
    let tab2 = [];
    let result =[tab1,tab2]

    for(i=0; i<taille(tab); i++){

        if(i<pos){
            tab1[taille(tab1)]=tab[i];
        }else{
            tab2[taille(tab2)]=tab[i];
        }
        
    }
    return result;
}

afficher(tabCission(tab1,2))


