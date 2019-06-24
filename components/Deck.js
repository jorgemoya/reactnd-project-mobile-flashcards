import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { connect } from "react-redux";

class Deck extends React.PureComponent {
  state = {
    deck: {}
  };

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id");
    const deck = this.getDeck(id);

    if (deck) {
      this.setState({ deck });
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Title>{this.state.deck.title}</Title>
          <Cards>0 Cards</Cards>
          <Button title="Add Card" />
          <Button title="Start Quiz" />
          <Button title="Delete Deck" />
        </Content>
      </Container>
    );
  }

  getDeck(id) {
    return this.props.decks.find(deck => deck.key === id);
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps)(Deck);

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

const Title = styled.Text`
  font-size: 20px;
`;

const Cards = styled.Text`
  color: gray;
  font-size: 18px;
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
