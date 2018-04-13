import React from "react";
import PropTypes from "prop-types";

import { Text } from "react-native";

class PlayerName extends React.Component {
  constructor(props) {
    super(props);

    this.editMode = false;
  }

  render() {
    const display = (
      <Text style={{ fontSize: 28, textAlign: "center" }}>
        {this.props.name}
      </Text>
    );

    const edit = (
      <Text style={{ fontSize: 28, textAlign: "center" }}>EDIT</Text>
    );

    if (this.editMode) {
      return edit;
    } else {
      return display;
    }
  }
}

PlayerName.propTypes = {
  name: PropTypes.string.isRequired
};

export default PlayerName;
