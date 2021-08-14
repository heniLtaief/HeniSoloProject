
$(document).ready(function(){
   // create our variables 
  var p1= 'X'
  var p2= 'O'
  var moves= 0
  // putting our ID in var to use them easier ther directly
  var x1= $('#x1')
  var x2= $('#x2')
  var x3= $('#x3')
  var x4= $('#x4')
  var x5= $('#x5')
  var x6= $('#x6')
  var x7= $('#x7')
  var x8= $('#x8')
  var x9= $('#x9')
  // initiate the on click that works on the global Div (matrix)
   $('.matrix li').on('click', function(){
      // creating our winning combinations whit if conditions working on the element 
      // we use the .hasClass method that return a boolean for as and works on the exact 
      // element even if there is many others

     if(x1.hasClass('O') && x2.hasClass('O') && x3.hasClass('O') ||
       x4.hasClass('O') && x5.hasClass('O') && x6.hasClass('O') ||
       x7.hasClass('O') && x8.hasClass('O') && x9.hasClass('O') ||
       x2.hasClass('O') && x5.hasClass('O') && x8.hasClass('O') ||
       x3.hasClass('O') && x6.hasClass('O') && x9.hasClass('O') ||
       x1.hasClass('O') && x4.hasClass('O') && x7.hasClass('O') ||
       x1.hasClass('O') && x5.hasClass('O') && x9.hasClass('O') ||
       x3.hasClass('O') && x5.hasClass('O') && x7.hasClass('O')
     ){
      // if combinations is satiffied then create a popUp for winner
      // Then we have to delete everything with removeClass method after result a restart everything

        alert('O Wins!')
        $('.matrix li').text('+')
        $('.matrix li').removeClass('disable')
        $('.matrix li').removeClass('X')
        $('.matrix li').removeClass('O')
   } 
   // Same thing for the element 'X'
   else if(x1.hasClass('X') && x2.hasClass('X') && x3.hasClass('X') ||
       x4.hasClass('X') && x5.hasClass('X') && x6.hasClass('X') ||
       x7.hasClass('X') && x8.hasClass('X') && x9.hasClass('X') ||
       x2.hasClass('X') && x5.hasClass('X') && x8.hasClass('X') ||
       x3.hasClass('X') && x6.hasClass('X') && x9.hasClass('X') ||
       x1.hasClass('X') && x4.hasClass('X') && x7.hasClass('X') ||
       x1.hasClass('X') && x5.hasClass('X') && x9.hasClass('X') ||
       x3.hasClass('X') && x5.hasClass('X') && x7.hasClass('X')
     ){
        alert('X Wins!')
        $('.matrix li').text('+')
        $('.matrix li').removeClass('disable')
        $('.matrix li').removeClass('X')
        $('.matrix li').removeClass('O') 
   } 
   // we have to check also if there is no moves available then it's a tie and delete again
   else if(moves === 9){
    alert('No Winners!')
        $('.matrix li').text('+')
        $('.matrix li').removeClass('disable')
        $('.matrix li').removeClass('X')
        $('.matrix li').removeClass('O') 
        moves= 0 
   } 
   // here we have to make the next moves different from the other
   else if (moves % 2 === 0){
    moves++
    $(this).text('O')
    $(this).addClass('disable O')
    if(x1.hasClass('O') && x2.hasClass('O') && x3.hasClass('O') ||
       x4.hasClass('O') && x5.hasClass('O') && x6.hasClass('O') ||
       x7.hasClass('O') && x8.hasClass('O') && x9.hasClass('O') ||
       x2.hasClass('O') && x5.hasClass('O') && x8.hasClass('O') ||
       x3.hasClass('O') && x6.hasClass('O') && x9.hasClass('O') ||
       x1.hasClass('O') && x4.hasClass('O') && x7.hasClass('O') ||
       x1.hasClass('O') && x5.hasClass('O') && x9.hasClass('O') ||
       x3.hasClass('O') && x5.hasClass('O') && x7.hasClass('O')
     ){
        alert('O Wins!')
        moves = 0
      }
       }
       // here we have to make the next moves different from the other
       else{
        moves++
    $(this).text('X')
    $(this).addClass('disable X')
    if(x1.hasClass('X') && x2.hasClass('X') && x3.hasClass('X') ||
       x4.hasClass('X') && x5.hasClass('X') && x6.hasClass('X') ||
       x7.hasClass('X') && x8.hasClass('X') && x9.hasClass('X') ||
       x2.hasClass('X') && x5.hasClass('X') && x8.hasClass('X') ||
       x3.hasClass('X') && x6.hasClass('X') && x9.hasClass('X') ||
       x1.hasClass('X') && x4.hasClass('X') && x7.hasClass('X') ||
       x1.hasClass('X') && x5.hasClass('X') && x9.hasClass('X') ||
       x3.hasClass('X') && x5.hasClass('X') && x7.hasClass('X')
     ){
        alert('X Wins!')
        moves = 0
       }
   } 
     }); 

});



















