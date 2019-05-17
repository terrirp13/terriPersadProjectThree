
const flipCardArray = [
    {
        title: "happy frog",
        class: "happy frog",
        img: "./assets/frogSmile.svg"
        
    },
     {
        title: "sad frog",
        class: "sad frog",
        img: "./assets/frogSad.svg"
    },
     {
        title: "shocked frog",
        class: "shockedFrog",
         img: "./assets/frogShocked.svg"
    },
    {
        title: "girl frog sad",
        class: "girl frog sad",
        img: "./assets/girlFrogSad.svg"
    },
    {
        title: "girl frog happy",
        class: "girl frog happy",
        img: "./assets/girlFrogSmile.svg"

    },
    {
        title: "girl frog shocked",
        class: "girl frog shocked",
        img: "./assets/girlFrogShocked.svg"
    },
      {
        title: "happy frog",
        class: "happy frog",
        img: "./assets/frogSmile.svg"
        
    },
     {
        title: "sad frog",
        class: "sad frog",
        img: "./assets/frogSad.svg"
    },
     {
        title: "shocked frog",
        class: "shockedFrog",
         img: "./assets/frogShocked.svg"
    },
    {
        title: "girl frog sad",
        class: "girl frog sad",
        img: "./assets/girlFrogSad.svg"
    },
    {
        title: "girl frog happy",
        class: "girl frog happy",
        img: "./assets/girlFrogSmile.svg"

    },
    {
        title: "girl frog shocked",
        class: "girl frog shocked",
        img: "./assets/girlFrogShocked.svg"
    }
]

const $memoryGame = $('#memory');
const $game = $("<section>").attr('class', 'game');
$memoryGame.append($game);


    
$(function(){
// //shuffle cards each time page reloads
function shuffle(array) { //this code is from stack overflow
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
 
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
 
const shuffledCards = shuffle(flipCardArray); //calling shuffle of flipCardArray in variable shuffledCards

//this prints the cards to the screen 
shuffledCards.forEach(item => {
  const $flip = $("<div>").attr("class", "card");
  const $image = $("<img>")
    .attr("src", item.img)
    .attr("class", "frog");
  $flip.append($image);
  $game.append($flip);
});
$(".card").on("click", function() {
    console.log('clicked');


    
})


})