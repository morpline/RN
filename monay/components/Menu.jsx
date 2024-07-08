import React, { useContext } from 'react';
import * as RN from "react-native";
import styles from './styles';
import ExpenseBar from './ExpenseBar';
import { ExpensesContext } from './expenses';

function Menu(props) {
    const {navigation} = props
    const expensesCtx = useContext(ExpensesContext)
    const [list, setlist] = React.useState(expensesCtx.expenses.filter((e)=>(e.date+604800000>Date.now())).sort((a,b)=>b.date-a.date));
    let e = []
    function pressHandler() {
        return () => {
            navigation.navigate("Details");
        }
    }
    function renderExpenseItem(e) {
        return (
            <ExpenseBar expense={e.item} navigation={navigation}></ExpenseBar>
        )
    }
    return (
        <>
            <RN.View style={styles.root}>
                <RN.View style={styles.header}>
                    <RN.Text style={styles.logo}>
                        e
                    </RN.Text>
                    <RN.Pressable style={styles.button} onPress={pressHandler()}>
                        <RN.Text style={styles.buttonText}>
                            Add New
                        </RN.Text>
                    </RN.Pressable>
                    <RN.View style={styles.button}>
                        <RN.Text style={styles.buttonText}>
                            ${Math.trunc(list.reduce((a,e,c)=>(a+e.amount),0)*100)/100}
                        </RN.Text>
                    </RN.View>
                </RN.View>
                <RN.FlatList data={list} renderItem={renderExpenseItem} keyExtractor={item => item.id} style={styles.editPageScroll}/>
            </RN.View>
        </>
    );
}

export default {Menu};