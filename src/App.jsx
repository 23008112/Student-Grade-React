import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("/characters.json")
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1>Breaking Bad Characters</h1>

      <div className="grid">
        {characters.map((character) => (
          <div className="card" key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p><b>Nickname:</b> {character.nickname}</p>
            <p><b>Status:</b> {character.status}</p>
            <p><b>Actor:</b> {character.portrayed}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;