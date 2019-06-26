import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addCard } from "../actions/card";

class AddCard extends React.PureComponent {
  state = {
    question: "",
    answer: "",
    showError: false,
    showSubmitted: false
  };

  render() {
    return (
      <Container behavior="padding" enabled>
        <Content>
          {this.state.showError ? (
            <Error>Please fill out the form</Error>
          ) : (
            <></>
          )}
          {this.state.showSubmitted ? <Title>Question submitted</Title> : <></>}
          <Input
            placeholder="Question"
            value={this.state.question}
            onChangeText={this.handleOnQuestionChangeText}
          />
          <Input
            placeholder="Answer"
            value={this.state.answer}
            onChangeText={this.handleOnAnswerChangeText}
          />
          <Button title="Submit" onPress={this.handleOnPress} />
        </Content>
      </Container>
    );
  }

  handleOnQuestionChangeText = text => {
    this.setState({ question: text });
  };

  handleOnAnswerChangeText = text => {
    this.setState({ answer: text });
  };

  handleOnPress = () => {
    const { question, answer } = this.state;

    if (!question || !answer) {
      this.setState({ showError: true, showSubmitted: false });
      return;
    }

    const key = this.props.navigation.getParam("key");
    const card = { key, question, answer };

    this.props.dispatch(addCard(card));

    this.setState({
      question: "",
      answer: "",
      showError: false,
      showSubmitted: true
    });
  };
}

export default connect()(AddCard);

const Container = styled.KeyboardAvoidingView`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Content = styled.View`
  display: flex;
  height: 180px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
`;

const Input = styled.TextInput`
  border-radius: 5px;
  border: 1px solid gray;
  font-size: 18px;
  height: 40px;
  text-align: center;
  width: 300px;
`;

const Button = styled.Button`
  padding-top: 10px;
`;

const Error = styled.Text`
  color: red;
  font-size: 20px;
`;
