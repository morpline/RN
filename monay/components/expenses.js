let Eee = {};
import { createContext, useReducer } from "react";

let exampledata = [
    {
        name: "Test",
        amount: 2.14,
        date: Date.parse("2024-01-01T12:00:00.000Z"),
        id: "test",
    },
    {
        name: "Test (again)",
        amount: 2.14,
        date: Date.parse("2019-01-01T12:00:00.000Z"),
        id: "test1",
    },
    {
        name: "Test (2)",
        amount: 4.98,
        date: Date.parse("04 Dec 1995 12:00:00 GMT"),
        id: "test2",
    },
    {
        name: "Test (4)",
        amount: 4.98,
        date: 818462936105,
        id: "testfour",
    },
    {
        name: "Deploy Website",
        amount: 9.99,
        date: Date.now()-600000000,
        id: "deploywebsite",
    },

];

// Eee.addExpense = (name, amount) => {
//   let n = name;
//   let fn = "";
//   while (!fn) {
//     if (Eee.expenses.findIndex((e) => e.name == name) + 1) {
//       n += " (again)";
//     } else {
//       fn = n;
//     }
//   }

//   Eee.expenses.push({ name: fn, amount: amount, date: Date.now });
// };

Eee.removeExpense = (name) => {};

Eee.update = () => {};

function expensseReducer(state, action) {
    switch (action.type) {
        case "ADD":
            return [{ ...action.payload}, ...state];
        case "UPDATE":
            const i = state.findIndex((e) => e.id == action.payload.id);
            const editedexpense = state[i];
            const updatedItem = { ...editedexpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[i] = updatedItem;
            return updatedExpenses;
        case "DELETE":
            return state.filter((e) => e.id != action.payload);
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensseReducer, exampledata);

    function addExpense(expenseData) {
        dispatch({ type: "ADD", payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: "DELETE", payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export const ExpensesContext = createContext(Eee);
export default ExpensesContextProvider;
