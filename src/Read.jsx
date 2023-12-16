import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [values, setValues] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/user/${id}`)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Full Details</h5>
          <p className="card-text">
            <h5>Name : {values.name}</h5>
            <h6>Address: {values.address}</h6>
            <h6>Phone: {values.Phone}</h6>
          </p>
          <Link to="/" className="btn btn-primary">
            Go Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Read;
