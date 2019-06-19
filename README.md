# Memory Game Project
  While playing this game I enjoyed a lot and I learned advanced JavaScript concepts DOM manipulations and object oriented concepts.

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
------------
## The steps followed to complete this Project

### Cloning of the project

After followed through the instructions, Then after I got a GitHub link of skeleton project i.e., provided by **Udacity** in rubric structure https://github.com/udacity/fend-project-memory-game .
I downloaded this project through GitHub and extracted this project.
The total files are provided in this project are:
      -`app.css`
      -`app.js`
      -`geometry2.png`
      -`index.html`
      -`README.md`
      -`CONTRIBUTING.md`
## To develop this project I done the below steps

- To reload I used `refresh()` function to reloading the page.
- I used `spread operator` to get all cards in the array list.
- After that I shuffled the cards.
- Whenever I clicked a card, open and show that card.
- Created the `startTimer()` function  to count time.
- Time count will start when we click on the card.
- Timer count is given in `hours, minutes and seconds`.
- After clicked two cards i developed logic for `if two cards are matched then matched otherwise unmatched`.
- If cards are matched the match length will increased.
- If `cardMatched` length is equal to 16 game will complete.
- After the  completion of game the timer should stopped.
- Give the stars to the game to know in which way you completed the game.
- Give the stars according to the moves.
- By using function `starGrade()`, If I used less than 13 moves the I gets 3stars, If I used moves in between 14 and 19 I gets 2stars else I get one star.
- After completion of game I used `sweet alert` to show the pop up of ending game with Stars count,Time duration to complete game and number of moves taken to complete the game.
