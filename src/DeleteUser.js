import React from "react";

function DeleteButton({ id, onDelete }) {
  const handleDelete = () => {
    fetch("http://localhost/DeleteUser.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success or error here
        if (data.message === "Data deleted successfully") {
          onDelete(id);
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle error here
      });
  };

  return (
    <button onClick={handleDelete} className="btn btn-sm btn-danger">
      Delete
    </button>
  );
}

export default DeleteButton;
