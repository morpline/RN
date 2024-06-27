import { Slot } from 'expo-router';
import { View } from "react-native"

export default function HomeLayout() {
  return (
    <>
      <View >
        <Slot />
      </View >
    </>
  );
}