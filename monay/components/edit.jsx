import React from "react";
import * as RN from "react-native";
import styles from "./styles";
import { ExpensesContext } from "./expenses";
import DateTimePicker from "@react-native-community/datetimepicker";

function Edit(props) {
    const { route, navigation } = props;
    const id = route.params?.id;
    const isNew = id ? false : true;
    const expensesCtx = React.useContext(ExpensesContext);
    let editedExpense = {
        name: "New Expense",
        amount: 0.0,
        date: Date.now(),
        id : "" + Date.now() + Math.random().toString(),
    };
    // console.log(!isNew);
    if (!isNew) {
        editedExpense = JSON.parse(
            JSON.stringify(expensesCtx.expenses.find((e) => id == e.id))
        );
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        // setShow(false);
        editedExpense.date = currentDate;
    };

    function editName(e) {
        // console.log("editname", e);
        editedExpense.name = e;
        // edsf(JSON.stringify(editedExpense))
    }

    function editAmount(e) {
        // console.log(e);
        editedExpense.amount = Number.parseFloat(e);
        // edsf(JSON.stringify(editedExpense))
    }
    function editDate(e) {
        // console.log(e);
        editedExpense.date = Date.parse(e);
        // edsf(JSON.stringify(editedExpense))
    }
    function changeDate(e) {
        // console.log(e)
        // edsf(JSON.stringify(editedExpense))
    }
    function PushChanges() {
        // alert(`name for ${id} from ${expense.name} to ${editedExpense.name}`)

        if (isNew) {
            expensesCtx.addExpense(editedExpense);
        } else {
            expensesCtx.updateExpense(id, editedExpense);
        }

        navigation.goBack();
    }

    function Delete() {
        if (!isNew) {
            expensesCtx.deleteExpense(id);
        }
        navigation.goBack();
    }

    return (
        <>
            <RN.SafeAreaView style={styles.editPageRoot}>
                <RN.ScrollView contentContainerStyle={styles.editPageScroll}>
                    <RN.View style={styles.menuElement}>
                        <RN.TextInput
                            style={styles.text}
                            defaultValue={editedExpense.name}
                            onChangeText={editName}
                        ></RN.TextInput>
                    </RN.View>
                    <RN.View style={styles.menuElement}>
                        <RN.Text style={styles.text}>$</RN.Text>
                        <RN.TextInput
                            style={styles.text}
                            defaultValue={"" + editedExpense.amount}
                            onChangeText={editAmount}
                        ></RN.TextInput>
                    </RN.View>
                    <RN.View style={styles.datetime}>
                        {RN.Platform.OS == "web" ? (
                            <RN.TextInput
                                style={styles.text}
                                defaultValue={new Date(
                                    editedExpense.date
                                ).toDateString()}
                                onChangeText={editDate}
                            ></RN.TextInput>
                        ) : (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={new Date(editedExpense.date)}
                                mode={"date"}
                                is24Hour={true}
                                onChange={changeDate}
                                display={"spinner"}
                                // style={styles.text}
                                themeVariant="light"
                            />
                        )}
                    </RN.View>
                </RN.ScrollView>
                <RN.View style={styles.item}>
                    <RN.Text style={styles.footnote}>
                        {JSON.stringify(editedExpense)}
                    </RN.Text>
                </RN.View>
                <RN.View style={styles.header}>
                    <RN.Pressable style={styles.button} onPress={PushChanges}>
                        <RN.Text style={styles.buttonText}>Save</RN.Text>
                    </RN.Pressable>
                    <RN.Pressable style={styles.button} onPress={Delete}>
                        <RN.Text style={styles.buttonText}>
                            {isNew ? "Back" : "Delete"}
                        </RN.Text>
                    </RN.Pressable>
                </RN.View>
            </RN.SafeAreaView>
        </>
    );
}

export default Edit;
