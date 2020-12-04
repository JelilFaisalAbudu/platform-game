import Scene from '../src/Scenes/boot-scene';

jest.mock('../src/Scenes/boot-scene');

beforeEach(() => {
  Scene.mockClear();
});

test('Boot scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});