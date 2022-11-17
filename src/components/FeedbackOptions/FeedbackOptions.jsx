import PropTypes from 'prop-types';

import { FedbackButton } from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <div>
      <FedbackButton type="button" onClick={onLeaveGoodFeedback}>
        Good
      </FedbackButton>

      <FedbackButton type="button" onClick={onLeaveNeutralFeedback}>
        Neutral
      </FedbackButton>
      <FedbackButton type="button" onClick={onLeaveBadFeedback}>
        Bad
      </FedbackButton>
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveGoodFeedback: PropTypes.func.isRequired,
  onLeaveNeutralFeedback: PropTypes.func.isRequired,
  onLeaveBadFeedback: PropTypes.func.isRequired,
};
