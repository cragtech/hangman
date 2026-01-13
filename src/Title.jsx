import './App.css';
import Hangman from './assets/Western_hangman.png'

function Title() {
  return (
    <div className="Title">
          <img src={Hangman} className="hangmanLogo" alt="Hangman logo" />
    </div>
  );
}

export default Title;