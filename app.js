const http = require('http');
const axios = require('axios');
var Planet = require('./planet.js');

let stop = true;

async function makeGetRequest() {
  do{
      try {
            const res = await axios.get('https://swapi.co/api/planets');
             let data = res.data;
                if(data.next == null){
                    stop = false;
                }else{
                    url = "https://swapi.co/api/planets/";
                    url = data.next;
                    console.log(`${data.next}`);
                }
                data.forEach(element => { 
                    var nom = element.name;
                    var population = element.population;

                    var pla = new Planet({nom, population});
                    p = [];
          
                    p.push(pla)
                });

            } catch (error) {
            console.error(error);
            }

      
        }while(stop)
         p.forEach(element =>console.log(`planete: ${element.name} , population : ${element.population}`) )    
    console.log(`population totale  : ${Planet.countPlanetsPopulation(p)}`);
  }

makeGetRequest();
