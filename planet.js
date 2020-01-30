
class Planet{
    
    constructor({name,population}){
        this.name = name;
        this.population = population;
    }

   static countPlanetsPopulation(p){
    
       return  p.reduce(function(a, x){
            var plan = parsInt(x.population);
            if(isNan(plan)){
           
                return a + 0;
            }else{
                return a+plan;
       }
              
   },0);
 }
 
}
module.exports= Planet;