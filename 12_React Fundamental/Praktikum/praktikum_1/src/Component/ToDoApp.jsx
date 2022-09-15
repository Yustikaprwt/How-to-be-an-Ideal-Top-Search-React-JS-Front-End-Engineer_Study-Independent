import React from "react";
import Header from "./Header";
import App from "./App";
import mockData from "../mockData";

export default function ToDoApp () {

    return(
    <>
    <Header text='To Do App'/>
    <App/>
    <mockData/>
    </>
    )
}