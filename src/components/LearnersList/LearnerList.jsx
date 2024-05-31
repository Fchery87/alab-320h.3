import PropTypes from 'prop-types';
import LearnerListItem from '../LearnerListItem/LearnerListItem';

function LearnerList({ learners }) {
  return (
    <div>
      <h2>Learners List</h2>
      {learners.map((item, index) => (
        <LearnerListItem learner={item} key={index} />
      ))}
    </div>
  );
}

LearnerList.propTypes = {
  learners: PropTypes.array.isRequired,
};

export default LearnerList;
