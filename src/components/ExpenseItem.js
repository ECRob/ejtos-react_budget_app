import React, { useContext } from 'react';
import { TiMinusOutline, TiPlusOutline } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><TiPlusOutline size='2em' color='green' onClick={event=> increaseAllocation(props.name)}></TiPlusOutline></td>
        <td><TiMinusOutline size='2em' color='red' onClick={handleDeleteExpense}></TiMinusOutline></td>
        </tr>
    );
};

export default ExpenseItem;
