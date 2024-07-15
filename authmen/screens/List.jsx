import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import * as RN from "react-native";
import styles from "../components/styles";
import { AuthContxt } from "@/auth/loginContext";
import { fetchAll } from "../auth/apiHelper";
import Loading from "../components/Loading";

function UserInfo(props) {
    const { navigation } = props;

    const suthcontxt = React.useContext(AuthContxt);
    const [data, DATA] = React.useState([]);
    const [err, ERR] = React.useState("");
    const [loading, LOADING] = React.useState(true);

    React.useEffect(() => {
        if( suthcontxt.isAuthenticated )
        try{

            const connection = fetchAll(suthcontxt.token).then((e) => {
                console.log(e);
                LOADING(false);
            });
        } catch (errr) {
            alert(errr.message);
        }
    });

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
                    <RN.View>
                        <RN.Text style={styles.text}>
                            You must log in first.
                        </RN.Text>
                        <RN.Pressable
                            onPress={loginHandler}
                            style={styles.item}
                        >
                            <RN.Text style={styles.fancy}>Log In</RN.Text>
                        </RN.Pressable>
                    </RN.View>
                </RN.View>
            </>
        );
    }
    if (loading) {
        return (
            <>
                <Loading message={"Loading..."}></Loading>
            </>
        );
    }
    return (
        <>
            <RN.View style={styles.root}>
                <RN.View style={styles.header}>
                    <RN.Text style={styles.logo}>List</RN.Text>
                </RN.View>
                <RN.ScrollView contentContainerStyle={styles.borderedRoot}>
                    <RN.View style={styles.root}>
                        <RN.View style={styles.item}>
                            <RN.Text style={styles.text}>
                                This data is only available if you are signed in
                                with a valid key.
                            </RN.Text>
                            <RN.Text style={styles.text}>{err}</RN.Text>
                        </RN.View>
                    </RN.View>
                    {data.map((e, i) => (
                        <RN.View style={styles.item} key={i}>
                            <RN.Text style={styles.text}>{e.name}</RN.Text>
                        </RN.View>
                    ))}
                </RN.ScrollView>
            </RN.View>
        </>
    );
}

export default UserInfo;
