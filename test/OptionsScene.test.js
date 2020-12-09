import Scene from '../src/Scenes/options-scene';

jest.mock('../src/Scenes/options-scene');

beforeEach(() => {
  Scene.mockClear();
});

test('Options scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});