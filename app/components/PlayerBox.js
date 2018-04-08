import React from "react";
import PropTypes from "prop-types";

import { Text, View } from "react-native";

import PlayerName from "./PlayerName";
import LifeTotal from "./LifeTotal";

const PlayerBox = props => {
  return (
    <View>
      <PlayerName name={props.player.name} />
      <LifeTotal life={props.player.life} />
    </View>
  );
};

PlayerBox.propTypes = {
  player: PropTypes.object.isRequired
};

export default PlayerBox;
