import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("india");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("female");

  const navigate = useNavigate();

  const isValid = () => {
    let isProceed = true;
    let errorMessage = "Please enter the value in";

    if (!id) {
      isProceed = false;
      errorMessage += " Username";
    }
    if (!name) {
      isProceed = false;
      errorMessage += " Fullname";
    }
    if (!password) {
      isProceed = false;
      errorMessage += " Password";
    }
    if (!email) {
      isProceed = false;
      errorMessage += " Email";
    }

    if (!isProceed) {
      toast.warning(errorMessage);
    } else {
      const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      if (!emailRegex.test(email)) {
        isProceed = false;
        toast.warning("Please enter a valid email");
      }
    }

    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = { id, name, password, email, phone, country, address, gender };

    if (isValid()) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = users.some(user => user.id === id);
      if (userExists) {
        toast.error("Username already exists!");
        return;
      }

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      toast.success("Registered successfully.");
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>User Name <span className="errmsg">*</span></label>
                    <input
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Password <span className="errmsg">*</span></label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Full Name <span className="errmsg">*</span></label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Email <span className="errmsg">*</span></label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Country</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                    >
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                      <option value="singapore">Singapore</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br />
                    <input
                      type="radio"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      value="male"
                      className="app-check"
                    />
                    <label> Male </label>
                    <input
                      type="radio"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      value="female"
                      className="app-check"
                    />
                    <label> Female </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Register</button> |
              <Link to="/login" className="btn btn-danger">Close</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
