import { Game } from './game';

describe('Game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('should create an instance', () => {
    expect(game).toBeTruthy();
  });

  test('buy 1', () => {
    game.buy(1);
    expect(game.price).toBe(100);
  });

  test('buy 1, 2', () => {
    game.buy(1);
    game.buy(2);
    expect(game.price).toBe(190);
  });

  test('buy 1, 2, 2', () => {
    game.buy(1);
    game.buy(2);
    game.buy(2);
    expect(game.price).toBe(290);
  });

  test('buy 1, 2, 2, 3', () => {
    game.buy(1);
    game.buy(2);
    game.buy(2);
    game.buy(3);
    expect(game.price).toBe(370);
  });

  test('buy 1, 2, 2, 3, 3', () => {
    game.buy(1);
    game.buy(2);
    game.buy(2);
    game.buy(3);
    game.buy(3);
    expect(game.price).toBe(470);
  });

  test('buy 1, 2, 2, 3, 4', () => {
    game.buy(1);
    game.buy(2);
    game.buy(2);
    game.buy(3);
    game.buy(4);
    expect(game.price).toBe(420);
  });

  test('buy 1, 2, 2, 3, 4, 5', () => {
    game.buy(1);
    game.buy(2);
    game.buy(2);
    game.buy(3);
    game.buy(4);
    game.buy(5);
    expect(game.price).toBe(475);
  });

  test('buy 1, 2, 2, 3, 3, 4, 5', () => {
    game.buy(1);
    game.buy(2);
    game.buy(2);
    game.buy(3);
    game.buy(3);
    game.buy(4);
    game.buy(5);
    expect(game.price).toBe(575);
  });

});
