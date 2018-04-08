import React from "react";
import PropTypes from "prop-types";

import { Text } from "react-native";

const PlayerName = props => <Text>{props.name}</Text>;

PlayerName.propTypes = {
  name: PropTypes.string.isRequired
};

export default PlayerName;
