import React from "react";
import PropTypes from "prop-types";

import { View } from "react-native";

import LifeChangeButton from "./LifeChangeButton";

class LifeButtonBox extends React.Component {
  render() {
    return (
      <View>
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
    );
  }
}

LifeButtonBox.propTypes = {
  updateLifeTotal: PropTypes.func.isRequired,
  playerKey: PropTypes.string.isRequired
};

export default LifeButtonBox;
