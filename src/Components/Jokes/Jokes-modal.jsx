import React from 'react';
import Jokes from "./Jokes";
import Activity from "./Activity";

const JokesModal = ({ selectedComponent, setSelectedComponent }) => {
    const [open, setOpen] = React.useState(false);
    const handleButtonClick = () => {
        setSelectedComponent("jokes");
        setOpen(true);
    }
    return (

        <div className="jokes">
            <button onClick={handleButtonClick} className="main__button-item pink">Joke's</button>
            <div className={`jokes-window modal-window animated ${selectedComponent === "jokes" && open ? 'show' : '' }`}>
                <button className="modal-window__close-button">
                    <svg onClick={() => {setSelectedComponent(null); setOpen(false)}} width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="20" fill="#74DD4F"/>
                        <path d="M16.3535 15.6465L34.0312 33.3242" stroke="#1D2C53" stroke-width="4" stroke-linecap="round"/>
                        <path d="M33.6777 16L16.0001 33.6777" stroke="#1D2C53" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                </button>
                <div className="jokes__body">
                    <Jokes />
                    <Activity />
                </div>
            </div>
        </div>
    );
};

export default JokesModal;