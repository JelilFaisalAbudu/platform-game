import 'phaser';
import logoImage from '../assets/logo.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('logo', logoImage);
  }

  create() {
    this.add.image(400, 300, 'logo');
  }
}