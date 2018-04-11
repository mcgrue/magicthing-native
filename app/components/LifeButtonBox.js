import React from "react";
import PropTypes from "prop-types";

import { View } from "react-native";

import LifeChangeButton from "./LifeChangeButton";

class LifeButtonBox extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          flexGrow: 1
        }}
      >
        <View
          style={{
            flexGrow: 1
          }}
        >
          <LifeChangeButton
            amount={-1}
            updateLifeTotal={this.props.updateLifeTotal}
            playerKey={this.props.playerKey}
          />

          <LifeChangeButton
            amount={-5}
            updateLifeTotal={this.props.updateLifeTotal}
            playerKey={this.props.playerKey}
          />
        </View>

        <View
          style={{
            flexGrow: 1
          }}
        >
          <LifeChangeButton
            amount={+1}
            updateLifeTotal={this.props.updateLifeTotal}
            playerKey={this.props.playerKey}
          />

          <LifeChangeButton
            amount={+5}
            updateLifeTotal={this.props.updateLifeTotal}
            playerKey={this.props.playerKey}
          />
        </View>
      </View>
    );
  }
}

LifeButtonBox.propTypes = {
  updateLifeTotal: PropTypes.func.isRequired,
  playerKey: PropTypes.string.isRequired
};

export default LifeButtonBox;
