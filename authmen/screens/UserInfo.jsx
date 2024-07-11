import React from "react";
import * as RN from "react-native";
import styles from "../components/styles";
import { AuthContxt } from "@/auth/loginContext";

function UserInfo(props) {
    const { navigation } = props;

    const suthcontxt = React.useContext(AuthContxt);

    function loginHandler() {
        navigation.navigate("Login", { login: false });
    }
    function logoutHandler() {
        // navigation.navigate("Login", { login: true });
    }
    if (!suthcontxt.isAuthenticated) {
        return (
            <>
                <RN.View style={styles.loadin}>
                    <RN.View >
                        <RN.Text style={styles.text}>You must log in first.</RN.Text>
                    <RN.Pressable onPress={loginHandler} style={styles.item}>
                        <RN.Text style={styles.fancy}>Log In</RN.Text>
                    </RN.Pressable>
                    </RN.View>
                </RN.View>
            </>
        );
    }
    return (
        <>
            <RN.View style={styles.root}>
                <RN.View style={styles.header}>
                    <RN.Text style={styles.logo}>User Info</RN.Text>
                    <RN.Pressable onPress={logoutHandler} style={styles.item}>
                        <RN.Text style={styles.fancy}>Log Out</RN.Text>
                    </RN.Pressable>
                </RN.View>
                <RN.ScrollView contentContainerStyle={styles.borderedRoot}>
                    <RN.View style={styles.root}>
                        <RN.View style={styles.item}>
                            <RN.Text style={styles.text}>
                                User Email Address
                            </RN.Text>
                            <RN.Text style={styles.text}>
                                {suthcontxt.isAuthenticated
                                    ? suthcontxt.email
                                    : "None"}
                            </RN.Text>
                        </RN.View>
                        <RN.View style={styles.item}>
                            <RN.Text style={styles.text}>Authenticted</RN.Text>
                            <RN.Text style={styles.text}>
                                {suthcontxt.isAuthenticated ? "Yes" : "No"}
                            </RN.Text>
                        </RN.View>
                        <RN.View style={styles.item}>
                            <RN.Text style={styles.text}>Token</RN.Text>
                            <RN.Text style={styles.text}>
                                {suthcontxt.isAuthenticated
                                    ? suthcontxt.token.slice(0, 10) + "..."
                                    : "None"}
                            </RN.Text>
                        </RN.View>
                    </RN.View>
                </RN.ScrollView>
            </RN.View>
        </>
    );
}

export default UserInfo;
