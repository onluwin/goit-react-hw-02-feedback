import { Component } from 'react';
import { Feedback } from './Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    const name = e.currentTarget.name;
    console.log('name', name);
    this.setState(prevState => {
      return (prevState[name] += 0.5);
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </>
    );
  }
}
