let upper=document.getElementsByClassName("deck");
/*
 * Create a list that holds all of your cards
 */
let low=document.getElementsByClassName("card");
let lowList=[...low];
let timeTiming=0;
let time=0;
let timeState=document.getElementById("time");
let moves=0;
let movesSection=document.getElementById("moves");
let cardStore=[];
let starCount=3;
let seconds=0;
let minutes=0;
let hours=0;
let starSection=[...document.getElementsByClassName("fa-star")];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
window.onlod=intoGame();
function intoGame(){
var endedCards=shuffle(lowList);

for(var i=0;i<endedCards.length;i++){
  upper[0].append(endedCards[i]);
}
}
for(var i=0;i<lowList.length;i++){
  lowList[i].addEventListener("click",viewCard);
}
function viewCard(){
  if (timeTiming==0){
    startTimer();
    timeTiming=timeTiming+1;
  }
  this.classList.add("card");
  this.classList.add("open");
  this.classList.add("show");
  this.classList.add("disable")
  cardStore.push(this);
  if(cardStore.length==2){
    moves=moves+1;
    movesSection.innerHTML=moves;
    starGrade();
    if (cardStore[0].children[0].classList.item(1) == cardStore[1].children[0].classList.item(1)) {

      // console.log("match");
      cardStore[0].classList.add("match","disable");
      cardStore[1].classList.add("match","disable");
      if(cardMatched.length==16){
        clearInterval(time);

        Swal.fire({
             title: "Well done!",
             html: 'you have  earned <strong style="color:#882DD3; text-shadow:3px 3px 3px #000">'+starCount+' <i class="fa fa-star"></i> </strong> <br> And you completed this game with the time of '+hours+'hours:'+minutes+'minutes:'+seconds+'seconds <br>'+'Moves taken to complete the game :'+moves,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Restart',
}).then(()=>{
  document.location.reload();
});
      }
      cardStore=[];
    }
    else
    {
      cardStore[0].classList.add("unmatch");
      cardStore[1].classList.add("unmatch");
      cardStore.map((card)=>{
        setTimeout(()=>{
          card.classList.remove("unmatch","open","show","disable");
        },200);
      })
      cardStore=[];
    }
  }
}
var cardMatched=document.getElementsByClassName("match");
//start time
function startTimer(){
  time=setInterval(()=>{
    seconds=seconds+1;
    if(seconds==59){
      seconds=0;
      minutes=minutes+1;
    }
    if(minutes==59){
    hours=hours+1;
  }
  timeState.innerHTML=hours+" : "+minutes+" : "+seconds;
  },1000)
}
//to refresh
function refresh(){
document.location.reload();
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 // to give the rating
 function starGrade(){
   if(moves>13 && moves<=19){
     starCount=2;
     starSection[2].style.display="none";
   }
   if(moves>19){
     starCount=1;
     starSection[1].style.display="none";
   }
 }
