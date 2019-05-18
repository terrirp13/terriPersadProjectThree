
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
  const $card = $("<div>").attr("class", "card front");
  // const $front = $("<div>").attr("class", "front");
  const $flip = $("<div>")
    .attr("class", "back")
    .attr('data-set', item.class);
  
  const $image = $("<img>")
    .attr("src", item.img)
    .attr("class", "frog");

  // $card.append($front)
  $card.append($flip)
  $flip.append($image);
  $game.append($card);

});

  let firstClick = '';
  let secondClick = '';
  let click = 0;
  let tries = 4;

  const reset = () => {
    firstClick = '';
    secondClick = '';
    click = 0;
  
    $('.selectedCard').removeClass('selectedCard');
  }

  const cardMatch = () => {
    let $selectedCard = $('.selectedCard')
    console.log($selectedCard)
    $selectedCard.addClass('cardMatch')
  }
 
$(".card").on("click", function() {

  let clicked = $(this);
  // console.log(this);
  if (clicked.element === "section" || clicked.hasClass('selectedCard')) {
    return;
  } 
  // clicked.classList.add('selected');

  if (click < 2) {
    click++;

    if(click === 1) {
      firstClick = $(this).children("div").data("set");
    } else {
      secondClick = $(this).children("div").data("set");
    }
  
    clicked.addClass('selectedCard') //added class so only two cards will be "selected"
    if (firstClick !== '' && secondClick !== ''){
      // console.log(firstClick, secondClick)
      if(firstClick === secondClick) {
        cardMatch();
      } else {
        tries--;
      }

      if (tries === 0) {
        console.log('GAME OVER');
      } else {
        console.log('reset')
        reset();
      }
    }
  }
 

  //class cardMatch will make the selected cards disapper if there is a match. Function cardMatch will be called above in the click event. 
 
  
})

})

