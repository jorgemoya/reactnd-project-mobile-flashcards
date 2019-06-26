import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createDeck } from "./../actions/deck";

class AddDeck extends PureComponent {
  state = {
    title: "",
    showError: false
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
          <Title>What is the title of your new deck?</Title>
          <Input
            placeholder="Title"
            value={this.state.title}
            onChangeText={this.handleOnChangeText}
          />
          <Button title="Create Deck" onPress={this.handleOnPress} />
        </Content>
      </Container>
    );
  }

  handleOnChangeText = text => {
    this.setState({ title: text });
  };

  handleOnPress = () => {
    const title = this.state.title;

    if (title) {
      const deck = { key: title };
      this.props.dispatch(createDeck(deck));

      this.props.navigation.navigate("Deck", {
        key: title
      });

      this.setState({ title: "", showError: false });
    } else {
      this.setState({ showError: true });
    }
  };
}

export default connect()(AddDeck);

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
