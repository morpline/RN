import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import * as React from 'react';
import Menu from "@/components/Menu"
import Edit from "@/components/edit"
import styles from "@/components/styles"
import Ionicons from '@expo/vector-icons/Ionicons';
import ExpensesContextProvider from '@/components/expenses';
import All from "@/components/All"


SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={{headerShown:false}}>
      <MainStack.Screen name="Main" component={Menu.Menu} />
      <MainStack.Screen name="Details" component={Edit} options={{presentation:"modal"}}/>
    </MainStack.Navigator>
  );
}

const AllStack = createNativeStackNavigator();

function AllScreen() {
  return (
    <AllStack.Navigator screenOptions={{headerShown:false}}>
      <AllStack.Screen name="Main" component={All.All} />
      <AllStack.Screen name="Details" component={Edit} options={{presentation:"modal"}}/>
    </AllStack.Navigator>
  );
}

export default function MyStack () {

  const [loaded, error] = useFonts({
    'Dosis': require('../assets/fonts/Dosis.ttf'),
    'Playwrite': require('../assets/fonts/Playwrite.ttf'),
  });

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
        <StatusBar style="dark"/>
        <ExpensesContextProvider>
          <NavigationContainer independent={true}>
            <Tab.Navigator 
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                  let iconName;
      
                  if (route.name === 'Recent') {
                    iconName = focused
                      ? 'calendar'
                      : 'calendar-outline';
                  } else if (route.name === 'All') {
                    iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={"#000000"} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                headerShown:false,
                tabBarItemStyle:{
                  fontFamily:"Playwrite"
                }
              })}>
              <Tab.Screen name="Recent" component={MainStackScreen} />
              <Tab.Screen name="All" component={AllScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </ExpensesContextProvider>
    </>
  );
};