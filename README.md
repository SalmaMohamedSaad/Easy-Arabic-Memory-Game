# Easy Arabic Memory Game

## Step 1: One Card Handling

1. Create an index.html file
2. Create a div container that will hold all the game cards in the future give it the ID Container
3. Create a Message div to display the status of the game, initiate it with "Let's Start!" message
4. Create a Card div that includes both cards sides give it the **_classes Cards and Flipped _**
5. Create two divs inside Card div, one for Front and one for Back with different text and give them the classes name Front and Back
6. Give each of the two divs the id of the card number hyphenated with its side, Ex. **_ Front-1, Back-1_**
7. Create a button give it the ID Start
8. Create a button give it the ID Reset and make it hidden
9. Create a style.css file and link it to our index.html file
10. Set the backface-visibility of both Front and Back classes to **hidden**
11. Set the Front class transform property to 180deg on the Y rotation angle at the beginning of the game in order to display the card with the letter to the user
12. Add an event listener to the Button Start that will do the following:

- Flip the card on its Back side for the game to start by changing the Front class transform property to -180deg
- Change the status of the card by removing the class Flipped from the Card
- Change the message displayed to "Game on!"
- Hide the Start button
- Show the button Reset

12. Add an event listener to all Card divs that will do the following:

- Check the clicked Card for the class **_Flipped_**
- If it exist then it will return as user is not allowed to flip back a card
- If it doesn't exist it will add it to the Card, and flip the card on its Front side by changing the Front class transform property to 180deg
