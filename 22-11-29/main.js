// tableau à deux dimensions
let tab =[
    [1,6,11,16,21],
    [2,7,12,17,22],
    [3,8,13,18,23],
    [4,5,14,15,24],
    [5,10,15,20,25],
    [26,27,28,29,30]
];

afficher(tab); 
for (let i =0; i<taille(tab);i++){
    for (let j=0;j<taille(tab[i]);j++){
        afficher(tab[i][j]);
    }

}