function exo2(){
var a;
var b;
let nb;

do{

    nb = prompt("rentrez un nombre")
}while(isNaN(parseInt(nb)))
for(var i = 0; i<nb; i++){


    var c= a+b;
    document.write(c)
    a=b;
    b=c;
}
}
exo2;