import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import users from "./data";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const validate = () => {
    let result = true;
    if (username === '') {
      result = false;
      toast.warning('Please Enter Username');
    }
    if (password === '') {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  };

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      const foundUser = users.find(user => user.id === username);
      
      if (!foundUser) {
        toast.error('Please enter a valid username');
      } else if (foundUser.password === password) {
        toast.success(`Welcome back ${username}`);
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('userrole', foundUser.role || 'user');
        navigate('/');
      } else {
        toast.error('Please enter valid credentials');
      }
    }
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
        <form onSubmit={ProceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>User Name <span className="errmsg">*</span></label>
                <input value={username} onChange={e => setUsername(e.target.value)} className="form-control" />
              </div>
              <div className="form-group">
                <label>Password <span className="errmsg">*</span></label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Login</button> |
              <Link className="btn btn-success" to={'/register'}>New User</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
