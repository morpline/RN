import { Tabs } from 'expo-router';
import React from 'react';
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  Button,
  TextInput,
  Pressable,
  View,
  InputAccessoryView
} from "react-native";

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedView } from '@/components/ThemedView';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  // return (
  //   <ThemedView>
  //     e
  //   </ThemedView>
  // );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
      }}
      >
      <Tabs.Screen
        name="index"
        
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}/>
          ),
        }}
      />
    </Tabs>
  );
}
