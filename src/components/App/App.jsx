// import { LeaveFedback } from 'components/LeaveFeedback/LeaveFeedback';
import React from 'react';

import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  buttonIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  buttonIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const countFeedback = this.state.good + this.state.neutral + this.state.bad;
    return countFeedback;
  };
  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positiveFeedback;
  };

  render() {
    return (
      <div>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            onLeaveGoodFeedback={this.buttonIncrementGood}
            onLeaveNeutralFeedback={this.buttonIncrementNeutral}
            onLeaveBadFeedback={this.buttonIncrementBad}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {this.countTotalFeedback() > 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
          {this.countTotalFeedback() === 0 && (
            <Notification message="There is no feedback😥"></Notification>
          )}
        </SectionTitle>
      </div>
    );
  }
}
