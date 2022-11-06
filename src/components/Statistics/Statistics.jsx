export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2 className="StatisticsTitle">Statistics</h2>
      <ul>
        <li className="StatisticsItem">
          <p className="ItemText">Good:</p>
          <span className="ItemValue">{good}</span>
        </li>
        <li className="StatisticsItem">
          <p className="ItemText">Neutral:</p>
          <span className="ItemValue">{neutral}</span>
        </li>
        <li className="StatisticsItem">
          <p className="ItemText">Bad:</p>
          <span className="ItemValue">{bad}</span>
        </li>
        <li className="StatisticsItem">
          <p className="ItemText">Total:</p>
          <span className="ItemValue">{total}</span>
        </li>
        <li className="StatisticsItem">
          <p className="ItemText">PositivePercentage:</p>
          <span className="ItemValue">{positivePercentage}</span>
        </li>
      </ul>
    </div>
  );
};
