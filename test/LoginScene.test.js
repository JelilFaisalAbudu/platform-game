import Scene from '../src/Scenes/login-scene';

jest.mock('../src/Scenes/login-scene');

beforeEach(() => {
  Scene.mockClear();
});

test('Login scene test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});