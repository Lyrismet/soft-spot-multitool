import React from 'react';
import Todolist from "./Todolist";

const TodolistModal = ({ selectedComponent, setSelectedComponent, setIsModalOpen }) => {
    const [open, setOpen] = React.useState(false);
    const handleButtonClick = () => {
        setSelectedComponent("todolist");
        setOpen(true);
        setIsModalOpen(true);
    }
    const handleClose = () => {
        setSelectedComponent(null);
        setOpen(false);
        setIsModalOpen(false);
    };
    return (

        <div className="todolist">
            <button onClick={handleButtonClick} className="main__button-item yellow">To-Do List</button>
            <div className={`todolist-window modal-window animated ${selectedComponent === "todolist" && open ? 'show' : '' }`}>
                <button className="modal-window__close-button" onClick={handleClose}>
                    <svg onClick={() => {setSelectedComponent(null); setOpen(false)}} width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="20" fill="#74DD4F"/>
                        <path d="M16.3535 15.6465L34.0312 33.3242" stroke="#1D2C53" stroke-width="4" stroke-linecap="round"/>
                        <path d="M33.6777 16L16.0001 33.6777" stroke="#1D2C53" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                </button>
                <Todolist />
            </div>
        </div>
    );
};

export default TodolistModal;