import React from "react";
import PropTypes from "prop-types";

import { Text, View, Button } from "react-native";

import PlayerName from "./PlayerName";
import LifeTotal from "./LifeTotal";
import LifeChangeButton from "./LifeChangeButton";

class PlayerBox extends React.Component {
  render() {
    return (
      <View>
        <PlayerName name={this.props.player.name} />
        <LifeTotal life={this.props.player.life} />
        <LifeChangeButton
          amount={-1}
          updateLifeTotal={this.props.updateLifeTotal}
          playerKey={this.props.index}
        />

        <LifeChangeButton
          amount={-5}
          updateLifeTotal={this.props.updateLifeTotal}
          playerKey={this.props.index}
        />

        <LifeChangeButton
          amount={+1}
          updateLifeTotal={this.props.updateLifeTotal}
          playerKey={this.props.index}
        />

        <LifeChangeButton
          amount={+5}
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
