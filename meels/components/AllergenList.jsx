import React, { Component } from 'react';
import * as RN from "react-native"
import * as data from "@/data.json"
import * as ER from "expo-router"
import styles from './styles';

function AllergensList ({route, navigation}) {
    
    const { id }= route.params
    const food = data.menu[id];
    return (
        <>
            <RN.ScrollView contentContainerStyle={styles.root}>
                <RN.Text style={styles.title}>
                    {food.name}
                </RN.Text>
                <RN.View style={styles.itemDetailsBlockListSquaresContainer}>
                    {food.allergens?food.allergens.map((ag,i)=>(
                        <RN.View style={styles.item} key={i}>
                            <RN.Text style={styles.text}>
                                {ag}
                            </RN.Text>
                        </RN.View>

                    )):(
                        <RN.View>
                            <RN.Text style={styles.text}>
                                This food is allergen free.
                            </RN.Text>
                        </RN.View>
                    )}
                </RN.View>
            </RN.ScrollView>
        </>
    );
    
}

export default AllergensList;