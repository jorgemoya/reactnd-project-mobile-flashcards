import React, { PureComponent } from "react";
import { FlatList, Text } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components";

class Decks extends PureComponent {
  render() {
    return <FlatList data={this.props.decks} renderItem={this.renderItem} />;
  }

  renderItem({ item }) {
    return (
      <ListItem>
        <Title>{item.title}</Title>
        <Cards>0 cards</Cards>
      </ListItem>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps)(Decks);

const ListItem = styled.View`
  padding: 20px;
  /* border-bottom: 1px solid gray; */
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

const Title = styled.Text`
  font-size: 22px;
`;

const Cards = styled.Text`
  font-size: 16px;
  color: gray;
  margin-top: 2px;
`;
