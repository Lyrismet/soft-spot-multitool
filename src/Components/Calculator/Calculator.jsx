import React, {useReducer} from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate',
}

function reducer(state, {type, payload}) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            if (payload.digit === "0" && state.currentOperand === "0") {
                return state;
            }
            if (payload.digit === "." && state.currentOperand.includes(".")) {
                return state;
            }
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`,
            }
        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand === null && state.previousOperand === null) {
                return state;
            }
            if (state.previousOperand == null){
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                }
            }
        case ACTIONS.CLEAR:
            return {

            }
    }
}

function Calculator() {
    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})

    /*dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit: '1'}})*/
    return (
        <div className="calculator-body">
            <div className="calculator-body__output">
                <div className="previous-operand">{previousOperand} {operation}</div>
                <div className="current-operand">{currentOperand}</div>
            </div>
            <DigitButton digit="1" dispatch={dispatch} />
            <DigitButton digit="2" dispatch={dispatch} />
            <DigitButton digit="3" dispatch={dispatch} />
            <button className="calculator-body__button-text">del</button>
            <button className="calculator-body__button-text" onClick={()=>dispatch( { type:ACTIONS.CLEAR } )}>reset</button>
            <DigitButton digit="4" dispatch={dispatch} />
            <DigitButton digit="5" dispatch={dispatch} />
            <DigitButton digit="6" dispatch={dispatch} />
            <OperationButton digit="+" dispatch={dispatch}/>
            <button className="span-three">=</button>
            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
            <button className="calculator-body__sign">-</button>
            <DigitButton digit="." dispatch={dispatch} />
            <DigitButton digit="0" dispatch={dispatch} />
            <OperationButton digit="&divide;" dispatch={dispatch}/>
            <button className="calculator-body__sign">×</button>
        </div>

    )
}

export default Calculator;