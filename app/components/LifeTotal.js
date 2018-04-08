import React from "react";
import PropTypes from "prop-types";

import { Text } from "react-native";

const LifeTotal = props => <Text>{props.life}</Text>;

LifeTotal.propTypes = {
  life: PropTypes.number.isRequired
};

export default LifeTotal;
