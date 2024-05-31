import PropTypes from 'prop-types';
import Score from '../Score/Score';

function LearnerListItem({ learner }) {
  return (
    <div>
      <h3>Name: {learner.name}</h3>
      <p>Bio: {learner.bio}</p>
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
