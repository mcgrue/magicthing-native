"use strict";

import React, { Component } from "react";

import WelcomeInner from "../components/auth/welcome";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import Password from "../components/auth/password";

export default class Welcome extends Component {
    render() {
        return (
            <View
                key="welcome-"
                component={WelcomeInner}
                title="Welcome"
                initial={true}
                panHandlers={null}
            />
            /*
            <Scene
                key="welcome"
                hideNavBar={true}
                hideTabBar
                panHandlers={null}
                schema="modal"
                direction="vertical"
            >
                <Scene
                    key="welcome-"
                    component={WelcomeInner}
                    title="Welcome"
                    initial={true}
                    panHandlers={null}
                />
                <Scene
                    key="login"
                    component={Login}
                    title="Login"
                    panHandlers={null}
                />
                <Scene
                    key="register"
                    component={Register}
                    title="Register"
                    panHandlers={null}
                />
                <Scene
                    key="password"
                    component={Password}
                    title="Password"
                    panHandlers={null}
                />
            </Scene>
*/
        );
    }
}
