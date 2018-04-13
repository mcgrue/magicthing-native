import React from "react";
import PropTypes from "prop-types";

import { Text, View } from "react-native";

const foo = (total, delta, timestamp) => {
  const key = "entry-" + timestamp;

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        overflow: "scroll"
      }}
      key={key}
    >
      <View
        style={{
          width: "50%",
          borderColor: "#DDDDDD",
          borderWidth: 1,
          borderStyle: "solid",
          flex: 0.5
        }}
      >
        <Text style={{ textAlign: "center" }}>{total}</Text>
      </View>

      <View
        style={{
          width: "50%",
          borderColor: "#DDDDDD",
          borderWidth: 1,
          borderStyle: "solid",
          flex: 0.5
        }}
      >
        <Text style={{ textAlign: "center" }}>{delta}</Text>
      </View>
    </View>
  );
};

class Ledger extends React.Component {
  render() {
    return (
      <View style={{ width: "100%" }}>
        {this.props.ledger.map((item, index) => {
          return foo(item.total, item.delta, item.timestamp);
        })}
      </View>
    );
  }
}

Ledger.propTypes = {};

export default Ledger;
