import React from "react";
import PropTypes from "prop-types";

import { View } from "react-native";

import LifeChangeButton from "./LifeChangeButton";

class LifeButtonBox extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 2,
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
            position="topLeft"
          />

          <LifeChangeButton
            amount={-5}
            updateLifeTotal={this.props.updateLifeTotal}
            playerKey={this.props.playerKey}
            position="bottomLeft"
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
            position="topRight"
          />

          <LifeChangeButton
            amount={+5}
            updateLifeTotal={this.props.updateLifeTotal}
            playerKey={this.props.playerKey}
            position="bottomRight"
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
