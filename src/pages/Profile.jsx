import React, { useEffect, useState } from 'react';
import users from '../data';

const Profile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const username = sessionStorage.getItem('username');

    if (!username) {
      setError('No username found in sessionStorage. Please log in.');
      setLoading(false);
      return;
    }

    const foundUser = users.find(user => user.id === username);

    if (!foundUser) {
      setError('No user data found for this username.');
    } else {
      setData(foundUser);
    }

    setLoading(false);
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="fetch-data-container">
      <ul>
        <li>
          <h2>Name: {data.name}</h2>
          <p><span>Email:</span> {data.email}</p>
          <p><span>Phone:</span> {data.phone}</p>
          <p><span>Country:</span> {data.country}</p>
          <p><span>Address:</span> {data.address}</p>
          <p><span>Gender:</span> {data.gender}</p>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
