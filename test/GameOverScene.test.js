import Scene from '../src/Scenes/game-over-scene';

jest.mock('../src/Scenes/game-over-scene');

beforeEach(() => {
  Scene.mockClear();
});

test('GameOver scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});