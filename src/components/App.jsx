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
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  positivePercentage = () => {
    if (this.totalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.totalFeedback()) * 100);
  };

  render() {
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
      {this.totalFeedback() !== 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              positiveFeed={this.positivePercentage()}
            />
          ) : (
            <Notification warningText="There is no feedback" ></Notification>
          )}
      </Section>
    </div>
  );
};
};