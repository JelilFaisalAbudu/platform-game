import Scene from '../src/Scenes/title-scene';

jest.mock('../src/Scenes/title-scene');

beforeEach(() => {
  Scene.mockClear();
});

test('Title scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});