import Scene from '../src/Scenes/credits-scene';

jest.mock('../src/Scenes/credits-scene');

beforeEach(() => {
  Scene.mockClear();
});

test('Credits scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});