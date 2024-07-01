import React, { Component } from 'react';
import * as RN from "react-native"
import styles from './styles';

function MenuElement ({ navigation, food = {}, page="food"}) {
    function pressHandler() {
        navigation.navigate(page, {id:food.id});
    }
    return (
        <RN.View>
            <RN.Pressable style={styles.menuElement} onPress={pressHandler}>
                {food.price?<RN.Text style={styles.text}>{food.price}</RN.Text>:<></>}
                <RN.Text style={styles.menuElementText}>{food.name}</RN.Text>
            </RN.Pressable>
        </RN.View>
    );
}

export default MenuElement;