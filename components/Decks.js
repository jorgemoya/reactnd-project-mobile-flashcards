import React, { PureComponent } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import CardCounter from "./CardCounter";

class Decks extends PureComponent {
  render() {
    return <FlatList data={this.props.decks} renderItem={this.renderItem} />;
  }

  renderItem = ({ item }) => {
    handleOnPress = () => {
      this.props.navigation.navigate("Deck", {
        key: item.key
      });
    };

    return (
      <ListItem>
        <TouchableOpacity onPress={handleOnPress}>
          <Title>{item.key}</Title>
          <CardCounter deck={item.key} />
        </TouchableOpacity>
      </ListItem>
    );
  };
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps)(Decks);

const ListItem = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

const Title = styled.Text`
  font-size: 22px;
`;
