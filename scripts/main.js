/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
//declaring starting variable "total"
let total = 0
//Now we need to parse through all the different possible values
 for (var i = 0; i < hand.length; i++) {
//The number options are 1-10, so these are the only options i'm giving
     if (hand[i] === "2" || hand[i] === "3" || hand[i] === "4" || hand[i] === "5" || hand[i] === "6" || hand[i] === "7" || hand[i] === "8" || hand[i] === "9" || hand[i] === "10"); {
//parseInt will parse through a string and return an integer
     total += parseInt(hand[i]);
//If we don't get an integer, our other option is to get a head card with a value of 10
   } else if (hand[i] == "J" || hand[i] == "Q" || hand[i] == "K") {
     total += 10;
   }
}
//The Ace has to options so we need another for loop
 for (i = 0; i < hand.length; i++) {
//If total is less than 11, ace of 11 will get us closer to 21
     if (hand[i] == "A" && total < 11) {
     total += 11;
//if total is greater than 11 then 1 will not push us over 21        
   } else if (hand[i] == "A" && total > 11) {
     total += 1;
   }
}
 return total;
}




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
