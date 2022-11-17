import PropTypes from 'prop-types';

import {
  StatisticsWrapper,
  StatisticsItem,
  ItemText,
  StatisticsValue,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatisticsWrapper>
        <StatisticsItem>
          <ItemText>Good:</ItemText>
          <StatisticsValue>{good}</StatisticsValue>
        </StatisticsItem>
        <StatisticsItem>
          <ItemText>Neutral:</ItemText>
          <StatisticsValue>{neutral}</StatisticsValue>
        </StatisticsItem>
        <StatisticsItem>
          <ItemText>Bad:</ItemText>
          <StatisticsValue>{bad}</StatisticsValue>
        </StatisticsItem>
        <StatisticsItem>
          <ItemText>Total:</ItemText>
          <StatisticsValue>{total}</StatisticsValue>
        </StatisticsItem>
        <StatisticsItem>
          <ItemText>PositivePercentage:</ItemText>
          <StatisticsValue>{positivePercentage}%</StatisticsValue>
        </StatisticsItem>
      </StatisticsWrapper>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
