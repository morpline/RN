import * as RN from "react-native"
const styles = RN.StyleSheet.create({
    root:{
        display:"flex",
        alignItems:"center",
        
    },
    title:{
        fontFamily:"Playwrite",
        fontSize:48,
    },
    text:{
        fontFamily:"Dosis",
        fontSize:32,
        padding:12
    },
    footnote:{
        fontFamily:"Dosis",
        fontSize:26,
    },
    fancy:{
        fontFamily:"Playwrite",
        fontSize:26
    },
    itemDetailsBlockListSquaresContainer:{
        display:"flex",
        flexDirection:"row",
        flexWrap:true,
        alignItems:"center",
        justifyContent:"center",
    },
    item: {
        minWidth: 120,
        height:120,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        margin:12,
        borderWidth:2,
        borderColor:"#aaaaaa",
        borderRadius:10,
        padding:12,
    },
    button:{
        backgroundColor:"#000000",
        borderWidth:2,
        borderColor:"#000000",
        borderRadius:10,
        
    },
    buttonText:{
        fontFamily:"Playwrite",
        fontSize:26,
        color:"#ffffff",
        padding:12,
    },
    logo:{
        fontFamily:"Playwrite",
        fontSize:100
    },
    menuElement:{
        
        minWidth: 400,
        height:60,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        margin:12,
        borderWidth:2,
        borderColor:"#aaaaaa",
        borderRadius:10,
    },
    menuElementText:{
        fontFamily:"Dosis",
        fontSize:32,
        padding:12,
        width:300,
        textAlign:"right"
    }
})

export default styles;