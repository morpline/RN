import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Menu from "@/screens/Menu";
import UserInfo from "@/screens/UserInfo";
import List from "@/screens/List";
import Login from "@/components/Login";
import styles from "@/components/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import AuthContxtProvider from "../auth/loginContext"
import { AuthContxt } from "@/auth/loginContext";



SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

function MainStackScreen() {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="Main" component={Menu} />
            <MainStack.Screen name="Login" component={Login} />
        </MainStack.Navigator>
    );
}


const UserStack = createNativeStackNavigator();

function UserStackScreen() {
    return (
        <UserStack.Navigator screenOptions={{ headerShown: false }}>
            <UserStack.Screen name="Main" component={UserInfo} />
            <UserStack.Screen name="Login" component={Login} />
        </UserStack.Navigator>
    );
}

const ListStack = createNativeStackNavigator();

function ListStackScreen() {
    return (
        <ListStack.Navigator screenOptions={{ headerShown: false }}>
            <ListStack.Screen name="Main" component={List} />
            <ListStack.Screen name="Login" component={Login} />
        </ListStack.Navigator>
    );
}




export default function MyStack() {
    const [loaded, error] = useFonts({
        Dosis: require("../assets/fonts/Dosis.ttf"),
        Playwrite: require("../assets/fonts/Playwrite.ttf"),
    });
    const suthcontxt = React.useContext(AuthContxt);


    React.useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <>
            <StatusBar style="dark" />
            <AuthContxtProvider>
                <NavigationContainer independent={true}>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, size }) => {
                                let iconName = "bug";

                                if (route.name === "Menu") {
                                    iconName = focused
                                        ? "calendar"
                                        : "calendar-outline";
                                } else if (route.name === "Profile") {
                                    iconName = focused
                                        ? "person"
                                        : "person-outline";
                                } else if (route.name === "List") {
                                    iconName = focused
                                        ? "ellipsis-horizontal"
                                        : "ellipsis-horizontal-outline";
                                }

                                // You can return any component that you like here!
                                return (
                                    <Ionicons
                                        name={iconName}
                                        size={size}
                                        color={"#000000"}
                                    />
                                );
                            },
                            tabBarActiveTintColor: "black",
                            tabBarInactiveTintColor: "gray",
                            headerShown: false,
                            tabBarItemStyle: {
                                fontFamily: "Playwrite",
                            },
                        })}
                    >
                        <Tab.Screen name="Menu" component={MainStackScreen} />
                        <Tab.Screen name="Profile" component={UserStackScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
            </AuthContxtProvider>
        </>
    );
}
