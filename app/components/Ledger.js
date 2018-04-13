import React from "react";
import PropTypes from "prop-types";

import { Text, View, ScrollView } from "react-native";

const borderColor = "#DDDDDD";

const foo = (total, delta, timestamp) => {
  const key = "entry-" + timestamp;

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        overflow: "scroll",
        padding: 2
      }}
      key={key}
    >
      <View
        style={{
          width: "50%",

          borderTopColor: "transparent",
          borderBottomColor: borderColor,
          borderLeftColor: "transparent",
          borderRightColor: borderColor,
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

          borderTopColor: "transparent",
          borderBottomColor: borderColor,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
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
    const tallyClone = this.props.ledger.slice(0);
    const reverseTally = tallyClone.reverse();

    return (
      <ScrollView style={{ width: "100%" }}>
        {reverseTally.map((item, index) => {
          return foo(item.total, item.delta, item.timestamp);
        })}
      </ScrollView>
    );
  }
}

Ledger.propTypes = {};

export default Ledger;
