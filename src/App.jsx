import { useState } from 'react';
import { learners } from './data/learners';
import LearnerList from './components/LearnersList/LearnerList';
import './App.css';

function App() {
  const [learnerState, setLearnersState] = useState(learners);

  return (
    <>
      <h1>Rendering Arrays from State</h1>
      <LearnerList learners={learnerState} />
    </>
  );
}

export default App;
