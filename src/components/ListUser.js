import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript
import DeleteButton from "../DeleteUser";

function ListUser() {
  const [data, setData] = useState([]);

  const loadData = () => {
    fetch("http://localhost/ListUser.php")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    // Remove the deleted data from the local state
    setData((prevData) => prevData.filter((data) => data.id !== id));
  };

  useEffect(() => {
    loadData(); // Load Data when the component mounts
  }, []);

  return (
    <div>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <Link
                  to={`user/${user.id}/edit`}
                  className="btn btn-sm btn-success mx-1"
                >
                  Edit
                </Link>
                <DeleteButton id={user.id} onDelete={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUser;
