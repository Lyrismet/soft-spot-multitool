import {useState} from "react";
function ToDoForm(){
    const [userInput, setUserInput] = useState('')
    const handleChange = () => {

    }
    const handleSubmit = () => {

    }
    const handleKeyPress = () => {

    }
    return(
        <form onSubmit={handleSubmit} action="">
            <input type="text"
            value={userInput}
                   onChange={handleChange}
                   onKeyDown={handleKeyPress}
                   placeholder="Enter a task..."
            />
            <button>Save</button>
        </form>
    )
}
export default ToDoForm;