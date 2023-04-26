import React, { useState } from 'react';

function RegistrationPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [streetAddress1, setStreetAddress1] = useState('');
  const [streetAddress2, setStreetAddress2] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postcode, setPostcode] = useState('');

  const handleSubmit = (event) => {

    event.preventDefault();
    fetch('http://127.0.0.1:8000/users/user-profiles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        default_phone: phone,
        default_street_address_1: streetAddress1,
        default_street_address_2: streetAddress2,
        default_city: city,
        default_country: country,
        default_postcode: postcode
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Registration failed');
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
      // handle the error here
    });
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <br />
        <label>
          Street Address 1:
          <input type="text" value={streetAddress1} onChange={(event) => setStreetAddress1(event.target.value)} />
        </label>
        <br />
        <label>
          Street Address 2:
          <input type="text" value={streetAddress2} onChange={(event) => setStreetAddress2(event.target.value)} />
        </label>
        <br />
        <label>
          City:
          <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
        </label>
        <br />
        <label>
          Country:
          <input type="text" value={country} onChange={(event) => setCountry(event.target.value)} />
        </label>
        <br />
        <label>
        Postcode:
        <input type="text" value={postcode} onChange={(event) => setPostcode(event.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
        </form>
        </div>
    );
  }

export default RegistrationPage;
