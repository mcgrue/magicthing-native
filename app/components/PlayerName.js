import React from "react";
import PropTypes from "prop-types";

import { Text } from "react-native";

class PlayerName extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 28, textAlign: "center" }}>
        {this.props.name}
      </Text>
    );
  }
}

PlayerName.propTypes = {
  name: PropTypes.string.isRequired
};

export default PlayerName;
