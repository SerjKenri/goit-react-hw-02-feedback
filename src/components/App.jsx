import React, { Component } from "react";
import { Section } from "./Section/Section";
import { Feedback } from "./Feedback/Feedback";
import { Statistic } from "./Statistic/Statistic";
import { Notification } from "./Notification/Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleFeedback = e => {
    if (e === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (e === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (e === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;

    let total = good + neutral + bad;
    return total;
  };

  positivePercentage = () => {
    const {good} = this.state;
    const totalFeedback = this.totalFeedback();

    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const positiveFeed = this.positivePercentage();
    const totalFeedback = this.totalFeedback();

    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
        <Feedback options={['Good', 'Neutral', 'Bad']} plusFeedback={this.handleFeedback}/>
      </Section>

      <Section title="Statistics">
      {totalFeedback !== 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeed={positiveFeed}
            />
          ) : (
            <Notification warningText="There is no feedback" ></Notification>
          )}
      </Section>
    </div>
  );
};
};