                                 //   feetToMile

function feetToMile(feet){
    if(feet<0){
        return 'distance can not be negative'
    }
    var mile = feet/5280;
    var mile = mile.toFixed(6);

    return mile;
}

var mile = feetToMile();
console.log(mile);

                        
                             //   woodCalculator


function woodCalculator(chair, table, bed){
    var total = (chair * 1) + (table * 3) + (bed * 5);
    if(total < 0){
      return 'invalid value';
    }
    return total;
    }
    
    
    var number = woodCalculator();
    console.log(number);



                                 // brickCalculator
  




                                 
 function brickCalculator(floor){
    var floor1;
    var floor2;
    var floor3;
    var floor4;
    
   if (floor >= 1 && floor < 11 ){
       var floor1 = floor * 15000;
       return floor1;
   }

   else if(floor> 10  && floor <= 20){
    var floor1 = floor - 10;
        floor2 = floor1 * 12000 + 150000;
 
    
   return  floor2;

   }
  
  else if (floor>20){

   var floor3 = floor - 20;
       floor4 = floor3 * 10000 + 270000;
  

  return floor4;
   
  }
  else{
      return 'invalid digit'
  }
    
}

result = brickCalculator();
console.log(result );



                    // tinyFriend




function tinyFriend(names){
    
var min = names[0];

for(var i = 0; i<names.length; i++){

    var element = names[i];

    if(element.length < min.length){
        min = element;
    }
}

   return min;
}

var names =[];

var minNames = tinyFriend(names);

console.log(minNames);