import Phaser from 'phaser';
import { gameConfig } from '../Config/config';
// import nameForm from '../assets/ui/nameForm.html';

export default class LoginScene extends Phaser.Scene {
  constructor() {
    super('Login');
  }

  preload() {
    this.load.html('nameform', 'assets/ui/nameForm.html');
  }

  create() {
    const text = this.add.text(500, 10, 'Please enter your name', { color: 'white', fontSize: '30px' });
    text.setOrigin(0.5, 0.1);
    const element = this.add.dom(400, 0).createFromCache('nameform');
    element.addListener('click');
    element.on('click', function func(event) {
      if (event.target.name === 'playButton') {
        const inputText = this.getChildByName('nameField');
        if (inputText.value !== '') {
          this.removeListener('click');
          this.setVisible(false);
          text.setText(`player: ${inputText.value}`);
          gameConfig.user = inputText.value;
          window.game.scene.start('Title');
        } else {
          this.scene.tweens.add({
            targets: text,
            alpha: 0.2,
            duration: 250,
            ease: 'Power3',
            yoyo: true,
          });
        }
      }
    });
    this.tweens.add({
      targets: element,
      y: 300,
      duration: 3000,
      ease: 'Power3',
    });
  }
}