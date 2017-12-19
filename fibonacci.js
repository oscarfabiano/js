/*
Author      : Oscar Fabiano
Version     : 1.0 
Description : Javascript sample to create a 'diamond' with chars on console
              Goals : 1) How to work with a fibonacci sequence
                      2) Array interation
                      3) Just 4Fun
How to test : Copy & Past this code on https://jsfiddle.net/ and open the console to see the result        
*/

var a = 0;
var max = 100; //define max fibonacci limit
var fibonacci = [0];
var char_space = ' '
var char_diamond = '+'

while (fibonacci[fibonacci.length-1] <= max) {

    if (a > 1) {  
  	fibonacci.push(Number(fibonacci[fibonacci.length-1]) + Number(fibonacci[fibonacci.length-2])); //increment previous + previous+2
  	
      if (fibonacci.length>0) {
    	 if (fibonacci[fibonacci.length-1] < max) {

          //print tree
          /*Ex: 
          ........................*          
          ........................**
          .......................***
          ......................*****
          .....................********
          */
       	  console.log(
              Array( max - fibonacci[fibonacci.length-1] + (a+(Math.floor(fibonacci[fibonacci.length-1]/2))) ).join(char_space) + 
              Array( fibonacci[fibonacci.length-1]).join(char_diamond) + 
              Array( max - fibonacci[fibonacci.length-1] + (a+(Math.floor(fibonacci[fibonacci.length-1]/2))) ).join(char_space)
          );
       }    	 
    }
    
  } else { //init, first 
    fibonacci.push(a);
  }
  a++;
  
  
  //if fibonacci var got limit defined
  if (fibonacci[fibonacci.length-1] >= max) {
  
     var i = 0;
     
     while (a > i) {
     		
        if (fibonacci.length>0) {
    	    if (fibonacci[fibonacci.length-i] < max) {
            //print reversal tree

            console.log(
              Array( max - fibonacci[fibonacci.length-i] + (a+(Math.floor(fibonacci[fibonacci.length-i]/2))) ).join(char_space) + 
              Array( fibonacci[fibonacci.length-i]).join(char_diamond) + 
              Array( max - fibonacci[fibonacci.length-i] + (a+(Math.floor(fibonacci[fibonacci.length-i]/2))) ).join(char_space) 
            );
          }
        }  
        i++;
     }
  
  }
}
