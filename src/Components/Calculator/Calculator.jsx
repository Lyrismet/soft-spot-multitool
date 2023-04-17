import React from "react";

function Calculator(){
    return(
        <div className="calculator-body">
            <div className="calculator-body__output">
                <div className="previous-operand"></div>
                <div className="current-operand"></div>
            </div>
            <div className="calculator-body__line"></div>

        </div>

    )
}

export default Calculator;