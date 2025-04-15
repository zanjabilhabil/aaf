import React, { useState } from 'react'
import './index.css'

const teams = {
  "Riyadi": {
    logo: "/src/assets/logos/Riyadi.png",
    players: ["Ali Mansour", "Wael Arakji", "Ahmad Ibrahim"]
  },
  "Sagesse": {
    logo: "/src/assets/logos/Sagesse.png",
    players: ["Jad Khalil", "Elie Chamoun", "Karim Ezzedine"]
  },
  "Homentmen": {
    logo: "/src/assets/logos/Homentmen.png",
    players: ["Joe Gerges", "Mike Haddad", "Paul Khoury"]
  }
};

export default function FantasyApp() {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleAddPlayer = (player) => {
    if (!selectedPlayers.includes(player)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">🏀 Lebanese Fantasy Basketball</h1>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Select a Team</label>
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">-- Choose a team --</option>
          {Object.keys(teams).map((team) => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>
      </div>

      {selectedTeam && (
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center space-x-4 mb-4">
            <img src={teams[selectedTeam].logo} alt={selectedTeam} className="h-12 w-12 object-contain" />
            <h2 className="text-xl font-semibold">{selectedTeam} Roster</h2>
          </div>
          <ul className="space-y-2">
            {teams[selectedTeam].players.map((player) => (
              <li key={player} className="flex justify-between items-center">
                <span>{player}</span>
                <button
                  onClick={() => handleAddPlayer(player)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Add
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedPlayers.length > 0 && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">📋 My Fantasy Team</h3>
          <ul className="list-disc ml-6">
            {selectedPlayers.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}