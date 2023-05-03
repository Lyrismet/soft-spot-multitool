import React from 'react';
import {ACTIONS} from "./Calculator";

export default function OperationButton({dispatch, operation}) {
    return (
        <button className="calculator-body__sign"
                onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>
            {operation}
        </button>
    )
}