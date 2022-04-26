const TicTacToe = require('../game/game');

describe('TicTacToe', () => {
    it('initalizes a new game', () => {
        const game = new TicTacToe;
        expect(game).toEqual({});
    });

    it('starts a new game', () => {
        const game = new TicTacToe;
        expect(game.start()).toEqual("Welcome to TicTacToe. Player X, Take a Turn");
    });

    it('tells you the current player', () => {
        const game = new TicTacToe;
        expect(game.currentPlayer()).toEqual("X");
    });

    // it('takes a turn placing on the board', () => {
    //     const game = new TicTacToe;
    //     expect(game.playerX(0,3)).toEqual("X");
    // });
});