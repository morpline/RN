import * as RN from "react-native";
import * as R from "react";
import * as ER from "expo-router"
import * as HS from "@/components/highscore";

export default function Index({}) {
  let [highscore,shs] = R.useState(0)
  HS.getData().then((e)=>{
    shs(e)
  })
  const router = ER.useRouter();
  return (
    <RN.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RN.Text style={styles.header}>Name My Number</RN.Text>
      <RN.View></RN.View>
      <RN.View style={styles.text}>

        <RN.Button
          onPress={()=>{
            router.replace('/game');
          }}
          title="Play"
          color={"#000"}
          
        />
      </RN.View>
      <RN.View style={styles.text}>
          <RN.Text>Highscore:{highscore}</RN.Text>
      </RN.View>
      {/* <RN.Pressable>
        <RN.Text style={styles.text}>Settings</RN.Text>
      </RN.Pressable> */}
      <RN.View>
        <RN.Button
          onPress={()=>{
            router.push('/settings');
            
          }}
          title="Settings"
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