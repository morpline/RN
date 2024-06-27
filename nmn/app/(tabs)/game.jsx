import * as RN from "react-native";
import * as R from "react";
import * as ER from "expo-router"
import * as HS from "@/components/highscore"
const local = {
  eng:{
    pick:"Pick a number from 0 to 100,000.",
    correct:"Correct",
    high:"Go higher",
    low:"Try lower",
    yhm:"You have made ",
    guesses:" guesses",
    error:"An error occurred, please try again."
  },
  nonsense:{
    pick:"Ai sud tre in 0 blo 100,000 wan tye.",
    correct:"Contowoan",
    high:"Mais rien do",
    low:"Mais ries zuonin",
    yhm:"Tu on ta wuolan ",
    guesses:" borgindas wa tye."
  }
}

let lang = "eng"

export default function Index({navigation}) {
  const [guesses, nGuess] = R.useState(0);
  const [message, sMessage] = R.useState(local[lang].pick)
  const [guess, sGuess] = R.useState("");
  // const [guessLog, setGuessLog] = R.useState([]);
  const [numberToGuess, donotusethisfunction] = R.useState(Math.round(100000*Math.random()))
  const router = ER.useRouter();

  function handleEnterGuess () {
    if(guess == "") {
      sMessage(local[lang].error)
      return;
    }

    let g = Number(guess)
    nGuess(guesses+1)
    if(g == numberToGuess) {
      sMessage(local[lang].correct)
    }
    else if (g > numberToGuess) {
      sMessage(local[lang].low)
    }
    else if (g < numberToGuess) {
      sMessage(local[lang].high)
    }
  }

  function handleUpdate (t) {
    console.log(t)
    sGuess(t)
  }

  return (
    <RN.View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <RN.Text style={styles.header}>Enter Guess</RN.Text>
      <RN.View style={styles.text}>
        <RN.Text>{message}</RN.Text>
      </RN.View>
      <RN.View style={styles.text}>
          <RN.TextInput style={styles.input} onChangeText={handleUpdate} onSubmitEditing={handleEnterGuess}/>
      </RN.View>
      {message==local[lang].correct?(<RN.View>
          <RN.Pressable onPress={()=>{
            HS.getData().then(e=>{
              if (guesses < e) {
                HS.storeData(guesses)
              }
            }).then(()=>{
              router.replace(`/results?tries=${guesses}`)
            })
          }}>
            <RN.Text>Next</RN.Text>
          </RN.Pressable>
      </RN.View>):(
        <RN.Text style={styles.text}>{local[lang].yhm+guesses+local[lang].guesses}</RN.Text>
      )}
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
  },
  input: {
    margin:8,
    borderWidth:3,
    borderColor:"#aaa",
    minWidth:128,
  }

});