
const flipCardArray = [
    {
        title: "happy frog",
        class: "happyFrog",
        img: "./assets/frogSmile.svg"
        
    },
     {
        title: "sad frog",
        class: "sadFrog",
        img: "./assets/frogSad.svg"
    },
     {
        title: "shocked frog",
        class: "shockedFrog",
         img: "./assets/frogShocked.svg"
    },
    {
        title: "girl frog sad",
        class: "girlFrogSad",
        img: "./assets/girlFrogSad.svg"
    },
    {
        title: "girl frog happy",
        class: "girlFrogHappy",
        img: "./assets/girlFrogSmile.svg"

    },
    {
        title: "girl frog shocked",
        class: "girlFrogShocked",
        img: "./assets/girlFrogShocked.svg"
    },
      {
        title: "happy frog",
        class: "happyFrog",
        img: "./assets/frogSmile.svg"
        
    },
     {
        title: "sad frog",
        class: "sadFrog",
        img: "./assets/frogSad.svg"
    },
     {
        title: "shocked frog",
        class: "shockedFrog",
         img: "./assets/frogShocked.svg"
    },
    {
        title: "girl frog sad",
        class: "girlFrogSad",
        img: "./assets/girlFrogSad.svg"
    },
    {
        title: "girl frog happy",
        class: "girlFrogHappy",
        img: "./assets/girlFrogSmile.svg"

    },
    {
        title: "girl frog shocked",
        class: "girlFrogShocked",
        img: "./assets/girlFrogShocked.svg"
    }
]

const $memoryGame = $('#memory');
const $game = $("<section>").attr('class', 'game');
$memoryGame.append($game);

   
$(function(){

// //shuffle cards each time page reloads
function shuffle(array) { //this code is from stack overflow
  let currentIndex = array.length;
  let temporaryValue;
   let randomIndex;

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
  const $card = $("<div>").attr("class", "card");
  // const $front = $("<div>").attr("class", "front");
  const $flip = $("<div>").attr("class", "back").attr("class", item.class);
  const $image = $("<img>")
    .attr("src", item.img)
    .attr("class", "frog");

  // $card.append($front)
    $card.append($flip)
  $flip.append($image);
  $game.append($card);

});

  let firstClick = ''
  let secondClick = ''
  let count = 0

$(".card").on("click", function() {
  let clicked = this;
  // console.log(this);
    if (clicked.element === "section" || clicked.class === "selected") {
  return;
} 
// clicked.classList.add('selected');

  if (count < 2) {
    count++;

    if(count === 1);
    firstClick = clicked.card.div.class;
    console.log(firstClick);

    clicked.classList.add('selectedCard') //added class so only two cards will be "selected"
    //when I use .addClass it does not work. 
  }

  //class cardMatch will make the selected cards disapper if there is a match. Function cardMatch will be called above in the click event. 
  const cardMatch = () => {
    let $selectedCard = $('.selectedCard')
    
    $selectedCard.forEach(card => {
      card.classList.add('cardMatch')
    })
  }
  
})

})