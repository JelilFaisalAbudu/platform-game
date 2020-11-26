import Phaser from 'phaser';
import gameLogo from '../assets/logo.png';
import blueButtonOne from '../assets/ui/blue_button02.png';
import blueButtonTwo from '../assets/ui/blue_button03.png';
import greyBox from '../assets/ui/grey_box.png';
import checkedBox from '../assets/ui/blue_boxCheckmark.png';
// import bgMusic from '../assets/TownTheme.mp3';

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

    const { mainCamera } = this.cameras.main;

    const loadingText = this.make.text({
      x: mainCamera.width / 2,
      y: mainCamera.height / (2 - 50),
      text: 'Loading',
      style: {
        font: '20px monospace',
        fill: '#fff',
      },
    });
    loadingText.setOrigin(0.5);

    const percentText = this.make.text({
      x: mainCamera.width / 2,
      y: mainCamera.height / (2 - 5),
      text: '0%',
      stye: {
        font: '18px monospace',
        fill: '#fff',
      },
    });
    percentText.setOrigin(0.5);

    const assetText = this.make.text({
      x: mainCamera.width / 2,
      y: mainCamera.height / (2 + 50),
      text: '',
      style: {
        font: '18px monospace',
        fill: '#fff',
      },
    });
    assetText.setOrigin(0.5);

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('compete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timeEvent = this.time.delayedCall(3000, this.ready, [], this);

    this.load.image('blueButton1', blueButtonOne);
    this.load.image('blueButton2', blueButtonTwo);
    this.load.image('PhaserLogo', gameLogo);
    this.load.image('greyBox', greyBox);
    this.load.image('checkedBox', checkedBox);
    // this.load.audio('bgMusic', bgMusic);
  }

  create() {}

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}
