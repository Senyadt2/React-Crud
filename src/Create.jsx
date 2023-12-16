import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    address: "",
    Phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/user", values)
      .then((res) => {
        console.log("Created");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setValues({ ...values, address: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Phone
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setValues({ ...values, Phone: e.target.value })}
          />
        </div>
        <button type="submit" class="btn btn-success me-3">
          Submit
        </button>
        <Link to="/" class="btn btn-primary me-3">
          Back
        </Link>
      </form>
    </div>
  );
};

export default Create;
