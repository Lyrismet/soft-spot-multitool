import React, {useState} from "react";
function ToDoForm({addTask}) {
    const [userInput, setUserInput] = useState('')
    const handleChange = (e) => {
        setUserInput((e.currentTarget.value))

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")

    }
    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            handleSubmit(e)
        }

    }
    return(
        <form onSubmit={handleSubmit} action="">
            <input type="text"
            value={userInput}
                   onChange={handleChange}
                   onKeyDown={handleKeyPress}
                   placeholder="Enter a task..."
            />
            <button className="todolist__button-save">Save</button>
        </form>
    )
}
export default ToDoForm;