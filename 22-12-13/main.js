/*function fact (nb){
    let result =1;
    for(let i=nb;i>=1; i--){
        result *=i;
    }
    return result;
}
afficher(fact(5));*/

function fact(nb){
    if(nb>1){
        return nb*fact(nb-1);
    }else{
        return 1;
    }

}
afficher(fact(5));


