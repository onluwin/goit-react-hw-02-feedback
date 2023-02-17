import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { OptionsList } from './OptionsList';

export const Feedback = ({ good, neutral, bad, onLeaveFeedback }) => {
  function countTotalFeedback() {
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
    const total = good + neutral + bad;
    return (good / total) * 100;
  }

  return (
    <Section title="Please leave your feedback">
      <OptionsList>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </OptionsList>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
};
