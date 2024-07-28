import { useState, useRef } from "react";
export default function Player() {
  const [enteredPlayerName, setPlayername] = useState("");

  const playerName = useRef();

  function handleClick() {
    setPlayername(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
