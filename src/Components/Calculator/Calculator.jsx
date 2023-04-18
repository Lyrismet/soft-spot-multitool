import React from "react";

function Calculator(){
    return(
        <div className="calculator-body">
            <div className="calculator-body__output">
                <div className="previous-operand">432</div>
                <div className="current-operand">23</div>
            </div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="calculator-body__button-text">del</button>
            <button className="calculator-body__button-text">reset</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button className="span-three">=</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button>÷</button>
            <button>×</button>
        </div>

    )
}

export default Calculator;