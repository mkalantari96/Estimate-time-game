import { forwardRef, useRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remaingTime, onReset },
  ref
) {
  const dailog = useRef();
  const formattedReaminingTime = (remaingTime / 1000).toFixed(2);
  const userLost = remaingTime <= 0;
  const score = Math.round((1 - remaingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dailog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dailog} className="result-modal">
      <h2> {userLost ? "You lost!" : `Your score: ${score}`}</h2>
      <p>
        The target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>
          {formattedReaminingTime} second{formattedReaminingTime > 1 ? "s" : ""}{" "}
          left
        </strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
