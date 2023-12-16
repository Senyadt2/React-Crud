import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const Update = () => {
  const [values, setValues] = useState({
    name: "",
    address: "",
    Phone: "",
  });

  const { id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/user/${id}`)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log("error is " + err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8000/user/${id}`, values)
      .then((res) => {
        setValues(res.data);
        navigation("/");
      })
      .catch((err) => console.log("error is " + err));
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
            value={values.name}
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
            value={values.address}
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
            value={values.Phone}
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

export default Update;
