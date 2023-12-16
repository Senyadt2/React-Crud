import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/user").then((res) => {
      //   console.log(res.data);
      setData(res.data);
    });
  }, [data]);

  const handleDelete = (id) => {
    alert(id);
    const confirm = window.confirm("Delete?");
    if (confirm) {
      axios
        .delete(`http://localhost:8000/user/${id}`)
        .then((res) => console.log("deleted"))
        .catch((err) => console.log(err));
      //   window.location.reload();
    }
  };
  return (
    <div className="container">
      <h1>List of Items</h1>
      <div className="d-flex justify-content-end">
        <Link to="/create" className="btn btn-success">
          Add
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.address}</td>
                <td>{d.Phone}</td>
                <td>
                  <Link to={`/read/${d.id}`} className="btn btn-info mx-3">
                    Read
                  </Link>
                  <Link to={`/update/${d.id}`} className="btn btn-success mx-3">
                    Edit
                  </Link>
                  <button
                    onClick={(e) => handleDelete(d.id)}
                    className="btn btn-danger mx-3"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
