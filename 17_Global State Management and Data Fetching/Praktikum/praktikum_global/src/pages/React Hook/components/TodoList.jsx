import { RiCloseCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { completedTodo, removeTodo } from "../../../features/todoslice";


const TodoList = () => {
    const passengers = useSelector((state) => state.todoo.passengers);
    console.log('passengers', passengers)
    const dispatch = useDispatch()

    return (
        <>
        {passengers.map((todo) => (
            <div className={todo.complete ? "todoList complete" : "todoList"}>
                <RiCheckboxCircleLine
                style={{marginLeft: 10}}
                onClick={() => {
                    dispatch(completedTodo(todo.id));
                }}/>
                {todo.title}
                <RiCloseCircleLine
                style={{marginRight : 10}}
                onClick={() => {
                    dispatch(removeTodo(todo.id));
                }}/>
            </div>
        ))}
        </>
    );
}

export default TodoList;