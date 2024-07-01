import React, { Component } from 'react';
import * as RN from "react-native";
import data from "@/data.json";
import MenuElement from './MenuElement';
import styles from './styles';
// import 
function Menu ({navigation}) {
    
    function pressHandler( screen, id ) {
        return () =>{
            navigation.navigate(screen, {id});
        }
    }
    return (
        <RN.ScrollView contentContainerStyle={styles.root}>
            <RN.Text style={styles.logo}>meels</RN.Text>
            <RN.Text style={styles.title}>menu</RN.Text>
            <RN.View style>
                
                <RN.View>
                    <RN.Pressable style={styles.menuElement} onPress={pressHandler("category")}>
                        <RN.Text style={styles.text}>{"all"}</RN.Text>
                    </RN.Pressable>
                </RN.View>
                {
                    data.categories.map((e,i)=>(
                        <RN.View key={i}>
                            <RN.Pressable style={styles.menuElement} onPress={pressHandler("category",e.id)}>
                                <RN.Text style={styles.text}>{e.name}</RN.Text>
                            </RN.Pressable>
                        </RN.View>
                    ))
                }
            </RN.View>
        </RN.ScrollView>
    );
}


export default Menu;