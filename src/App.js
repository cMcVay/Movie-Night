import './App.css';
import React, {useState} from 'react';
import MovieComponent from './components/Movie';
import filmList from './movies/filmList';
import {filmCard, scoring, submitButton, scoreButtons, initialCard} from './styles/style';


function App() {
  const [turn, setTurn] = useState(0);
  const [stage, setStage] = useState('initial');
  const [filmIndex, setFilmIndex] = useState(0);
  const [lizScore, setLizScore] = useState(null);
  const [conScore, setConScore] = useState(null);
  const [conDuration, setConDuration] = useState(0);
  const [lizDuration, setLizDuration] = useState(0);
  const [lizOpeness, setLizOpeness] = useState(0);
  const [conOpeness, setConOpeness] = useState(0);
  const film = filmList.list[filmIndex];


  const handleClick = (x) => {
    if (turn < 1) {
      setLizScore(x);
    } else {
      setConScore(x);
    }
  }

  const handleSubmit = () => {
    console.log(filmList);
    if (turn < 1) {
      film.addLiz(lizScore);
      setLizScore(null);
    } else {
      film.addCon(conScore);
      setConScore(null);
      film.scoreCalculator();
    }

    if (filmIndex === filmList.list.length - 1) {
      if (turn === 0) {
        setTurn(1);
        setFilmIndex(0);
      } else {
        filmList.sortMovies();
        setStage('complete');
      }
    } else {
      setFilmIndex(filmIndex + 1);
    }
  }

  const showScoreMeaning = (x) => {
    if (x === null) {
      return "Ready For Input"
    }
    else if (x === 0) {
      
      return "0 - That's a no from me dawg"
    } 
    else if (x === 1) {
      if ((film.lizPref > film.conPref && turn === 0) || (film.conPref > film.lizPref && turn === 1)) {
        return "1 - I don't mind if we just put this on and don't pay full attention"
      } else if ((film.lizPref < film.conPref && turn === 0)||(film.conPref < film.lizPref && turn === 1)) {
        return "1 - You can put this on, but I won't be paying much attention"
      } else {
        return "1 - Eh, okay, we can watch"
      }
      
    }
    else if (x === 2) {
      if ((film.lizPref > film.conPref && turn === 0) || (film.conPref > film.lizPref && turn === 1)) {
        return "2 - I would like to watch this, even if you're not as interested"
      } else if ((film.lizPref < film.conPref && turn === 0)||(film.conPref < film.lizPref && turn === 1)) {
        return "2 - I'm interested in watching this, and I may get invested"
      } else {
        return "2 - I'm down to watch"
      }
    }
    else if (x === 3) {
      if ((film.lizPref > film.conPref && turn === 0) || (film.conPref > film.lizPref && turn === 1)) {
        return "3 - I'd like to share the experience of watching this movie!"
      } else if ((film.lizPref < film.conPref && turn === 0)||(film.conPref < film.lizPref && turn === 1)) {
        return "3 - I'd like to watch this movie with you!"
      } else {
        return "3 - Oh yes! Let's watch this!"
      }
    }
  }

  const showAttention = (x) => {
    if (x === 0) {
      return "0 - It better be short and simple, and I still may not pay attention"
    }
    else if (x === 1) {
      return "1 - Average duration should be fine, and I can pay some attention"
    }
    else if (x === 2) {
      return "2 - I'm ready to feel some emotion and get invested"
    }
    else if (x === 3) {
      return "3 - I'm looking for an emotional or though provoking experience no matter the duration"
    }
  }

  const showOpeness = (x) => {
    if (x === 0) {
      return "3 - Open to anything"
    }
    else if (x === 1) {
      return "2 - Open to something new, but it needs to be closer to my type of movie"
    }
    else if (x === 2) {
      return "1 - I'd like it to be something I'm more comfortable with"
    }
    else if (x === 3) {
      return "0 - We must watch a movie that I know that I'm fully comfortable with"
    }
  }

  const handleAttnLiz = (x) => {
    setLizDuration(x);
  }

  const handleAttenCon = (x) => {
    setConDuration(x);
  }

  const handleOpenLiz = (x) => {
    setLizOpeness(x);
  }

  const handleOpenCon = (x) => {
    setConOpeness(x);
  }

  const handleInitialSubmit = () => {
    setStage('scoring');
    filmList.refineList(lizDuration, conDuration, lizOpeness, conOpeness);
    console.log(filmList);

    
  }
 
  return (
    <div className='App'>
      <h1>Movie Night</h1>
      {stage === 'initial' &&
        <div>
          <h2>Initial Scoring</h2>
          <div style={initialCard}>
            <h3>Attention</h3>
            <p>Liz's Attention:</p>
            <div>
              <button style={scoreButtons} onClick={() => handleAttnLiz(0)}>0</button>
              <button style={scoreButtons} onClick={() => handleAttnLiz(1)}>1</button>
              <button style={scoreButtons} onClick={() => handleAttnLiz(2)}>2</button>
              <button style={scoreButtons} onClick={() => handleAttnLiz(3)}>3</button>
            </div>
            <p>{showAttention(lizDuration)}</p>
            <p>Connor's Attention:</p>
            <div>
              <button style={scoreButtons} onClick={() => handleAttenCon(0)}>0</button>
              <button style={scoreButtons} onClick={() => handleAttenCon(1)}>1</button>
              <button style={scoreButtons} onClick={() => handleAttenCon(2)}>2</button>
              <button style={scoreButtons} onClick={() => handleAttenCon(3)}>3</button>
            </div>
            <p>{showAttention(conDuration)}</p>
          </div>
          <div style={initialCard}>
            <h3>Openess</h3>
            <p>Liz's Openess:</p>
            <div>
              <button style={scoreButtons} onClick={() => handleOpenLiz(3)}>0</button>
              <button style={scoreButtons} onClick={() => handleOpenLiz(2)}>1</button>
              <button style={scoreButtons} onClick={() => handleOpenLiz(1)}>2</button>
              <button style={scoreButtons} onClick={() => handleOpenLiz(0)}>3</button>
            </div>
            <p>{showOpeness(lizOpeness)}</p>
            <p>Connor's Openess:</p>
            <div>
              <button style={scoreButtons} onClick={() => handleOpenCon(3)}>0</button>
              <button style={scoreButtons} onClick={() => handleOpenCon(2)}>1</button>
              <button style={scoreButtons} onClick={() => handleOpenCon(1)}>2</button>
              <button style={scoreButtons} onClick={() => handleOpenCon(0)}>3</button>
            </div>
            <p>{showOpeness(conOpeness)}</p>
          </div>
          <button onClick={() => handleInitialSubmit()} style={submitButton}>Submit</button>
        </div>
      }
      {stage === 'scoring' && 
        <div style={filmCard}>
          <p>{turn === 0 ? "Liz's Turn": "Connor's Turn"}</p>
          <MovieComponent film={film}/>
          <div style={scoring}>
            <button style={scoreButtons} onClick={() => handleClick(0)}>0</button>
            <button style={scoreButtons} onClick={() => handleClick(1)}>1</button>
            <button style={scoreButtons} onClick={() => handleClick(2)}>2</button>
            <button style={scoreButtons} onClick={() => handleClick(3)}>3</button>
          </div>
          <p>{showScoreMeaning(turn < 1 ? lizScore : conScore)}</p>
          <button onClick={() => handleSubmit()} style={submitButton}>Submit</button>
        </div>
      }
      {stage === 'complete' && 
        <ol style={{textAlign: "left"}}>
          {filmList.list.map(film => (
            <li>{film.title} - {film.score}</li>
          ))}
        </ol>
        
      }
    </div>
  )
}


export default App;