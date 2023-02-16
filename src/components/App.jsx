import { Component } from 'react';
import { Feedback } from './Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Feedback good={good} neutral={neutral} bad={bad} />
      </>
    );
  }
}
