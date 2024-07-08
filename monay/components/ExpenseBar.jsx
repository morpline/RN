import React from 'react';
import * as RN from "react-native";
import styles from './styles';
import Expenses from './expenses';

function ExpenseBar(props) {
    const {expense, navigation} = props;
    
    function pressHandler() {
        return () => {
            navigation.navigate("Details", {id:expense.id});
        }
    }

    return (
        <>
            <RN.Pressable onPress={pressHandler()} style={styles.menuElement}>
                <RN.Text style={styles.menuElementText}>
                    {expense.name}
                </RN.Text>
                <RN.Text style={styles.text}>
                    ${expense.amount}
                </RN.Text>
            </RN.Pressable>
        </>
    );
}

export default ExpenseBar;