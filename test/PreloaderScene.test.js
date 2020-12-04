import Scene from '../src/Scenes/preloader-scene';

jest.mock('../src/Scenes/preloader-scene');

beforeEach(() => {
  Scene.mockClear();
});

test('Preload scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});