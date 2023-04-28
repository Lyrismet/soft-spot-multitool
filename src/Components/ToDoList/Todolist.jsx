import Todo from "./Todo";
import ToDoForm from "./Todoform";
import {useState} from "react";

function Todolist() {
    const [todos, setTodos] = useState([]);
    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }

    }
    const removeTask = (id) => {
        setTodos([...todos.filter(todo => todo.id !== id)])

    }
    const handleToggle = (id) => {
        setTodos([...todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : {...todo })])

    }
    return (
        <div className="todolist__body">
            <h1 className="todolist__title">To-do list: <span>{todos.length}</span></h1>
            <div className="todolist__tasks">


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
            <ToDoForm addTask={addTask}/>
        </div>
    );
}

export default Todolist;