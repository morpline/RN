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
        padding:12,
        color:"#000000",
    },
    footnote:{
        fontFamily:"Dosis",
        fontSize:20,
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
        // height:120,
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
        flex:1,
        margin:6
    },
    buttonText:{
        fontFamily:"Playwrite",
        fontSize:20,
        color:"#ffffff",
        padding:12,
    },
    logo:{
        fontFamily:"Playwrite",
        fontSize:64,
        marginTop:-30,
        paddingLeft:20,
        paddingRight:10,
    },
    menuElement:{
        backgroundColor:"#ffffff",
        minWidth: "90%",
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
        textAlign:"center"
    },
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        // height:"13%",
        backgroundColor:"#FFF",
        borderBottomWidth:3,
        borderBottomColor:"#aaa"
    },
    editPageRoot:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        height:"100%",
    },
    editPageScroll:{
        display:"flex",
        flexDirection:"column",
        height:"85%",
        
    },
    datetime:{
        
        backgroundColor:"#ffffff",
        minWidth: "90%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        margin:12,
        borderWidth:2,
        borderColor:"#aaaaaa",
        borderRadius:10,
        height:RN.Platform.OS=="ios"?"40%":60
    }
})

export default styles;