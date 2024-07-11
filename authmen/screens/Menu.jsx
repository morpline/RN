import React from "react";
import * as RN from "react-native";
import styles from "../components/styles";
import { AuthContxt } from "@/auth/loginContext";
function Menu(props) {
    const { navigation } = props;

    const suthcontxt = React.useContext(AuthContxt);

    function loginHandler() {
        navigation.navigate("Login", { login: false });
    }
    function signupHandler() {
        navigation.navigate("Login", { login: true });
    }
    return (
        <>
            <RN.View style={styles.root}>
                <RN.View style={styles.header}>
                    <RN.Text style={styles.logo}>Menu</RN.Text>
                    <RN.Pressable onPress={loginHandler} style={styles.item}>
                        <RN.Text style={styles.fancy}>Log In</RN.Text>
                    </RN.Pressable>
                </RN.View>
                <RN.ScrollView contentContainerStyle={styles.borderedRoot}>
                    <RN.View style={styles.item}>
                        <RN.Text style={styles.fancy}>
                            Welcome to authmen
                        </RN.Text>
                    </RN.View>
                    {!suthcontxt.isAuthenticated && 
                    <RN.View style={styles.item}>
                        <RN.Text style={styles.text}>
                            Sign in to unlock more features.
                        </RN.Text>
                    </RN.View>}
                    <RN.View style={styles.item}>
                        <RN.Text style={styles.logo}>by morpline</RN.Text>
                    </RN.View>
                    {suthcontxt.isAuthenticated && 
                    <RN.View style={styles.item}>
                        <RN.Text style={styles.text}>
                            Powered by React Native
                        </RN.Text>
                    </RN.View>}
                    {suthcontxt.isAuthenticated && 
                    <RN.View style={styles.item}>
                        <RN.Text style={styles.text}>
                            Backend: Firestore
                        </RN.Text>
                    </RN.View>}
                </RN.ScrollView>
            </RN.View>
        </>
    );
}

export default Menu;
