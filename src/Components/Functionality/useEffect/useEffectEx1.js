import axios from "axios";
import React, { useEffect, useState } from "react";
import { checkArrayLengthExists } from "../../../utills/functions";
import ImageComponent from "../image/image";
import { Link } from "react-router-dom";
import "./UseEffect1.css"; // Import the CSS file

const UseEffect1 = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://dummyjson.com/products");
        if (result.status === 200) {
          setTodos(result.data.products);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className="container">
      
      {checkArrayLengthExists(todos) ? (
        <div className="grid">
          {todos.map((eachTodo) => (
            <div key={eachTodo.id} className="card">
              <h3>{eachTodo.title}</h3>
              <ImageComponent src={eachTodo.thumbnail} alt={eachTodo.title} />
              <button className="view-button">
                <Link to={`/${eachTodo.brand}/${eachTodo.id}`}>
                  Click to view product
                </Link>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default UseEffect1;
