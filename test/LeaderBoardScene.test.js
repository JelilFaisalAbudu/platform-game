import Scene from '../src/Scenes/LeaderBoardScene';

jest.mock('../src/Scenes/LeaderBoardScene');

beforeEach(() => {
  Scene.mockClear();
});

test('LeaderBoard scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});