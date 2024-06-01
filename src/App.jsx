import { useState } from 'react';
import { learners } from './data/learners';
import LearnerList from './components/LearnersList/LearnerList';
import CreateLearner from './components/CreateLearner/CreateLearner';
import './App.css';

function App() {
  const [learnerState, setLearnersState] = useState(learners);

  const addLearner = (newLearner) => {
    setLearnersState([...learnerState, newLearner])

  }

  return (
    <>
      <h1>Rendering Arrays from State</h1>
      <LearnerList learners={learnerState} />
      <CreateLearner addLearner={addLearner} />
    </>
  );
}

export default App;
