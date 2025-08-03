import React from 'react';

const IndianPlayers = () => {
  const oddEven = ['OddPlayer1', 'EvenPlayer1', 'OddPlayer2', 'EvenPlayer2', 'OddPlayer3', 'EvenPlayer3'];
  const [oddPlayers, evenPlayers] = [oddEven.filter((_, idx) => idx % 2 === 0), oddEven.filter((_, idx) => idx % 2 === 1)];

  const t20 = ['T20Player1', 'T20Player2', 'T20Player3'];
  const ranji = ['RanjiPlayer1', 'RanjiPlayer2', 'RanjiPlayer3'];
  const merged = [...t20, ...ranji];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>{oddPlayers.map((p, idx) => <li key={idx}>{p}</li>)}</ul>
      <h2>Even Team Players</h2>
      <ul>{evenPlayers.map((p, idx) => <li key={idx}>{p}</li>)}</ul>
      <h2>Merged Players</h2>
      <ul>{merged.map((p, idx) => <li key={idx}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;