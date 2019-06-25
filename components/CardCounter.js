import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

class CardCounter extends React.PureComponent {
  render() {
    return <Counter>{this.getNumberOfCards()} cards</Counter>;
  }

  getNumberOfCards() {
    const { deck, cards } = this.props;

    return cards[deck] ? cards[deck].length : 0;
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards
  };
}

export default connect(mapStateToProps)(CardCounter);

const Counter = styled.Text`
  font-size: 16px;
  color: gray;
  margin-top: 2px;
`;
