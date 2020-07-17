                                 //   feetToMile

function feetToMile(feet){
    if(feet<0){
        return 'distance can not be negative'
    }
    var mile = feet/5280;
    var mile = mile.toFixed(6);

    return mile;
}

var result = feetToMile(10000);
console.log(result);

                        
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
     if(floor < 0){
         return 'digit is invalid';
     }

   else if (floor <= 10){
        var floor = floor * 15000;
    }

    else if(floor <= 20){
    var floor = floor * 12000;
    }
   
   else{
    var floor = floor * 10000;
   }
      return floor;
 }

 var result = brickCalculator();
 console.log(result);



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