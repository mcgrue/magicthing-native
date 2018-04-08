import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-native";

class LifeChangeButton extends React.Component {
  handleChange = evt => {
    const delta = parseInt(this.props.amount);

    this.props.updateLifeTotal(this.props.playerKey, delta);
  };

  render() {
    const amt = this.props.amount;
    const title = "" + (amt >= 0 ? "+" + amt : amt);

    return <Button title={title} onPress={this.handleChange} />;
  }
}

LifeChangeButton.propTypes = {
  amount: PropTypes.number.isRequired,
  playerKey: PropTypes.string.isRequired,
  updateLifeTotal: PropTypes.func.isRequired
};

export default LifeChangeButton;
