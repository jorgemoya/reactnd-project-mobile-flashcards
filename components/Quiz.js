import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  clearLocalNotifications,
  setLocalNotification
} from "../utils/helpers";

class Quiz extends React.PureComponent {
  state = {
    cards: [],
    showAnswer: false,
    questionNumber: 0,
    score: 0
  };

  componentDidMount() {
    const { cards } = this.props;
    const key = this.props.navigation.getParam("key");

    return cards[key] && this.setState({ cards: cards[key] });
  }

  render() {
    const { cards, questionNumber, score } = this.state;

    if (this.state.questionNumber + 1 > cards.length) {
      console.log('notification');
      clearLocalNotifications().then(setLocalNotification());
    }

    return cards.length > 0 ? (
      this.state.questionNumber + 1 > cards.length ? (
        <Container>
          <Content>
            <Text>
              You answered {score} questions correct out of {cards.length}.
            </Text>
            <Button title="Reset Quiz" onPress={this.handleResetQuiz} />
          </Content>
        </Container>
      ) : (
        <Container>
          <Content>
            <Text>
              Question {questionNumber + 1} of {cards.length}:
            </Text>
            <Text>{cards[questionNumber].question}</Text>
            <Text>Answer:</Text>
            <Text
              style={this.state.showAnswer ? { opacity: 1 } : { opacity: 0 }}
            >
              {cards[questionNumber].answer}
            </Text>
            <Button title="Show Answer" onPress={this.handleOnShowAnswer} />
            <Button title="Correct" onPress={this.handleCorrectAnswer} />
            <Button title="Incorrect" onPress={this.handleIncorrectAnswer} />
          </Content>
        </Container>
      )
    ) : (
      <Container>
        <Content>
          <ErrorText>You need to add cards to start Quiz</ErrorText>
        </Content>
      </Container>
    );
  }

  handleCorrectAnswer = () => {
    this.setState(oldState => {
      return {
        questionNumber: oldState.questionNumber + 1,
        score: oldState.score + 1,
        showAnswer: false
      };
    });
  };

  handleIncorrectAnswer = () => {
    this.setState(oldState => {
      return {
        questionNumber: oldState.questionNumber + 1,
        showAnswer: false
      };
    });
  };

  handleOnShowAnswer = () => {
    this.setState({ showAnswer: true });
  };

  handleResetQuiz = () => {
    this.setState({ score: 0, questionNumber: 0 });
  };
}

function mapStateToProps({ cards }) {
  return {
    cards
  };
}

export default connect(mapStateToProps)(Quiz);

const ErrorText = styled.Text`
  font-size: 22px;
`;

const Container = styled.View`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Content = styled.View`
  display: flex;
  height: 300px;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
`;

const Button = styled.Button`
  padding-top: 10px;
`;
