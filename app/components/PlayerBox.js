import React from "react";
import PropTypes from "prop-types";

import { Text, View, Button } from "react-native";

import Ledger from "./Ledger";
import LifeButtonBox from "./LifeButtonBox";
import LifeTotal from "./LifeTotal";
import PlayerName from "./PlayerName";

class PlayerBox extends React.Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          flexDirection: "row",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "grey",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            width: "50%",
            flex: 2,
            justifyContent: "space-between"
          }}
        >
          <PlayerName name={this.props.player.name} />
          <LifeTotal life={this.props.player.life} />
          <LifeButtonBox
            updateLifeTotal={this.props.updateLifeTotal}
            playerKey={this.props.index}
          />
        </View>

        <View style={{ width: "50%", height: "100%" }}>
          <Ledger ledger={this.props.player.ledger} />
        </View>
      </View>
    );
  }
}

PlayerBox.propTypes = {
  player: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired
};

export default PlayerBox;
