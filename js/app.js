'use strict';



// alert('Welcome to my page');



// //name box prompt
// let name=prompt('What is your name ?');
// alert('Nice to meet you ' + name );
// //console.log('Nice to meet you', name);



// let score = 0;


// //My name
// let firstName =prompt('Is my name Oday  ?');
// firstName = firstName.toLowerCase();
// if(firstName === 'yes' || firstName === 'y'){
//  alert('good answer'); 
// //console.log(firstName);
// score++;
// }else{
//     alert(' Sorry, wrong answer'); 
//    // console.log(firstName);
// }


// //Age
// let age =prompt('Are you 30 years old?');
// age = age.toLowerCase();
// if(age === 'yes' || age === 'y'){
//  alert('you are welcom'); 
// //console.log(age);
// score++;
// }else{
//     alert(' Sorry, you\'r young person'); 
//    // console.log(age);
// }



// //Have a car
// let car= prompt('Do you have a car ?');
// car=car.toLowerCase();
// if(car === 'yes' || car === 'y'){
//   alert('congratulation  ' );
//  // console.log(car);
//  score++;
// }else{
//     alert('I hope to own one ' );
//  // console.log(car);
// }



// // Your feelings
// let feelings=prompt('Are you good ?');
// feelings=feelings.toLocaleLowerCase();
// if(feelings === 'yes' || feelings === 'y' ){
// alert('glad you are good' );
// //console.log(feelings);
// score++;
// }else{
//     lert(' I am sad for you');
//     //console.log(feelings);  
// }



// // Gess number
// for (let x = 0; x < 5; x++) {
//   let guessnum = prompt('Guess a number between 1-20 ?');
//   guessnum = parseInt(guessnum);

//   if (guessnum == 8) {
//       alert('Correct! Great Job.');
//       score++;
//       break;
//   }
//   else if (guessnum > 8) {
//       alert(' too high');
//   }
//   else if (guessnum < 8){
//       alert('too low');
//   }
//   else {
//       alert('Enter right value');
//   }

//   //Test Number of attempts
//   if (x == 4) {
//       alert('Wrong answer the right answer is 8');
//   }
// }




// The animals array
  let animalsArr = ['dog', 'cat', 'wolf', 'tiger', 'dolphin', 'penguin', 'hourse', 'lion', 'fox', 'elephant'];
  
  attemptsLoop: for (let a = 0; a< 6; a++) {
      let animal = prompt('What is my favorite animals ?');
      for (let b = 0; b<animalsArr.length; b++) {
          if (animal == animalsArr[b] ) {
              alert('Nice Job');
              // console.log(animalsArr);
              scores++;
              break attemptsLoop;
          }
          
      }

      
      if (a == 5) {
          alert('My animals:');
          break;
      }
  }

  //Test Number of attempts
  if (x == 5) {
    alert('My animals: (dog, cat, wolf, tiger, dolphin, penguin, hourse, lion, fox, elephant)');
}


alert(`Perfect, thanks for answering ${name}. Your scored ${score} /7 `);









  
  