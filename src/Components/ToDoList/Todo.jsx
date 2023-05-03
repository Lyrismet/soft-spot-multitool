import React from 'react';
function ToDo({todo, toggleTask, removeTask}) {
    return(
        <div key={todo.id} className = "todolist__tasks-item">
            <div className={todo.complete ? "todolist__tasks-item-text strike" : "todolist__tasks-item-text"}
            onClick={() => toggleTask(todo.id)}>
                {todo.task}
            </div>
            <button className = "tasks-item__close-button" onClick={() => removeTask(todo.id)}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24.9028" height="24.9028" rx="12.4514" fill="#182546"/>
                    <path d="M8.1449 7.79297L16.9494 16.5974" stroke="#DDD84F" stroke-width="2" stroke-linecap="round"/>
                    <path d="M16.7732 7.96899L7.96873 16.7735" stroke="#DDD84F" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </button>

        </div>

    )
}
export default ToDo;