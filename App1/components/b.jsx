import React from "react"

let b = "pingas"

function setb (r) {
    console.log("b.jsx","b set",r,b)
    b = r;
    return r
}

export default {b:b, setb:setb}