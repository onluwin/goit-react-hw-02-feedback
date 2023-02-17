import { StatItem } from './Feedback.styled';

export const StatisticsItem = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatItem key={1}>Good: {good}</StatItem>
      <StatItem key={2}>Neutral: {neutral}</StatItem>
      <StatItem key={3}>Bad: {bad}</StatItem>
      <StatItem key={4}>Total: {total}</StatItem>
      <StatItem key={5}>
        Positive Feedback: {positivePercentage.toFixed(0)}%
      </StatItem>
    </>
  );
};
