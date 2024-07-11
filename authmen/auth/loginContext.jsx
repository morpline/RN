import { createContext, useState } from "react";

export const AuthContxt = createContext({
    token: "",
    email:"",
    isAuthenticated: false,
    authenticate: ()=>{},
    logout: () => {},
});

function AuthContxtProvider({ children }) {
    const [suthtoken, SUTHTOKEN] = useState();
    const [email, EMAIL] = useState();
    function authenticate(token, email) {
        SUTHTOKEN(token);
        EMAIL(email);
    }

    function logout() {
        SUTHTOKEN(null);
    }

    const value = {
        token: suthtoken,
        isAuthenticated: !!suthtoken,
        authenticate: authenticate,
        logout:logout,
        email:email
    }
    return <AuthContxt.Provider value={value}>{children}</AuthContxt.Provider>
}
export default AuthContxtProvider