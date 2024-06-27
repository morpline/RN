import * as RN from "react-native";
import * as R from "react";
import * as ER from "expo-router"

export default function Index() {
  const router = ER.useRouter();
  const tries = ER.useLocalSearchParams();
  return (
    <RN.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RN.Text style={styles.header}>Success!</RN.Text>
      <RN.View style={styles.text}>
        <RN.Text>
          It took {tries.tries} tries.
        </RN.Text>
      </RN.View>
      <RN.View style={styles.text}>

        <RN.Button
          onPress={()=>{
            router.replace("game")
          }}
          title="Play Again"
          color={"#000"}
          
        />
      </RN.View>
      {/* <RN.Pressable>
        <RN.Text style={styles.text}>Settings</RN.Text>
      </RN.Pressable> */}
      <RN.View>
        <RN.Button
          onPress={()=>{
            router.replace("/")
          }}
          title="Main Menu"
          color={"#000"}
        />
      </RN.View>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  header: {
    fontSize: 32,
    margin:32
  },
  text:{
    // fontSize: 20,
    // color:"#FFF",
    // backgroundColor:"#000",
    margin:8,
  }

});