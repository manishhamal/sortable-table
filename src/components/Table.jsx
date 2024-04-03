import { useState } from "react";
import { useEffect } from "react";
import "./table.css";
const URL = "https://jsonplaceholder.typicode.com/todos";
const Table = () => {
  const [todos, setTodos] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (todos.length) {
      let sortedTodos = [...todos];

      sort === "uid"
        ? sortedTodos.sort((a, b) => a.userId - b.userId)
        : sort === "id"
        ? sortedTodos.sort((a, b) => a.id - b.id)
        : sort === "title"
        ? sortedTodos.sort((a, b) => a.title.localeCompare(b.title))
        : sort === "status"
        ? sortedTodos.sort((a, b) => b.completed - a.completed)
        : sortedTodos;

      setTodos(sortedTodos);
    }
  }, [sort]);

  return (
    <>
      <div className="mb-4 ">
        <label htmlFor="sortBy">Sort By: </label>
        <select
          id="sortBy"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border bg-slate-200 rounded-sm w-44 p-1 text-sm outline-none"
        >
          <option value="">Choose option</option>
          <option value="uid">UserId</option>
          <option value="id">Id</option>
          <option value="title">Title</option>
          <option value="status">Status</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            {todos.length &&
              Object.keys(todos?.[0]).map((key) => (
                <th
                  className="p-2 bg-slate-300 font-medium capitalize"
                  key={key}
                >
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {todos?.length &&
            todos?.map((todo, idx) => (
              <tr key={idx}>
                <td className="p-3 text-sm">{todo.userId}</td>
                <td className="p-3 text-sm">{todo.id}</td>
                <td className="p-3 text-sm">{todo.title}</td>
                <td className="p-3 text-sm">
                  {todo.completed ? "true" : "false"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
