import * as RN from "react-native";
import * as R from "react";
import * as ER from "expo-router"
import * as HS from "@/components/highscore";

export default function settings({navigation}) {
  
  const router = ER.useRouter();
  return (
    <RN.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RN.Text style={styles.header}>Settings</RN.Text>
      <RN.View></RN.View>
      
      <RN.View style={styles.text}>

        <RN.Button
          onPress={()=>{
            HS.storeData(10000000)
          }}
          title="Reset Highscore"
          color={"#000"}
          
        />
      </RN.View>
      <RN.View style={styles.text}>

        <RN.Button
          onPress={()=>{
            router.back();
          }}
          title="Back"
          color={"#000"}
          
        />
      </RN.View>
      {/* <RN.Pressable>
        <RN.Text style={styles.text}>Settings</RN.Text>
      </RN.Pressable> */}
      <RN.View>
        
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