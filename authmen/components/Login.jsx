import React from "react";
import * as RN from "react-native";
import styles from "./styles";
import * as apiHelper from "../auth/apiHelper";
import Ionicons from "@expo/vector-icons/Ionicons";
import verify from "../auth/emailVerifier";
import Loading from "./Loading";
import { AuthContxt } from "@/auth/loginContext";

function Login(props) {
    const { navigation } = props;
    const login = props.route.params?.login;
    const [mode, MODE] = React.useState(login ? false : true);
    const [valid, VALID] = React.useState(false);
    const [loading, LOADING] = React.useState(false);

    let user = { email: "", password: "" };
    let dsv = { email: false, password: false };

    const suthcontxt = React.useContext(AuthContxt);

    function backHandler() {
        navigation.goBack();
    }
    function switchModes() {
        MODE(!mode);
    }

    function updateEmail(e) {
        dsv.email = verify(e);
        if (dsv.email) {
            user.email = e;
        } else {
        }
    }
    function updatePassword(e) {
        let s = e.length;
        if (s >= 6) {
            user.password = e;
            dsv.password = true;
        } else {
            dsv.password = false;
        }
    }

    async function enterHandler() {
        if (!dsv.email) {
            alert(`${user.email} is not a valid email.`);
            return;
        }
        if (!dsv.password) {
            alert("Enter a valid Password.");
            return;
        }
        LOADING(true);
        try {
            let r;
            if (login) {
                r = await apiHelper.signUp(user.email, user.password);
            } else {
                r = await apiHelper.logIn(user.email, user.password);
            }
            suthcontxt.authenticate(r.data.idToken, r.data.email);
        } catch (err) {
            alert(err.response.data.error.message);
        }
        LOADING(false);
        // if (suthcontxt.isAuthenticated) {
        navigation.navigate("Main");
        // }
    }
    if (loading) {
        return <Loading message={"Please Wait…."}></Loading>;
    }
    return (
        <>
            <RN.SafeAreaView style={styles.root}>
                <RN.View style={styles.header}>
                    <RN.Text style={styles.logo}>
                        {mode ? "Login" : "Sign Up"}
                    </RN.Text>
                    <RN.Pressable
                        onPress={backHandler}
                        style={styles.centeredBox}
                    >
                        {/* <RN.Text style={styles.buttonText}>Back</RN.Text> */}
                        <RN.View style={styles.button}>
                            <Ionicons
                                name={"close-outline"}
                                size={40}
                                color={"#FFFfff"}
                            />
                        </RN.View>
                    </RN.Pressable>
                </RN.View>
                <RN.View style={styles.root}>
                    <RN.View style={styles.borderedRoot}>
                        <RN.Text style={styles.text}>Email</RN.Text>
                        <RN.TextInput
                            style={styles.item}
                            onChangeText={updateEmail}
                            textContentType="emailAddress"
                            autoComplete="email"
                            onSubmitEditing={enterHandler}
                            inputMode="email"
                        />
                        <RN.Text style={styles.text}>Password</RN.Text>
                        <RN.TextInput
                            style={styles.item}
                            onChangeText={updatePassword}
                            textContentType="password"
                            autoCapitalize="none"
                            caretHidden={true}
                            onSubmitEditing={enterHandler}
                            autoCorrect={false}
                            secure
                        />
                        <RN.Pressable
                            style={styles.button}
                            onPress={enterHandler}
                        >
                            <RN.Text style={styles.buttonText}>
                                {mode ? "Log In" : "Sign Up"}
                            </RN.Text>
                        </RN.Pressable>
                    </RN.View>
                    <RN.Pressable onPress={switchModes}>
                        <RN.Text style={styles.footnote}>
                            {mode
                                ? "Need an account?"
                                : "Already have an account?"}
                        </RN.Text>
                    </RN.Pressable>
                </RN.View>
            </RN.SafeAreaView>
        </>
    );
}

export default Login;
