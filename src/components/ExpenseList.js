import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ handleEdit, initialExpenses, handleDelete }) => {
    return (
        <>
            <ul className="list">
                {/* Expense Item */}
                {initialExpenses.map((expense) => {
                    return (
                        <ExpenseItem
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                            key={expense.id}
                            expense={expense}
                        />
                    );
                })}
            </ul>
            <button className='btn'>목록 지우기</button>
        </>
    );
};

export default ExpenseList;
