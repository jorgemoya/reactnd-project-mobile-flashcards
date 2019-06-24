import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createDeck } from "./../actions/deck";
import { uniqueId } from "./../utils/uniqueId";

class AddDeck extends PureComponent {
  state = {
    title: ""
  };

  render() {
    return (
      <Container>
        <Content>
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
      const key = uniqueId("deck");
      const deck = { key, title };
      this.props.dispatch(createDeck(deck));
    }
  };
}

export default connect()(AddDeck);

const Container = styled.View`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Content = styled.View`
  display: flex;
  height: 180px;
  justify-content: space-between;
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
