# platform-game(Endless Runner)

> An online platform game created using the Phaser framework. It's an endless running game where the player jumps over gaps of different widths whiles picking coins to accumulate  more points.

## Live Demo

[Click here](https://) to launch and play.

## Built with

* Phaser3
* Webpack
* Javascript
* Eslint
* Babel
* Jest testing framework
* [Leaderboard API service](https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3) - saving and fetching players' scores

## Getting Started

### Getting a local copy

> To clone the repository, copy the project's remote url and in your terminal, do the following.

1. ```bash git clone <https://github.com/JelilFaisalAbudu/platform-game.git>```

2. Navigate to the directory you've clone the project into and open it in your favorite code editor

> Downloading the zip file of the project

1. Click the zip icon from the dropdown menu to download the zip file onto your machine.

2. Unzip the downloaded file and open it using your favorite code editor

### Installations

Make sure you have node.js installed on you machine.
To check whether or not you have node.js installed on your machine, run ```node -v``` in your terminal.
If everything went well, you should see a terminal output that indicates the version of the installed node.
Otherwise, [click this](https://nodejs.org/en/download/) link to install one before you proceed.

* Run the following commands in your terminal.

1.```npm install``` to install the project's dependencies

2.```npm start``` to start the development server and also open the game in your browser.

## Unit Test

* Run ```npm run test``` to test code and also any future test you may write.

## About the game

This game is an endless runner game. The player has to jumps over several a gap between two landing platforms.

For the player to continue with his endless journey, he has to jump over each fireball that he meets on his in addition to jumping to cross the gaps between the landing platforms.

### How to Play

#### Controllers

The game is basically controlled using the click function of any clicking device of the computer. This can be the touch pad, mouse and other related device.

As the character starts running, every click makes the character to jump. Double clicking lets the character jumps as twice higher as a single click.

#### Accumulating points

To accumulate point, make sure you collect as many coins as you can. Jumping to meet the coins at their position would automatically get you your point. Each coin may carry different point with it.

## Game screenshots

![input](assets/game-screenshots/login-shot.png)
![menu](assets/game-screenshots/menu-shot.png)
![gameplay](assets/game-screenshots/game-play-shot.png)
![gameover](assets/screenshots/gameover.png)
![leaderboard](assets/game-screenshots/leaderboard-shot.png)

## Game Design & Development

To get started with the development of the project and considering how all the tools needed to build a working simple game like an endless runner. I had to first learn about video games and the basics of Phaser Game Library.

I also learnt create the game template using the a tutorial from [Zenva](https://phasertutorials.com/creating-a-phaser-3-template-part-3/)

### The design process

The game design took a simple storyline. It is a single player game with having only one character.

There are six scenes in the game - preloader scene, login scene, menu scene, options scene, leader board scene and game-play scene.

* All the game's assets load in the preloader scene.
* In the login scene, the player inputs  a username that would be used to display his scores in the leader board scene.
* The menu scene displays a list of buttons that send the user to other scenes/sub-menus. These include buttons to start and play the game, button to display the leader board and the like.
* The options scene allows the player to toggle the sound bits of the game.
* The leader board scene displays the first three highest scores from all the players who have ever played the game.
The scores are stored in using [LeaderBoard API Service](https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3).
* The game scene is where the actual game-play takes place. It's a simple mountain scene with blocks of different lengths positioned at various heights. The runner would jump and land on each block and also make sure that the incoming fireball does not crash him wiles running and jumping. The player is only rewarded only by catching the coins sees on the way.

## Author

👤 **Jelil Faisal Abudu**

* Github: [JelilFaisalAbudu](https://github.com/JelilFaisalAbudu)
* Twitter: [@jelilabudu](https://twitter.com/jelilabudu)
* Linkedin: [jelilfaisalabudu](www.linkedin.com/in/jelilfaisalabudu)

## Acknowledgments

### Game template and game examples

* Creating phaser 3 game template was inspired by [Zenva](https://phasertutorials.com/creating-a-phaser-3-template-part-3/)
* Actual game example and tutorials was inspired by [Emanuele Feronato](https://www.emanueleferonato.com/tag/endless-runner/)

### Game assets

* All sound bits were obtained from [gameart](https://gameart.org/)
* 2D character sprite was obtained from [gameart2d](https://www.gameart2d.com/freebies.html)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/JelilFaisalAbudu/platform-game/issues)

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is free to use as learning purposes. For any external content (e.g. logo, images, ...), please contact the proper author and check their license of use.
