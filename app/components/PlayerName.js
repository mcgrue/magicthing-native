import React from "react";
import PropTypes from "prop-types";

import { MAX_NAME_LENGTH } from "../helpers/consts";

import { Text, TextInput, TouchableHighlight, View } from "react-native";

class PlayerName extends React.Component {
  constructor(props) {
    super(props);

    this.state = { editMode: false };
  }

  commitCrimes = event => {
    const newName = event.nativeEvent.text.trim();
    if (newName) {
      this.props.updatePlayerName(this.props.playerKey, newName);
    }
    this.setState({ editMode: false });
  };

  toggleModeOn = () => {
    this.setState({ editMode: true });
  };

  render() {
    const display = (
      <TouchableHighlight onPress={() => this.toggleModeOn()}>
        <View>
          <Text style={{ fontSize: 28, textAlign: "center" }}>
            {this.props.name}
          </Text>
        </View>
      </TouchableHighlight>
    );

    const edit = (
      <TextInput
        style={{ fontSize: 28, borderColor: "gray", borderWidth: 1 }}
        onEndEditing={e => this.commitCrimes(e)}
        placeholder={this.props.name}
        maxLength={MAX_NAME_LENGTH}
        autoFocus={true}
      />
    );

    if (this.state.editMode) {
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
