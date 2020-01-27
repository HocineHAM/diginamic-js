function verifyReply() {
    var proposedValue = valueField.value;
    var pattern       = /^\d+$/;
    if(pattern.test(proposedValue)) {
      numberTry++;
      proposedValue = parseInt(proposedValue);
      if(proposedValue == valueToFind) {
         alert('Bravo ! Vous avez trouvé la solution'); 
      } else if(proposedValue != valueToFind) {
       alert("Raté!! Choisissez un autre nombre");   
      } else {
        alert('Il faut choisir un nombre valide'); 
      }
    } 
    return false;
  }

  var maxValue    = 10;
  var valueToFind = Math.floor((Math.random()*maxValue)+1);
  var numberTry   = 0;
  var valueField  = document.getElementById('valueField');
   
  if(valueToFind > maxValue) {
    valueToFind = maxValue;
  }
   
  document.getElementById('maxValue').innerHTML = maxValue;
  valueField.value = '';
  valueField.focus();


var x=5 
function compteur() 
{ 
x = x-1; 
document.getElementById('nb').innerHTML = x; 
if(x==0){
    alert('Vous avez perdu!!!')

    x=5;
    document.getElementById('nb').innerHTML = x; 
    var valueToFind = Math.floor((Math.random()*maxValue)+1);

}

} 
