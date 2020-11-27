import Phaser from 'phaser';
import config from './Config/config';
import GameScene from './Scenes/game-scene';
import BootScene from './Scenes/boot-scene';
import PreloaderScene from './Scenes/preloader-scene';
import TitleScene from './Scenes/title-scene';
import OptionsScene from './Scenes/options-scene';
import CreditsScene from './Scenes/credits-scene';


class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
