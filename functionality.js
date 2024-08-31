//Variable to determine Winner
let winner ;  
//Variable for win and draw
let winFlag = false ;
//Win msg 
const winmsg = document.querySelector('.win-msg');
//Variable for getting Node List
let elements ;
//Variable to get box  which is clicked
let currBox ;
//A 2-dimensional  array of the patterns of wining scenarios
const array = [[1,5,9],[3,5,7],[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9]];
//Variable to track turns of players
let count = 0 ;
//Variable to track record of winning and drawing 
let winO = 0 ;
let draw = 0 ;
let winX = 0 ;
const winningO = document.querySelector('.msg-winO');
const drawing = document.querySelector('.msg-draw');
const winningX = document.querySelector('.msg-winX');
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
    elements = document.querySelectorAll('.box');
    elements.forEach( function (elem){ //Name of node list and name of parameter shouldn't be same!
        elem.addEventListener('click',function (event){
            console.log(count , 'count')
            currBox = event.target ; 
            if( currBox.innerHTML === "" ){
                var check = count % 2 ;
                var wordshow ;
                if(check === 0 ){
                    wordshow = "o";
                    currBox.style.color = "#48D2FE";
                    buttonO.classList.add('no-display');
                    buttonX.classList.remove('no-display');
                }
                else{
                    buttonO.classList.remove('no-display');
                    buttonX.classList.add('no-display');
                    wordshow = "x";
                    currBox.style.color = "#E2BE00";
                }
                currBox.innerHTML = wordshow ;
                count++ ;
                if(count >=2 && count <10 && winFlag === false){
                    winnerCheck();
                }
                else if ( count === 9 && winFlag !== true ) {
                    badge.classList.remove('no-display')   
                    draw++;
                    drawing.innerHTML = draw ;
                    winmsg.innerHTML = "Game Over. Its a Draw!"
                    buttonX.classList.add('no-display');
                }
            }
        })
    })
}) 
function winnerCheck(){
    console.log('winner check');
   for ( let i = 0 ; i < array.length ; i++){
       let j = 0 ;
           const b1 = elements[array[i][j] - 1];
           const b2 = elements[array[i][j + 1] - 1 ];
           const b3 = elements[array[i][j + 2] - 1];
           if (b1.innerHTML == 'o' && b2.innerHTML == 'o' && b3.innerHTML == 'o'){
               winFlag = true ;
               winner = 'o';
               buttonX.classList.add('no-display');
               badge.classList.remove('no-display')   
               winmsg.innerHTML = "Game Over. Player O Wins!"
               winO++;
               winningO.innerHTML = winO;
            }
            else if (b1.innerHTML == 'x' && b2.innerHTML == 'x' && b3.innerHTML == 'x'){
                winFlag = true ; 
                winner = 'x'
                badge.classList.remove('no-display')   
                buttonO.classList.add('no-display');
                winmsg.innerHTML = "Game Over. Player X Wins!"
                winX++;
                winningX.innerHTML = winX;
            }
        }
    }