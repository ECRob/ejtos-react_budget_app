import React, { useContext } from 'react';
import { TiDelete, TiMinusOutline, TiPlusOutline } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleIncreaseAllocation = () => {
        const item = {
            name: props.name,
            cost: 10
        };

        dispatch({
            type: 'INCREASE_ITEM',
            payload: item,
        });
    };

    const handleDecreaseAllocation = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DECREASE_ITEM',
            payload: item,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{parseInt(props.quantity)}</td>
        <td><TiPlusOutline size='2em' color='green' onClick={event=> handleIncreaseAllocation(props.name)}></TiPlusOutline></td>
        <td><TiMinusOutline size='2em' color='red' onClick={event=> handleDecreaseAllocation(props.name)}></TiMinusOutline></td>
        <td><TiDelete size='2.2em' color="black" onClick={handleDeleteItem}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;