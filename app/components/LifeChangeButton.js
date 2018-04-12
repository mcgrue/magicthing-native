import React from "react";
import PropTypes from "prop-types";

import { TouchableOpacity, Text, View } from "react-native";

class LifeChangeButton extends React.Component {
  handleChange = evt => {
    const delta = parseInt(this.props.amount);

    this.props.updateLifeTotal(this.props.playerKey, delta);
  };

  render() {
    const amt = this.props.amount;
    const title = "" + (amt >= 0 ? "+" + amt : amt);

    const myStyle = Object.assign({}, baseStyle, styles[this.props.position]);

    return (
      <TouchableOpacity title={title} onPress={this.handleChange}>
        <View style={myStyle}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const baseStyle = {
  // width: "100%",
  // backgroundColor: "#888888",
  borderTopColor: "transparent",
  borderBottomColor: "transparent",
  borderLeftColor: "transparent",
  borderRightColor: "transparent",
  margin: 1
};

const borderColor = "#DDDDDD";
const borderWidth = 1;

const styles = {
  topLeft: {
    borderWidth: borderWidth,
    borderBottomColor: borderColor,
    borderRightColor: borderColor,
    marginLeft: 5,
    marginRight: 1
  },

  bottomLeft: {
    borderWidth: borderWidth,
    borderTopColor: borderColor,
    borderRightColor: borderColor,
    marginLeft: 5,
    marginRight: 1
  },

  topRight: {
    borderWidth: borderWidth,
    borderBottomColor: borderColor,
    borderLeftColor: borderColor,

    marginLeft: 1,
    marginRight: 5
  },

  bottomRight: {
    borderWidth: borderWidth,
    borderTopColor: borderColor,
    borderLeftColor: borderColor,

    marginLeft: 1,
    marginRight: 5
  }
};

LifeChangeButton.propTypes = {
  amount: PropTypes.number.isRequired,
  playerKey: PropTypes.string.isRequired,
  updateLifeTotal: PropTypes.func.isRequired
};

export default LifeChangeButton;
