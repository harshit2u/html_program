import React, { useState, useEffect } from 'react';

function UserList() {
  // State to store the list of users, loading status, and error
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetching data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())  // Parsing the response as JSON
      .then((data) => {
        setUsers(data);         // Setting users state with the fetched data
        setLoading(false);      // Changing loading state to false once data is fetched
      })
      .catch((error) => {
        setError(error);        // Setting error state if there's any error
        setLoading(false);      // Changing loading state to false if error occurs
      });
  }, []);  // Empty dependency array means this effect will run only once on component mount

  // Render loading state
  if (loading) {
    return <p>Loading users...</p>;
  }

  // Render error state
  if (error) {
    return <p>Error fetching users: {error.message}</p>;
  }

  // Render the list of users if data is available
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {/* Mapping through the users state and displaying each user's username and name */}
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong>: {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
