// alert("Enter your Symbols first!")
// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');
// input1.addEventListener('blur',(event)=>{
//     console.log(event.target.tagName);
//         document.getElementById('symbol1').innerHTML = input1.value;
      
//         if (input1.value !== ""){
//             input1.remove()
//         }
//     })
//     input2.addEventListener('blur',(event)=>{
//         console.log(event.key);
//         document.getElementById('symbol2').innerHTML = input2.value;
//         console.log(input2.innerHTML !== "")
//         if (input2.value !== ""){
//             input2.remove()
//         }
        
//     })

let winFlag = false ;
//Variable for getting Node List
let elements ;
//A 2-dimensional  array of the patterns of wining scenarios
const array = [[1,5,9],[3,5,7],[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9]];
var count = 0 ;
//Badge
const badge = document.querySelector('.result');
badge.classList.add('no-display');
//Buttons
const buttonO = document.getElementById('butto');
const buttonX = document.getElementById('buttx');
buttonO.classList.add('no-display');
buttonX.classList.add('no-display');
const button = document.getElementById('butt');
button.addEventListener('click', function (){
    button.classList.add('no-display');
    buttonO.classList.remove('no-display');
    // count % 2 === 0 ? buttonO.classList.remove('display'):buttonX.classList.remove('display');
    buttonO.classList.remove('no-display');
    elements = document.querySelectorAll('.box');
    elements.forEach( function (elem){ //Name of node list and name of parameter shouldn't be same!
        elem.addEventListener('click',function (event){
            console.log(count , 'count')
            currBox = event.target ; 
            if(count >=2 ){
                winnerCheck();
            }
            if( currBox.innerHTML === "" ){
                var check = count % 2 ;
                var wordshow ;
                if(check === 0 ){
                    wordshow = "o";
                    currBox.style.color = "#48D2FE";
                    buttonO.classList.add('no-display');
                    buttonX.classList.remove('no-display');
                    // statuss.innerHTML = "Player 2 turn";
                }
                else{
                    buttonO.classList.remove('no-display');
                    buttonX.classList.add('no-display');
                    wordshow = "x";
                    currBox.style.color = "#E2BE00";
                    // statuss.innerHTML = "Player 1 turn";
                }
                currBox.innerHTML = wordshow ;
                count++ ;
            }
            else{
                // alert('Enter Symbols or Place is already filled')
            }
            // buttonO.classList.add('display');
            // buttonX.classList.add('display');
        })
    })
}) 
// const elements = document.querySelectorAll('.box');
//Variable to get box  which is clicked
let currBox ;
//Variables to show Plater's selected Symbols
// const player1Symbol = document.getElementById('symbol1') ;
// const player2Symbol =  document.getElementById('symbol2') ;
//Variable to show Player's status
// const statuss = document.getElementById('status');
// //A 2-dimensional  array of the patterns of wining scenarios
// const array = [[1,5,9],[3,5,7],[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9]];
// var count = 0 ;
// elements.forEach( function (elem){ //Name of node list and name of parameter shouldn't be same!
//     elem.addEventListener('click',function (event){
//         console.log(count , 'count')
//         currBox = event.target ; 
//         if( currBox.innerHTML === "" ){
//             var check = count % 2 ;
//             var wordshow ;
//             if(check === 0 ){
//                 wordshow = "o";
//                 currBox.style.color = "#48D2FE";
//                 // statuss.innerHTML = "Player 2 turn";
//             }
//             else{
//                 wordshow = "x";
//                 currBox.style.color = "#E2BE00";
//                 // statuss.innerHTML = "Player 1 turn";
//             }
//             currBox.innerHTML = wordshow ;
//             count++ ;
//             if(count >=2 ){
//                 winnerCheck();
//             }
//         }
//         else{
//             // alert('Enter Symbols or Place is already filled')
//         }
//     })
// })
function winnerCheck(){
    console.log('winner check');
   for ( let i = 0 ; i < array.length ; i++){
       let j = 0 ;
           const b1 = elements[array[i][j] - 1];
           const b2 = elements[array[i][j + 1] - 1 ];
           const b3 = elements[array[i][j + 2] - 1];
           if ( (b1.innerHTML == 'o' && b2.innerHTML == 'o' && b3.innerHTML == 'o') || (b1.innerHTML == 'x' && b2.innerHTML == 'x' && b3.innerHTML == 'x')){
               winFlag = 1 ;
               console.log(b1,b2,b3);
            //    statuss.innerHTML = "Player with "+b1.innerHTML+" symbol wins!";
            //    document.querySelector('.tictactoe').preventDefault();
            //    for(let i = 0 ; i < elements.length ; i++){
            //        elements[i] .innerHTML = "";
            //    }
            //    document.querySelector('.tictactoe').classList.add('no-display');
            //    statuss.innerHTML = "Player 1 turn";
            //    count = 0 ;
            }
        }
    }
    // const res = document.querySelector('#butt');
    // res.addEventListener('click' , function (){
    //     document.querySelector('.tictactoe').classList.remove('no-display');
    //     for(let i = 0 ; i < elements.length ; i++){
    //         elements[i] .innerHTML = "";
    //     }
    //     count = 0 ;
    //     statuss.innerHTML = "Player 1 turn";
    // })
// function game(parameter1) {
//     console.log("game");
//     for ( let i = 1 ; i <= elem.length ; i++ ){
//         if ( i == parameter1 ){
//             currBox = elem[i - 1];
//         }
//     }
//     if( player1Symbol.innerHTML !=="" && player2Symbol.innerHTML !=="" && currBox.innerHTML === "" ){
//         var check = count % 2 ;
//         var wordshow ;
//         if(check === 0 ){
//             wordshow = player1Symbol.innerHTML;
//             statuss.innerHTML = "Player 2 turn";
//         }
//         else{
//             wordshow = player2Symbol.innerHTML;
//             statuss.innerHTML = "Player 1 turn";
//         }
//         currBox.innerHTML = wordshow ;
//         count++ ;
//     }
//     else{
//         alert('Enter Symbols or Place is already filled')
//     }
// }
// function winnerCheck(event){
//      console.log('winner check');
//     for ( let i = 0 ; i < array.length ; i++){
//         let j = 0 ;
//             const b1 = elem[array[i][j] - 1];
//             const b2 = elem[array[i][j + 1] - 1 ];
//             const b3 = elem[array[i][j + 2] - 1];
//             if ( (b1.innerHTML == player1Symbol.innerHTML && b2.innerHTML == player1Symbol.innerHTML && b3.innerHTML == player1Symbol.innerHTML) || (b1.innerHTML == player2Symbol.innerHTML && b2.innerHTML == player2Symbol.innerHTML && b3.innerHTML == player2Symbol.innerHTML)){

//                 console.log(b1,b2,b3);
//                 alert('Player wins');
//                 for(let i = 0 ; i < elem.length ; i++){
//                     elem[i] .innerHTML = "";
//                 }
//                 document.querySelector('.tictactoe').classList.add('no-display');
//                 statuss.innerHTML = "Player 1 turn";
//                 count = 0 ;
//             }
//     }
// }