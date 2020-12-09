import Phaser from 'phaser';
import Button from '../objects/button';
import { showScore } from '../api/leaderBoard';
import { gameConfig } from '../Config/config';

export default class leaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.add.text(300, 100, 'TOP 5 SCORERS', { color: 'white', fontSize: '30px' });
    this.topScore();
    this.backButton = new Button(this, 350, gameConfig.height / 2 + 100, 'blueButton1', 'blueButton2', 'Back', 'GameOver');
  }

  async topScore() {
    const resultObject = await showScore();
    const scores = resultObject.result.sort((a, b) => ((a.score > b.score) ? -1 : 1));
    const topFiveScore = (scores.length > 3) ? 3 : scores.length;
    for (let i = 0; i < topFiveScore; i += 1) {
      this.add.text(300, 200 + i * 40, `${scores[i].user}: ${scores[i].score}`, { color: 'white', fontFamily: 'monospace', fontSize: '25px' });
    }
  }
}
