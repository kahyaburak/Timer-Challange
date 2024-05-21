import {useState, useRef} from 'react';
import ResultModal from './ResulltModal.jsx';

export default function TimerChallenge({title, targetTime}) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimeExpired] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'stop' : 'start'} Challange
          </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
