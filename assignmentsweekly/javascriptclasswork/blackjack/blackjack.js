// cashing out global variables to be called 
const VALUES = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"]; // creates a constant array named VALUES that contains the possible card values in a deck of cards.
const SUITS = ["hearts", "spades", "clubs", "diamonds"]; //  creates a constant array named SUITS that contains the possible card suits in a deck of cards.
const DEALER = document.getElementById("dealer"); // gets the DOM element with an ID of "dealer" and assigns it to a constant variable named DEALER.
const PLAYER = document.getElementById("player"); // gets the DOM element with an ID of "player" and assigns it to a constant variable named PLAYER.
const HIT_BUTTON = document.getElementById("hit-button"); // gets the DOM element with an ID of "hit-button" and assigns it to a constant variable named HIT_BUTTON.
const PASS_BUTTON = document.getElementById("pass-button"); // gets the DOM element with an ID of "pass-button" and assigns it to a constant variable named PASS_BUTTON.
const BUTTON_CONTAINER = document.getElementById("button-container"); // gets the DOM element with an ID of "button-container" and assigns it to a constant variable named BUTTON_CONTAINER.
const NOTICE = document.getElementById("notice"); // gets the DOM element with an ID of "notice" and assigns it to a constant variable named NOTICE.
const NEX_HAND_BUTTON = document.getElementById("next-hand-button"); //  gets the DOM element with an ID of "next-hand-button" and assigns it to a constant variable named NEXT_HAND_BUTTON.
const messageEl = document.querySelector("#message"); // gets the first DOM element that matches the CSS selector #message and assigns it to a constant variable named messageEl.


// cashing variables that we changed throughout the code , or added , or manipulated
let playerHand = []; //  initializes a variable named playerHand to an empty array.
let dealerHand = []; //  initializes a variable named dealerHand to an empty array.
let allDecks = []; // initializes a variable named allDecks to an empty array.
let dealerSum = 0; // initializes a variable named dealerSum to 0.
let playerSum = 0; //  initializes a variable named playerSum to 0.
let dealerAceCount = 0; // line of code initializes a variable called dealerAceCount to a value of 0. This variable will be used to keep track of the number of Aces the dealer has in a game of Blackjack.
let playerAceCount = 0; //  line of code declares a variable called playerAceCount using the let keyword. It also initializes the variable to a value of 0. This variable will be used to keep track of the number of Aces the player has in a game of Blackjack.


// decalring a variable which contains a function of deck of cards - using function taking no paramaters using nexted loop. function is a helper function used to create an array of cards in a standard deck.
const createDeck = () =>{ // defines an arrow function called createDeck. this function is being written out and is not called yet
    const deck = []; // define it calls empty array.  initializes an empty array called deck that will store all the cards in the deck.
    SUITS.forEach((suit) =>{ // loops through each suit in the SUITS array (which contains the four suits in a deck of cards: spades, hearts, clubs, and diamonds).
        VALUES.forEach((value) => { //nested loop looping through value deck. nested loop that loops through each value in the VALUES array (which contains the 13 card values: 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, and ace).
            const card = value + "_of_" + suit; // concatenates the value, "_of_", and suit strings together to create the full name of the card (e.g., "2_of_spades", "king_of_hearts", etc.).
            deck.push(card)  // for each card that we create push card into the empty deck. adds the newly created card string to the deck array.
        })
    })

    //console.log("check deck", deck)

    return deck; //9. returns the completed deck array after all cards have been added to it. The resulting deck array will contain 52 strings, each representing a unique card in a standard deck of playing cards. This is in scoope. 

}

// shuffled several decks to make a large deck in order for it to be harder to guess what next deck will be . function takes in a number num as an argument and creates a new shuffled deck of cards num times, and then adds those cards to the allDecks array.
 const shuffleDecks = (num) =>{ // declares a function called shuffleDecks that takes in a parameter.  num passing in the num 5 
    //console.log("shuffleDeck()")
    for(let i=0; i< num; i++){ //  is a loop that will run num(5) times.
        const newDeck = createDeck() // this should be equal to an array of all the cards. calling creare deck function .  creates a new deck of cards by calling the createDeck function and assigning the returned value to the newDeck variable.
        //console.log("newDeck:", newDeck) //works
        allDecks = [...allDecks, ...newDeck]// uses the spread operator ... to spread the contents of the allDecks array and the newDeck array into a new array that replaces the contents of allDecks. This creates a larger array that includes all of the cards from the previous decks as well as the new deck.

    }
 }

