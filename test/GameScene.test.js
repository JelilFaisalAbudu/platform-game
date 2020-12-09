import Scene from '../src/Scenes/game-scene';

jest.mock('../src/Scenes/game-scene');

beforeEach(() => {
  Scene.mockClear();
});

test('Game scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});