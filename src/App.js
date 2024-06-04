import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";

const App = () => {
    // 변수 ===> 렌더링 => 초기화
    // useRef ===> ref.current ==> 렌더링 => 초기화
    // state ===> 페이지 새로고침 => 초기화

    const [expenses, setExpenses] = useState([
        { id: 1, charge: "렌트비", amount: 1000 },
        { id: 2, charge: "교통비", amount: 2000 },
        { id: 3, charge: "식비", amount: 3000 },
    ]);

    const [edit, setEdit] = useState(false);

    const [charge, setCharge] = useState("");
    const [amount, setAmount] = useState(0);

    const [id, setId] = useState("");

    const handleEdit = (id) => {
        const expense = expenses.find((item) => item.id === id);
        const { charge, amount } = expense;
        setCharge(charge);
        setAmount(amount);
        setEdit(true);
        setId(id);
    };

    const handleCharge = (e) => {
        setCharge(e.target.value);
    };

    const handleAmount = (e) => {
        setAmount(e.target.valueAsNumber);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (charge !== "" && amount > 0) {
            if (edit) {
                const newExpenses = expenses.map((item) => {
                    return item.id === id ? { ...item, charge, amount } : item;
                });

                setExpenses(newExpenses);
                setEdit(false);
            } else {
                const newExpense = {
                    id: crypto.randomUUID(),
                    charge,
                    amount,
                };

                setExpenses([...expenses, newExpense]);
            }
            setCharge("");
            setAmount(0);
        } else {
            console.log("error");
        }
    };

    const handleDelete = (id) => {
        const newExpenses = expenses.filter((expense) => expense.id !== id);
        console.log(newExpenses);
        setExpenses(newExpenses);
    };

    return (
        <main className="main-container">
            <h1>예산 계산기</h1>

            <div
                style={{
                    width: "100%",
                    backgroundColor: "white",
                    padding: "1rem",
                }}
            >
                <ExpenseForm
                    edit={edit}
                    handleCharge={handleCharge}
                    charge={charge}
                    amount={amount}
                    handleAmount={handleAmount}
                    handleSubmit={handleSubmit}
                />
            </div>

            <div
                style={{
                    width: "100%",
                    backgroundColor: "white",
                    padding: "1rem",
                }}
            >
                <ExpenseList
                    handleDelete={handleDelete}
                    initialExpenses={expenses}
                    handleEdit={handleEdit}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "1rem",
                }}
            >
                <p style={{ fontSize: '2rem' }}>
                    총지출 :
                    <span>
                        {expenses.reduce((acc, curr) => {
                            return (acc += curr.amount);
                        }, 0)}
                        원
                    </span>
                </p>
            </div>
        </main>
    );
};

export default App;
