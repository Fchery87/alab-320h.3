import PropTypes from 'prop-types';

function Score({ score }) {
  return (
    <div>
      <p>Date: {score.date}</p>
      <p>Score: {score.score}</p>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.shape({
    date: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default Score;
