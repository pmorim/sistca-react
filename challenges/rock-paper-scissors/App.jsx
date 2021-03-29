import React, { useState } from "react";

function App() {
  /**
   * Initial state of the game.
   *
   * The game hasn't started yet,
   * there isn't a round winner,
   * and the scores are set to 0.
   */
  const [game, setGame] = useState({
    started: false,
    round: null,
    score: {
      player: 0,
      cpu: 0,
    },
  });

  /**
   * Definition of all the possible choices,
   * and which choices beat which.
   *
   * Note: 'Object.freeze' makes the given object 'read-only',
   * i.e., its values cannot be changed.
   */
  const choices = Object.freeze({
    rock: ["scissors"],
    paper: ["rock"],
    scissors: ["paper"],
  });

  /**
   * Makes a player move and starts the game.
   *
   * Sets the player state to the given choice,
   * makes a move for the cpu,
   * and evaluates the result.
   *
   * @param {choices} player The Player's choice,
   */
  function play(player) {
    const cpu = playCPU();
    evaluate(player, cpu);
  }

  /**
   * Makes the cpu choice.
   * Picks a choice at random.
   *
   * @returns {String}
   */
  function playCPU() {
    const randomIndex = Math.floor(Math.random() * Object.keys(choices).length);
    return Object.keys(choices)[randomIndex];
  }

  /**
   * Evaluate the current choices.
   * Sets the winner and result message.
   *
   * @param {String} player The Player's choice.
   * @param {String} cpu The CPU's choice.
   */
  function evaluate(player, cpu) {
    // Initialize the gameState variable
    const gameState = {
      started: true,
      round: {
        winner: "",
        choices: { player, cpu },
      },
      score: {
        player: game.score.player,
        cpu: game.score.cpu,
      },
    };

    // If the Player wins...
    if (choices[player]?.includes(cpu)) {
      gameState.round.winner = "player";
      gameState.score.player++;
    }

    // If the CPU wins...
    else if (choices[cpu]?.includes(player)) {
      gameState.round.winner = "cpu";
      gameState.score.cpu++;
    }

    // If its a draw...
    else {
      gameState.round.winner = "draw";
      // Don't change the scores, or add 0.5 to each...
    }

    // Update the state of the game
    setGame(gameState);
    console.log(gameState);
  }

  /**
   * The app structure.
   */
  return (
    <div className="App">
      <header>
        <h1>Rock, Paper, Scissors</h1>
      </header>

      <main>
        <div>
          <h2>
            Score: {game.score.player} - {game.score.cpu}
          </h2>
        </div>

        {game.started && (
          <>
            <p>
              You: {game.round.choices.player}
              <br />
              CPU: {game.round.choices.cpu}
              <br />
            </p>
            <h3>
              {game.round.winner === "player" && "You win!"}
              {game.round.winner === "cpu" && "You lose..."}
              {game.round.winner === "draw" && "Draw."}
            </h3>
          </>
        )}

        <div>
          Choose an option:
          {Object.keys(choices).map((choice) => (
            <button key={choice} onClick={() => play(choice)}>
              {choice}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
