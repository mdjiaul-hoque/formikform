import React, { useEffect, useState } from "react";
import Faqs from "./Faqs";

export default function UseEffect() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("fetching not successfully");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setTodos(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });


  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          {" "}
          {todos &&
            todos.map((todo) => {
              return <Faqs key={todo.id} {...todo} />;
            })}
        </div>
      )}
    </div>
  );
}
