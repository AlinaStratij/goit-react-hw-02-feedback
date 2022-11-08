// import { LeaveFedback } from 'components/LeaveFeedback/LeaveFeedback';
import React from 'react';

import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions />
      </SectionTitle>
      <SectionTitle title="Statistics">
        <Statistics
          good={0}
          neutral={0}
          bad={0}
          total={0}
          positivePercentage={0}
        />
      </SectionTitle>
      <Notification message="There is no feedback"></Notification>
    </div>
  );
};
