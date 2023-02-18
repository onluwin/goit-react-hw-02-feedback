import PropTypes from 'prop-types';

import { Item } from './Feedback.styled';
import { FeedbackBtn } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((item, index) => {
    return (
      <Item key={index}>
        <FeedbackBtn
          name={options[index].toLowerCase()}
          type="button"
          onClick={onLeaveFeedback}
        >
          {item}
        </FeedbackBtn>
      </Item>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
