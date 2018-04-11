import React from "react";
import PropTypes from "prop-types";

import { Text, View, Button } from "react-native";

import PlayerName from "./PlayerName";
import LifeTotal from "./LifeTotal";
import LifeButtonBox from "./LifeButtonBox";

class PlayerBox extends React.Component {
  render() {
    return (
      <View
        style={{
          width: "80%",
          flex: 1,
          border: "1px solid grey",
          justifyContent: "center"
        }}
      >
        <PlayerName name={this.props.player.name} />
        <LifeTotal life={this.props.player.life} />
        <LifeButtonBox
          updateLifeTotal={this.props.updateLifeTotal}
          playerKey={this.props.index}
        />
      </View>
    );
  }
}

PlayerBox.propTypes = {
  player: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired
};

export default PlayerBox;
