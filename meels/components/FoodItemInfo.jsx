import React, { Component } from 'react';
import * as RN from "react-native"
import * as data from "@/data.json"
import * as ER from "expo-router"
import styles from './styles';

function FoodItemInfo ({route, navigation}) {
    
    function pressHandler( screen ) {
        return () =>{
            navigation.navigate(screen, {id:food.id});
        }
    }
    const { id }= route.params
    const food = data.menu[id];
    return (
        <>
            <RN.View style={styles.root}>
                <RN.Text style={styles.title}>
                    {food.name}
                </RN.Text>
                <RN.Pressable style={styles.button}>
                    <RN.Text style={styles.buttonText}>
                        ${food.price} buy now
                    </RN.Text>
                </RN.Pressable>
                <RN.View style={styles.itemDetailsBlockListSquaresContainer}>
                    <RN.View style={styles.item}>
                        <RN.Text style={styles.text}>
                            {food.calories} 
                        </RN.Text>
                        <RN.Text style={styles.fancy}>
                            calories
                        </RN.Text>
                    </RN.View>
                    
                    <RN.Pressable style={styles.item} onPress={pressHandler("allergen")}>
                        <RN.Text style={styles.fancy}>
                            {/* {food.allergens?"allergen":"allergen"}  */}
                            allergen
                        </RN.Text>
                        <RN.Text style={styles.fancy}>
                            {food.allergens?"details":"free"} 
                        </RN.Text>
                    </RN.Pressable>
                    
                    <RN.Pressable style={styles.item} onPress={pressHandler("ingredients")}>
                        <RN.Text style={styles.fancy}>
                            {/* {food.allergens?"allergen":"allergen"}  */}
                            ingredient
                        </RN.Text>
                        <RN.Text style={styles.fancy}>
                            {food.ingredients?"details":"free"} 
                        </RN.Text>
                    </RN.Pressable>
                </RN.View>
            </RN.View>
        </>
    );
    
}

export default FoodItemInfo;