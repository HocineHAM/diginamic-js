function fibonacci(){
b=1;
a=0;

for(i=0; i<20; i++){
    c=a+b;
    a=b;
   b=c;

console.log(c)

    }  
}
fibonacci()