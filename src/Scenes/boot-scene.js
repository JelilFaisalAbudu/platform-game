import Phaser from 'phaser';
import preloadImage from '../assets/zenva_logo.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', preloadImage);
  }

  create() {
    this.scene.start('Preloader');
  }
}