// Function selects a random card from the allDecks array, removes it from the array, and returns it to the calling function.
const selectRandomCard = () =>{ // function declaration using arrow function syntax.
   const randomIndex = Math.floor(Math.random() * allDecks.length); // generates a random integer between 0 (inclusive) and the length of allDecks array (exclusive) using Math.random() and rounds it down to the nearest integer using Math.floor(). This index will be used to select a random card from allDecks.
   //console.log("allDecks:", allDecks);
   const card = allDecks[randomIndex] // select card using random index.  selects a card at the randomly generated randomIndex from the allDecks array and assigns it to the card variable.
    allDecks.splice(randomIndex, 1) // remove card element at an index using splice. removes the card element at the randomly generated index from allDecks array using the splice() method. The second argument 1 specifies how many elements should be removed from the array.
    //console.log(randomIndex);

    //console.log("selectCard", card)
   return card // returns the selected random card from allDecks array to the calling function
   //console.log(randomIndex)
}

function getValue(card) { //  declares a function named getValue that takes in a parameter card.
    console.log("i am trying to split _of_: ", card) // logs a message to the console with the value of card.
    let data = card.split("_of_"); // declares a variable named data and assigns it the result of splitting the card parameter on the string "of". For example, if card is "10_of_spades", data will be an array containing the strings "10" and "spades".
    let value = data[0]; // declares a variable named value and assigns it the first element of the data array. In the example above, value would be "10"
  
    switch (value) { // checks the value of value and assigns a corresponding value to value.
      case "ace":
        value = 11; // If value is "ace", value is set to 11.
        break;
      case "king":
      case "queen":
      case "jack":
        value = 10; // If value is "king", "queen", or "jack", value is set to 10.
        break;
      default:
        if (isNaN(value)) { //isNaN = is not a number
          value = 10; // If value is not a number, value is set to 10.
        }
        break;
    }
  
    return parseInt(value); // parseInt(value); returns the integer value of value.
  }
  

function reduceAce(playerSum, playerHand) { // declares a function named reduceAce that takes in two parameters: playerSum and playerHand.
    let playerAceCount = 0; // declares a variable named playerAceCount and assigns it a value of 0.
    playerHand.forEach(c => { // loops through each element in the playerHand array and declares a variable c to hold the current element
        if( "ace" == c.split("_of_")[0] ){ //  checks if the first element of the c array (which was split on "of") is equal to the string "ace". If it is, the playerAceCount variable is incremented by 1.
            playerAceCount = playerAceCount + 1;
        }
    })

    while (playerSum > 21 && playerAceCount > 0) { // creates a loop that continues while the playerSum variable is greater than 21 and the playerAceCount variable is greater than 0.
        playerSum -= 10; // subtracts 10 from the playerSum variable. so if you are over 21 it will subtract 10 resulting in your ace value to be 1 instead of 11 . 
        playerAceCount -= 1; // decrements the playerAceCount variable by 1.
    }
    return playerSum; // returns the value of the playerSum variable.
}
  


