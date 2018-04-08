import React from "react";
import PropTypes from "prop-types";

import { Text, View, Button } from "react-native";

import PlayerName from "./PlayerName";
import LifeTotal from "./LifeTotal";

class PlayerBox extends React.Component {
  render() {
    const self = this;
    const handleChange = evt => {
      self.props.updateLifeTotal(self.props.index, -1);
    };

    return (
      <View>
        <PlayerName name={this.props.player.name} />
        <LifeTotal life={this.props.player.life} />
        <Button title="-1" onPress={handleChange} />
      </View>
    );
  }
}

PlayerBox.propTypes = {
  player: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired
};

export default PlayerBox;
