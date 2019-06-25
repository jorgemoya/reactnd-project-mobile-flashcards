import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { deleteDeck } from "./../actions/deck";
import CardCounter from "./CardCounter";

class Deck extends React.PureComponent {
  state = {
    deck: {}
  };

  componentDidMount() {
    const { navigation } = this.props;
    const key = navigation.getParam("key");
    const deck = this.getDeck(key);

    if (deck) {
      this.setState({ deck });
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Title>{this.state.deck.key}</Title>
          <CardCounter deck={this.state.deck.key} />
          <Button title="Add Card" onPress={this.handleAddCard} />
          <Button title="Start Quiz" onPress={this.handleStartQuiz} />
          <Button title="Delete Deck" onPress={this.handleDelete} />
        </Content>
      </Container>
    );
  }

  getDeck(key) {
    return this.props.decks.find(deck => deck.key === key);
  }

  handleAddCard = () => {
    this.props.navigation.navigate("AddCard", {
      key: this.state.deck.key
    });
  };

  handleStartQuiz = () => {
    this.props.navigation.navigate("Quiz", {
      key: this.state.deck.key
    });
  };

  handleDelete = () => {
    this.props.dispatch(deleteDeck(this.state.deck.key));
    this.props.navigation.navigate("Decks");
  };
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

const Button = styled.Button`
  padding-top: 10px;
`;
