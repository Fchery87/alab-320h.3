import PropTypes from 'prop-types';
import Score from '../Score/Score';
import '../../App.css';

function LearnerListItem({ learner }) {
  return (
    <div className="LearnerListItem">
      <h3>Name: {learner.name}</h3>
      <p> <strong>Bio:</strong> {learner.bio}</p>
      <h4>Scores:</h4>
      {learner.scores.map((score, index) => (
        <Score score={score} key={index} />
      ))}
    </div>
  );
}

LearnerListItem.propTypes = {
  learner: PropTypes.object.isRequired,
};

export default LearnerListItem;
