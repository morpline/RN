import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import * as React from 'react';
import Menu from "@/components/Menu"
import FoodItemInfo from "@/components/FoodItemInfo"
import AllergenList from "@/components/AllergenList"
import Ingredients from "@/components/Ingredients"
import Category from "@/components/Category"



SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

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
        <StatusBar style='light'/>
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen name="menu" component={Menu}/>
            <Stack.Screen name="food" component={FoodItemInfo}/>
            <Stack.Screen name="allergen" component={AllergenList}/>
            <Stack.Screen name="ingredients" component={Ingredients}/>
            <Stack.Screen name="category" component={Category}/>
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
};