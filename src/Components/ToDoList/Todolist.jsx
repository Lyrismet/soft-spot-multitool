import Todo from "./Todo";
import ToDoForm from "./Todoform";
import {useState} from "react";

function Todolist() {
    const [todos, setTodos] = useState([]);
    const addTask = () => {

    }
    const removeTask = () => {

    }
    const handleToggle = () => {

    }
    return (
        <div className="todolist__body">
            <h1 className="todolist__title">To-do list: <span>{todos.length}</span></h1>
            <ToDoForm addTask={addTask}/>
            {todos.map((todo) => {
                return (
                    <Todo
                        todo={todo}
                        key={todos.id}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                    />
                )
            })}
        </div>
    );
}

export default Todolist;