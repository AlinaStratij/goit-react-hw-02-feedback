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

  // countTotalFeedback = () => {
  //   console.log(`hello`);
  //   //   if (this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0) {
  //   //     // return totalFedback =
  //   //     //     this.state.good + this.state.neutral + this.state.bad;
  //   //     return console.log(`there are some information`);
  //   //   }
  //   // }
  // };

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
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={0}
          />
        </SectionTitle>
        <Notification message="There is no feedback"></Notification>
      </div>
    );
  }
}
