import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy difficulty" targetTime={1} />
        <TimerChallenge title="medium difficulty" targetTime={2} />
        <TimerChallenge title="hard difficulty" targetTime={5} />
        <TimerChallenge title="impossible difficulty" targetTime={15} />
      </div>
    </>
  );
}

export default App;
