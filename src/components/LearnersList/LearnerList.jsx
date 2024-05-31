import PropTypes from 'prop-types';
import LearnerListItem from '../LearnerListItem/LearnerListItem';
import '../../App.css';

function LearnerList({ learners }) {
  return (
    <div className="LearnerList">
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
