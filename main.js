// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
//reversing the drop down list
 var planetDropList = planets.reverse();
//populating the drop down list
    planetDropList.forEach(dropDown);
   
    function dropDown(item) {
         var drop = document.createElement('option');
         drop.value = item[0];
          document.getElementById('planets').appendChild(drop).textContent = item[0];
          
           };

//function to calculate users weight on a planet.!!(still in progress)!!


function calculateWeight(weight, planetName) {
 var planetName =
 document.getElementById('planets').selectedIndex;
  
 var gravity = planets[planetName][2];

   return weight * gravity;   
}


//make the handleClickEvent!!! (rough sketch )
function handleClickEvent() {
 //grabs the input by the user
  var weight = 
  parseFloat(document.getElementById('user-weight').value)
  //grabs the value from the array
  var planetName =
  document.getElementById('planets').value;

 

  var result = 
  calculateWeight(weight, planetName);

  document.getElementById("output").innerHTML =
  'If' + ' you' + ' were' + ' on ' + planetName + ',' 
  + ' you' + ' would' + ' weigh ' + result + 'lbs!';
}
//If you were on Sun, you would weigh 2790lbs!