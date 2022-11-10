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
