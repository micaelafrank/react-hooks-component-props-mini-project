import React from "react";
import blogData from "../data/blog";
console.log(blogData);


function Header( {name} ){
    return (
        <header>
            <h1>{name}</h1>
        </header>
)}

export default Header;