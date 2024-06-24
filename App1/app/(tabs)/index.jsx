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

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import * as React from "react";
import * as SecureStore from "expo-secure-store";

async function save(key, value) {
  await SecureStore.setItemAsync("key", value);
  alert("Saved");
}

async function load(key) {
  let l = await SecureStore.getItemAsync("key");
  return l;
}

class task {
  constructor(name, complete) {
    this.name = name;
    this.complete = complete;
  }
}

export default function HomeScreen() {
  const [teX1t, walloftext] = React.useState("");
  const [deeat, seaofdoot] = React.useState([
    new task("test",true),
  ]);
  let teX2t = "";
  console.log("deeat", deeat);
  function addHandler(deeee = { name: "", complete: false }) {
    seaofdoot((deeat) => [...deeat, deeee]);
  }
  function onShangeText(t) {
    console.log("onShangeTeX1t", t);
    // walloftext(t)
    teX2t = t;
  }
  let Iplut = () => (
    <TextInput
      style={styles.textInput}
      // onChangeText={onShangeText}
      onChangeText={onShangeText}
      placeholder="Enter name"
      onSubmitEditing={() => {
        let d = new task(teX2t,false);
        addHandler(d);
      }}
    />
  );
  return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.reactLogo}
          />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">RNCrudd</ThemedText>
        </ThemedView>

        <ThemedView>
          {deeat.map((e, i) => (
            <Pressable style={styles.stepContainer} key={i}
              onLongPress={()=>{
                let d = []
                deeat.forEach(ee=>{
                  if(ee.name!=e.name){
                    d.push(ee)

                    
                  }
                  seaofdoot(d)
                })
              }}
            >
              <ThemedText type="defaultSemiBold">
                {e.name}
              </ThemedText>
              <Pressable onPressOut={()=>{
                console.log("toggle")
                let d = [...deeat]
                d.forEach((ee,ii)=>{
                  if(ee.name==e.name){
                    ee.complete = !e.complete
                  }
                  seaofdoot(d)
                  return;
                })
              }}>
                <Image
                  source={
                    e.complete
                      ? require("@/assets/images/react-logo.png")
                      : require("@/assets/images/icon.png")
                  }
                  style={styles.image}
                />
              </Pressable>
            </Pressable>
          ))}
        </ThemedView>

        <ThemedView style={styles.titleContainer}>
          <InputAccessoryView>
            <Iplut />
          </InputAccessoryView>
        </ThemedView>
      </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#222222",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  text: {
    color: "#fefeff",
  },
  textInput: {
    color: "#ffffff",
    backgroundColor: "#777777",
    padding: 8,
    borderRadius: 4,
  },
  image: {
    width: 70,
    height: 70,
  },
});
