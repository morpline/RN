import React, { useContext } from 'react';
import * as RN from "react-native";
import styles from './styles';
import ExpenseBar from './ExpenseBar';
import { ExpensesContext } from './expenses';

function All(props) {
    const {navigation} = props
    const expensesCtx = useContext(ExpensesContext)
    let s = ""
    const [list, setlist] = React.useState(expensesCtx.expenses.sort((a,b)=>b.date-a.date).filter(e=>e.name.includes(s)));
    
    // let s = props.params.search || "";// seems like a thing i could add, where you'd link to a search, but idk
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
    
    function changeSearch(e) {
        s = e;
    }

    function actuallySearch() {
        // console.log("as",search,s)
        setlist(expensesCtx.expenses.sort((a,b)=>b.date-a.date).filter(e=>e.name.includes(s)))
        // setSearch(s)
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
                <RN.View style={styles.item}>
                    <RN.TextInput style={styles.menuElementText} defaultValue={s} onChangeText={changeSearch} onSubmitEditing={actuallySearch}></RN.TextInput>
                </RN.View>
                <RN.FlatList data={list} renderItem={renderExpenseItem} keyExtractor={item => "all_"+item.id} style={styles.editPageScroll}/>
            </RN.View>
        </>
    );
}

export default {All};