const dealHands = () => {
    //console.log("deal hand")
    dealerHand = [selectRandomCard(), selectRandomCard()]; // array with two cards for dealer, holding two cards at 0 and index 1
    //console.log("dh:",dealerHand); This line initializes the dealerHand array with two random cards selected from the shuffled deck.


    dealerHand.forEach((card) => { // This line iterates over each card in the dealerHand array and performs the following actions on each card:
        console.log("card:", card)
      let cardImg = document.createElement("img"); //This line creates a new img element.
      cardImg.setAttribute("src",  "./images/" + card + ".png"); // sets the src attribute of the img element to the appropriate image file for the current card.
      dealerSum += getValue(card); //value of our hand. adds the value of the current card to the dealerSum variable.
      //console.log("cardImg:", cardImg)
      DEALER.appendChild(cardImg); //  appends the img element to the DEALER div in the HTML document.
    });
  
    playerHand = [selectRandomCard(), selectRandomCard()]; // array with two cards for player. initializes the playerHand array with two random cards selected from the shuffled deck
    console.log("ph:",playerHand);
    playerHand.forEach((card) => { // iterates over each card in the playerHand array and performs the following actions on each card:
        let cardImg = document.createElement("img"); // creates a new img element.
        cardImg.setAttribute("src",  "./images/" + card + ".png"); // sets the src attribute of the img element to the appropriate image file for the current card.
        playerSum += getValue(card); // adds the value of the current card to the playerSum variable.
        console.log("cardImg:", cardImg)
       PLAYER.appendChild(cardImg); // appends the img element to the PLAYER div in the HTML document.
    });
    
 
  };
  
 
  function hit() {
    let card = allDecks.pop(); // get a card from the deck
    console.log("hit");
    console.log(playerHand.length, playerHand);  // log the length of the player's hand and the contents of the player's hand to the console
    if ( playerSum >= 21) { // if the player's sum is greater than or equal to 21, they cannot hit again
      console.log("player is over or equal to 21: ", playerSum)
      return; // return from the function
    }
    let cardImg = document.createElement("img"); // create an empty image element
    cardImg.setAttribute("src",  "./images/" + card + ".png");  // set the image source attribute to the corresponding card image file
    playerHand.push(card); // add the card to the player's hand
    playerSum += getValue(card); // add the value of the card to the player's current sum
    console.log("playerSum: ", playerSum) // log the player's current sum to the console
    document.getElementById("player").append(cardImg); // add the image element to the player's hand display on the webpage
    if (reduceAce(playerSum, playerHand) > 21) { // if the player's sum is over 21 after reducing the value of any aces they have, they lose
      messageEl.textContent = "you lose"; // set the text content of the message element to "you lose"
      console.log("lose") // log "lose" to the console
    }
  }
  

  function stay() {
    if(dealerSum < 16){ // if the dealer's sum is less than 16, they must draw another card
        //dealer draws a card
        let card = allDecks.pop(); // get a card from the deck
        let cardImg = document.createElement("img"); // create an empty image element
        cardImg.setAttribute("src",  "./images/" + card + ".png"); // set the image source attribute to the corresponding card image file
        dealerSum += getValue(card); // add the value of the card to the dealer's current sum
        document.getElementById("dealer").append(cardImg); // add the image element to the dealer's hand display on the webpage
        stay(); // call the `stay` function again to check if the dealer needs to draw another card (this is called a recursive function)

    } else {

        if(dealerSum > 21 || ( playerSum > dealerSum && playerSum <= 21) ){ // if the dealer's sum is over 21 OR the player's sum is greater than the dealer's and less than or equal to 21, the player wins

            messageEl.textContent = "You're the winner! Congrats!"; // set the text content of the message element to "Winner Winner Chicken Dinner!"
        }else if(playerSum > 21 || playerSum < dealerSum){ //only one has to be true || or statement // if the player's sum is over 21 OR the player's sum is less than the dealer's, the player loses 
            messageEl.textContent = "Sorry you lost"; // set the text content of the message element to "You Lose!"
        }else if(playerSum == dealerSum){ // if the player's sum is equal to the dealer's, it's a tie
            messageEl.textContent = "Tie!"; // set the text content of the message element to "Tie!"
        }

    }
}


function nextGame() {
    //empty the hands
    playerHand = dealerHand = []; // empty the player's and dealer's hands by assigning an empty array to each variable
    dealerSum = playerSum = 0; //reset the dealer's and player's sums to 0
    DEALER.textContent = ""; // clear the dealer's hand display on the webpage
    PLAYER.textContent = ""; // clear the player's hand display on the webpage
    shuffleDecks(5); // 5 decks that are shuffled together 
    dealHands(); // deal the initial hands
    messageEl.textContent = ""; // clear the message element on the webpage


}
  
  // event listeners for buttons 
HIT_BUTTON.addEventListener("click", hit);
PASS_BUTTON.addEventListener("click", stay);
NEX_HAND_BUTTON.addEventListener("click",nextGame)





// calling functions to execute 
shuffleDecks(5); // 5 decks that are shuffled together 
dealHands();
nextGame();

// study notes 
// *hide one of dealer cards
// give the option to hit or pass 
// -if hit add card
// -if pass let dealer player 
// determine the winner 
// deal the next hand 

