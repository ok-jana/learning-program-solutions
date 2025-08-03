import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Player1', score: 65 },
    { name: 'Player2', score: 80 },
    { name: 'Player3', score: 50 },
    { name: 'Player4', score: 90 },
    { name: 'Player5', score: 75 },
    { name: 'Player6', score: 45 },
    { name: 'Player7', score: 88 },
    { name: 'Player8', score: 72 },
    { name: 'Player9', score: 60 },
    { name: 'Player10', score: 95 },
    { name: 'Player11', score: 55 },
  ];

  const highScorers = players.filter(p => p.score >= 70);
  const lowScorers = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>High Scorers (>=70)</h2>
      <ul>
        {highScorers.map((p, idx) => <li key={idx}>{p.name}: {p.score}</li>)}
      </ul>
      <h2>Low Scorers (&lt;70)</h2>
      <ul>
        {lowScorers.map((p, idx) => <li key={idx}>{p.name}: {p.score}</li>)}
      </ul>
    </div>
  );
};

export default ListofPlayers;