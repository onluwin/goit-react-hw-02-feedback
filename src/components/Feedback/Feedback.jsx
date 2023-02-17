import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export const Feedback = ({ good, neutral, bad, onLeaveFeedback }) => {
  const total = good + neutral + bad;
  const percentage = (good / total) * 100;

  return (
    <Section title="Please leave your feedback">
      <FeedbackOptions
        options={['Good', 'Neutral', 'Bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={percentage}
      />
    </Section>
  );
};
