import React from "react";
import { useState } from "react";
import Title from "./pages/React Hook/components/Title";
import TodoAdd from "./pages/React Hook/components/TodoAdd";
import TodoList from "./pages/React Hook/components/TodoList";
import './components/Todos.css';

export default function Home () {
    return (
        <div>
            <Title />
            <TodoAdd />
            <TodoList />
        </div>
    )

}