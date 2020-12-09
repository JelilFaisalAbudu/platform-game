import Phaser from 'phaser';
import { gameConfig } from './Config/config';
import GameScene from './Scenes/game-scene';
import BootScene from './Scenes/boot-scene';
import PreloaderScene from './Scenes/preloader-scene';
import TitleScene from './Scenes/title-scene';
import OptionsScene from './Scenes/options-scene';
import CreditsScene from './Scenes/credits-scene';
import Model from './model';
import LoginScene from './Scenes/login-scene';
import GameOverScene from './Scenes/game-over-scene';
import leaderBoardScene from './Scenes/LeaderBoardScene';

class Game extends Phaser.Game {
  constructor() {
    super(gameConfig);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Login', LoginScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('LeaderBoard', leaderBoardScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
