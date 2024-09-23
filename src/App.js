import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import Toolbar from './components/Toolbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useFlashcards } from './hooks/useFlashcards';

function App() {
  const [allCards] = useFlashcards();
  const totalCards = allCards.length;
  const [curCardId, setCurCardId] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true';
  });
  
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  let goToPrev = () => {
    if ( isValidId(curCardId - 1)) {
      setCurCardId(curCardId - 1);
    }
    else {
      setCurCardId(totalCards);
    }
  }

  let goToNext = () => {
    if ( isValidId(curCardId + 1)) {
      setCurCardId(curCardId + 1);
    }
    else {
      setCurCardId(1);
    }
  };

  function isValidId(id) {
    return ( id <= totalCards && id >= 1);
  }

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>
    <Toolbar isDarkMode={isDarkMode} toggleTheme={toggleTheme}></Toolbar>
    <Container className={`container-main ${isDarkMode ? 'dark' : 'light'}`}>
      <Card {...allCards.find(item=> item.id === curCardId)}></Card>
      <div className="action-buttons">
        <Button variant="warning" className="me-4 prev-next-btns" onClick={goToPrev}>Prev</Button>
        <Button variant="success" className="ms-4 prev-next-btns" onClick={goToNext}>Next</Button>
      </div>
    </Container>
    </>
  );
}

export default App;
