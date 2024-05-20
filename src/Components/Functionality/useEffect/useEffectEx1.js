import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);
    const [eachTodo, setEachTodo] = useState({});

    // useEffect will trigger once (fetch data from server)
    useEffect(() => {
        fetchData();
    }, []);

    // useEffect will trigger every when count changes
    useEffect(() => {
        document.title = `Count ${count}`;
        fetchEachTodo();
    }, [count]);

    // Function to fetch all todos from server
    const fetchData = async () => {
        const result = await axios.get("https://fakestoreapi.com/products");
        if (result.status === 200) {
            setTodos(result.data);
        }
    };

    // Function to fetch todo based on the current count
    const fetchEachTodo = async () => {
        if (count >= 0 && count < todos.length) {
            const result = await axios.get(
                `https://fakestoreapi.com/products/${count + 1}`
            );
            if (result.status === 200) {
                setEachTodo(result.data);
            }
        }
    };

    // Function to handle button click and update count
    const handleButtonClick = (index) => {
        setCount(index);
    };

    return (
        <div>
            <h2>Use Effect example</h2>
            {/* Display buttons for each product */}
            <div>
                {todos.map((todo, index) => (
                    <button key={index} onClick={() => handleButtonClick(index)}>
                        Product {index + 1}
                    </button>
                ))}
            </div>
            {/* Display individual todo data if it exists */}
            {Object.keys(eachTodo).length > 0 ? (
                <div>
                    <h3>ID: {eachTodo.id}</h3>
                    <h3>Title: {eachTodo.title}</h3>
                    <h3>Price: {eachTodo.price}</h3>
                    <h3>Description: {eachTodo.description}</h3>
                </div>
            ) : (
                <h4>No data</h4>
            )}
        </div>
    );
};

export default UseEffect1;
