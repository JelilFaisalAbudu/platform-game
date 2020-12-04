import * as Scoring from '../src/api/leaderBoard';

describe('LeaderBoard', () => {
  test('it should return the type', () => {
    Scoring.sendScore('Jane Doe', 57).then(result => {
      expect(typeof result).toBe('JSON');
    }).catch(err => err);
  });

  test('it should send player name and score', () => {
    Scoring.sendScore('John Doe', 62).then(result => {
      expect(result.result).toBe('Leaderboard score created correctly.');
    }).catch(err => err);
  });
});
