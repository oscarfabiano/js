/*
Author      : Oscar Fabiano
Version     : 1.0 
Description : Javascript sample to create a 'diamond' with chars on console
              Goals : 1) How to work with a finobacci sequence
                      2) Array interation
                      3) Just 4Fun
How to test : Copy & Past this code on https://jsfiddle.net/ and open the console to see the result        
*/

var a = 0;
var max = 100; //define max finobacci limit
var finobacci = [0];
var char_space = ' '
var char_diamond = '+'

while (finobacci[finobacci.length-1] <= max) {

	if (a > 1) {  
  	finobacci.push(Number(finobacci[finobacci.length-1]) + Number(finobacci[finobacci.length-2])); //increment previous + previous+2
  	
    if (finobacci.length>0) {
    	 if (finobacci[finobacci.length-1] < max) {

          //print tree
          /*Ex: 
          ........................*          
          ........................**
          .......................***
          ......................*****
          .....................********
          */
       	  console.log(
              Array( max - finobacci[finobacci.length-1] + (a+(Math.floor(finobacci[finobacci.length-1]/2))) ).join(char_space) + 
              Array( finobacci[finobacci.length-1]).join(char_diamond) + 
              Array( max - finobacci[finobacci.length-1] + (a+(Math.floor(finobacci[finobacci.length-1]/2))) ).join(char_space)
          );
       }    	 
    }
    
  }	else { //init, first 
  	finobacci.push(a);
  }
	a++;
  
  
  //if finobacci var got limit defined
  if (finobacci[finobacci.length-1] >= max) {
  
  	 var i = 0;
     
  	 while (a > i) {
     		
        if (finobacci.length>0) {
    	    if (finobacci[finobacci.length-i] < max) {
            //print reversal tree

            console.log(
              Array( max - finobacci[finobacci.length-i] + (a+(Math.floor(finobacci[finobacci.length-i]/2))) ).join(char_space) + 
              Array( finobacci[finobacci.length-i]).join(char_diamond) + 
              Array( max - finobacci[finobacci.length-i] + (a+(Math.floor(finobacci[finobacci.length-i]/2))) ).join(char_space) 
            );
          }
        }  
        i++;
     }
  
  }
}
