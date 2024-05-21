import {forwardRef, useImperativeHandle, useRef} from 'react';

const ResultModal = forwardRef(function ResultModal(
  {remainingTime, targetTime, onReset},
  ref
) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog onClose={onReset} ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && (
        <h2>
          Good Job! <br />
          Your Score Is: {score}
        </h2>
      )}
      <p>
        The target time was <strong>{targetTime} </strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} </strong>
        seconds left.
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
