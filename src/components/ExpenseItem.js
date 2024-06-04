import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ handleEdit, handleDelete, expense }) => {
    // console.log(expense);
    return (
        <li className='item'>
            <div className='info'>
                <span className='expense'>{expense.charge}</span>
                <span className='amount'>{expense.amount}원</span>
            </div>
            <div>
                <button className='edit-btn' onClick={() => handleEdit(expense.id)}>수정</button>
                <button className='clear-btn' onClick={() => handleDelete(expense.id)}>삭제</button>
            </div>
        </li>
    );
};

export default ExpenseItem;
