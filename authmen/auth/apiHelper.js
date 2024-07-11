// import key from "./secret.js";
const key = "AIzaSyB5nCIssmrMe9JHPsP_z4wy5KNz2T63taA";
import axios from "axios";

const firebaseURIs = {
    signup : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`,
    signin : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
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





export const apiHelper = {logIn, signUp, fetch};