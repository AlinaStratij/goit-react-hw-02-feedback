import React from 'react';
import PropTypes from 'prop-types';
import { Title, SectionTitleWrapper } from './SectionTitle.styled';
// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
// import { Statistics } from 'components/Statistics/Statistics';
// import { Notification } from 'components/Notification/Notification';

// export class SectionTitle extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   // buttonIncrementGood = () => {
//   //   this.setState(prevState => ({
//   //     good: prevState.good + 1,
//   //   }));
//   // };
//   // buttonIncrementNeutral = () => {
//   //   this.setState(prevState => ({
//   //     neutral: prevState.neutral + 1,
//   //   }));
//   // };
//   // buttonIncrementBad = () => {
//   //   this.setState(prevState => ({
//   //     bad: prevState.bad + 1,
//   //   }));
//   // };
//   // countTotalFeedback = () => {
//   //   return;
//   // };
//   // countPositiveFeedbackPercentage = () => {
//   //   return;
//   // };

//   render() {
//     return (
//       <section>
//         <div>
//           <h1 className="feedbacTitle">Please leave feedback</h1>

//         </div>
//         <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={0}
//           positivePercentage={0}
//         />
//         <Notification />
//       </section>
//     );
//   }
// }
export const SectionTitle = ({ title, children }) => (
  <SectionTitleWrapper>
    <Title>{title}</Title>
    {children}
  </SectionTitleWrapper>
);

SectionTitle.propTypes = {
  title: PropTypes.string,
};
