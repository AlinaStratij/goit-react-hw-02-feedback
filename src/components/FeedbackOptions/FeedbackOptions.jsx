export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        className="feedbackButton"
        type="button"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className="feedbackButton"
        type="button"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className="feedbackButton"
        type="button"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};
