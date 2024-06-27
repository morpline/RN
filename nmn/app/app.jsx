import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Index from "@/app/(tabs)/index.jsx"
import game from "@/app/(tabs)/game"
import settings from "@/app/(tabs)/settings"
import results from "@/app/(tabs)/results"


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer 
      documentTitle={"Name My Number"}
      
      linking={
        {
          // ...linking configuration
        }
      }
    >
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={settings} />
        <Stack.Screen name="(home)/game" component={game} />
        <Stack.Screen
          name="(home)"
          component={Index}
          options={{
            title: 'Name My Number',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;