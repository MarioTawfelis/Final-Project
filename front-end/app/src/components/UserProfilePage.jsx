import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfilePage() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000//users/user-profiles/${id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch user data');
      }
    })
    .then(data => {
      setUser(data);
    })
    .catch(error => {
      console.error(error);
      // handle the error here
    });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.first_name} {user.last_name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.default_phone}</p>
      <p>Address: {user.default_street_address_1} {user.default_street_address_2} {user.default_city} {user.default_country} {user.default_postcode}</p>
    </div>
  );
}

export default UserProfilePage;
