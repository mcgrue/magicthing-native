import React from "react";
import PropTypes from "prop-types";

import { Text, View } from "react-native";

import PlayerName from "./PlayerName";
import LifeTotal from "./LifeTotal";

const PlayerBox = props => {
  return (
    <View>
      <PlayerName name={props.name} />
      <LifeTotal life={props.life} />
    </View>
  );
};

PlayerBox.propTypes = {
  name: PropTypes.string.isRequired,
  life: PropTypes.number.isRequired
};

export default PlayerBox;
