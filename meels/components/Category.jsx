import React, { Component } from 'react';
import * as RN from "react-native"
import * as data from "@/data.json"
import * as ER from "expo-router"
import styles from './styles';
import MenuElement from './MenuElement';

function Category ({route, navigation}) {
    
    const { id }= route.params
    const category = (id+1)?data.categories[id]:{name:"all",foods:[]};
    function pressHandler( screen ) {
        return () =>{
            navigation.navigate(screen, {id:category.id});
        }
    }
    return (
        <>
            <RN.View style={styles.root}>
                <RN.Text style={styles.title}>
                    {category.name}
                </RN.Text>
                <RN.View >
                    {
                        data.menu.map((e,i)=>{
                            if(category.foods.find((vv,ii)=>(e.id==vv))+1 || category.name=="all"){
                                return (
                                    <MenuElement navigation={navigation} food={e} page={"food"}key={i}></MenuElement>
                                )
                            }
                        })
                    }
                </RN.View>
            </RN.View>
        </>
    );
    
}

export default Category;