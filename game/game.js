class TicTacToe {
  constructor() {
    // this.col = col;
    // this.row = row;
  }

  start() {
    return "Welcome to TicTacToe. Player X, Take a Turn";
  }

  currentPlayer() {
    const turn = 2;
    for (; turn > 11; turn++);
    const player = turn / 2 ? "X" : "Y";
    return player;
  }

  playerX(row, col) {}
}

module.exports = TicTacToe;
