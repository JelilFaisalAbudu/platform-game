import Phaser from 'phaser';

const gameConfig = {
  type: Phaser.AUTO,
  parent: 'Phaser-platform-game',
  width: 800,
  height: 600,
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
  },
};

const gameOptions = {
  platformSpeedRange: [300, 300],
  mountainSpeed: 80,
  spawnRange: [80, 300],
  platformSizeRange: [90, 300],
  platformHeightRange: [-5, 5],
  platformHeighScale: 20,
  platformVerticalLimit: [0.4, 0.8],
  playerGravity: 900,
  jumpForce: 400,
  playerStartPosition: 200,
  jumps: 2,
  coinPercent: 25,
  firePercent: 25,
};


export { gameConfig, gameOptions };