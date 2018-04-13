"use strict";

import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PlayerBox from "./PlayerBox";

import * as Actions from "../actions"; //Import your actions

const UPDATE_TIMEOUT_IN_MS = 1000;

console.disableYellowBox = true;

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: {
                "player-1": {
                    name: "Nacho3",
                    life: 20,
                    lastUpdate: 0,
                    ledger: []
                },
                "player-2": {
                    name: "Taco",
                    life: 20,
                    lastUpdate: 0,
                    ledger: []
                }
            }
        };

        // this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.props.getData(); //call our action
    }

    updatePlayerName = (playerKey, newName) => {
        const players = { ...this.state.players };
        players[playerKey].name = newName;
        this.setState({ players });
    };

    updateLifeTotal = (playerKey, lifeDelta) => {
        const players = { ...this.state.players };
        const ledger = players[playerKey].ledger;

        const mostRecentUpdate = players[playerKey].lastUpdate;
        const now = new Date().getTime();

        players[playerKey].life += lifeDelta;
        players[playerKey].lastUpdate = now;

        if (!now || now > mostRecentUpdate + UPDATE_TIMEOUT_IN_MS) {
            players[playerKey].ledger.push({
                timestamp: players[playerKey].lastUpdate,
                delta: lifeDelta,
                total: players[playerKey].life
            });
        } else {
            const lastIdx = players[playerKey].ledger.length - 1;

            players[playerKey].ledger[lastIdx].delta += lifeDelta;
            players[playerKey].ledger[lastIdx].total = players[playerKey].life;
            players[playerKey].ledger[lastIdx].lastUpdate = now;
        }

        this.setState({ players });
    };

    render() {
        const loadingIndicator = (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator animating={true} />
            </View>
        );

        const mainView = (
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5%"
                }}
            >
                <Text>Tome of Life!</Text>

                {Object.keys(this.state.players).map(key => (
                    <PlayerBox
                        key={key}
                        index={key}
                        player={this.state.players[key]}
                        updateLifeTotal={this.updateLifeTotal}
                        updatePlayerName={this.updatePlayerName}
                    />
                ))}
            </View>
        );

        if (this.props.loading) {
            return loadingIndicator;
        } else {
            return mainView;
        }
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },

    fooBar: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },

    row: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title: {
        fontSize: 15,
        fontWeight: "600"
    },

    description: {
        marginTop: 5,
        fontSize: 14
    }
});
