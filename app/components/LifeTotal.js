import React from "react";
import PropTypes from "prop-types";

import { Text } from "react-native";

const LifeTotal = props => (
  <Text style={{ fontSize: 56, textAlign: "center" }}>{props.life}</Text>
);

LifeTotal.propTypes = {
  life: PropTypes.number.isRequired
};

export default LifeTotal;
