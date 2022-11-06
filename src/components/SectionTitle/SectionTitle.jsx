import React from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export class SectionTitle extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  buttonIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  render() {
    return (
      <section>
        <div>
          <h1 className="feedbacTitle">Please leave feedback</h1>
          <FeedbackOptions options={0} onLeaveFeedback={this.buttonIncrement} />
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={0}
          positivePercentage={0}
        />
      </section>
    );
  }
}
