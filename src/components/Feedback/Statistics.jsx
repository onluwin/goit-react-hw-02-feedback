import { Notification } from './Notification';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h3>Statistics</h3>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <ul>
          <li key={1}>Good: {good}</li>
          <li key={2}>Neutral: {neutral}</li>
          <li key={3}>Bad: {bad}</li>
          <li key={4}>Total: {total}</li>
          <li key={5}>Positive Feedback: {positivePercentage.toFixed(0)}%</li>
        </ul>
      )}
    </div>
  );
};
