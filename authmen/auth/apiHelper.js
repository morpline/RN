// import key from "./secret.js";
const key = "AIzaSyB5nCIssmrMe9JHPsP_z4wy5KNz2T63taA";
const database = "";
import axios from "axios";

const firebaseURIs = {
    signup : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`,
    signin : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
    database : "https://firestore.googleapis.com/v1/projects/authmen-1c876/databases/(default)/documents",

}

async function logIn (email,password) {
    const response = await axios.post(
        firebaseURIs.signin,
        {
            email:email,
            password:password,
            returnSecureToken:true
        }
    )
    return response

}

async function signUp (email, password) {
    const response = await axios.post(
        firebaseURIs.signup,
        {
            email:email,
            password:password,
            returnSecureToken:true
        }
    )
    return response
}

async function fetchAll (token) {
    const response = await axios.get(
        firebaseURIs.database,
        {
            headers:{
                "Authorization": "Bearer "+token,

            }
        }
    ).catch(e=>console.log(e))
    return response
}



export {logIn, signUp, fetchAll};