import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChalleng({ title, targetTime }) {
  const timer = useRef();
  const dailog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dailog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dailog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dailog}
        targetTime={targetTime}
        onReset={handleReset}
        remaingTime={timeRemaining}
      />

      <section className="challenge">
        <h1>{title}</h1>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
