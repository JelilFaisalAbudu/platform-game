import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.add.image(400, 200, 'logo');

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    this.load.image('blueButton1', 'assets/ui/blue_button02.png');
    this.load.image('blueButton2', 'assets/ui/blue_button03.png');
    this.load.image('phaserLogo', 'assets/logo.png');
    this.load.image('box', 'assets/ui/grey_box.png');
    this.load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png');
    this.load.image('platform', 'assets/sprites/platform.png');
    this.load.spritesheet('player_run', 'assets/sprites/player_run2.png', {
      frameWidth: 56.44,
      frameHeight: 48,
    });

    this.load.spritesheet('player_jump', 'assets/sprites/player_jump2.png', {
      frameWidth: 56.44,
      frameHeight: 48,
    });

    this.load.spritesheet('player_dead', 'assets/sprites/player_dead2.png', {
      frameWidth: 56.44,
      frameHeight: 48,
    });

    this.load.spritesheet('coin', '../assets/sprites/coin.png', {
      frameWidth: 20,
      frameHeight: 20,
    });

    this.load.spritesheet('fire', '../assets/sprites/fire.png', {
      frameWidth: 40,
      frameHeight: 70,
    });

    this.load.spritesheet('mountain', 'assets/sprites/mountain.png', {
      frameWidth: 512,
      frameHeight: 512,
    });
    this.load.audio('bgMusic', ['assets/sounds/TownTheme.mp3']);
    this.load.audio('pickup', ['assets/sounds/pickup.mp3']);
    this.load.audio('dead', ['assets/sounds/dead.mp3']);
  }

  create() {
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('player_run', {
        start: 0,
        end: 8,
      }),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('player_jump', {
        start: 0,
        end: 8,
      }),
      frameRate: 15,
      repeat: 0,
    });

    this.anims.create({
      key: 'dead',
      frames: this.anims.generateFrameNumbers('player_dead', {
        start: 0,
        end: 10,
      }),
      frameRate: 15,
      repeat: 0,
    });

    this.anims.create({
      key: 'rotate',
      frames: this.anims.generateFrameNumbers('coin', {
        start: 0,
        end: 5,
      }),
      frameRate: 15,
      yoyo: true,
      repeat: -1,
    });

    this.anims.create({
      key: 'burn',
      frames: this.anims.generateFrameNumbers('fire', {
        start: 0,
        end: 4,
      }),
      frameRate: 15,
      repeat: -1,
    });
  }

  ready() {
    this.scene.start('Login');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}
