import React, { useState } from "react";
import "../assets/styles/userRegistration.css";

function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress1, setStreetAddress1] = useState("");
  const [streetAddress2, setStreetAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/users/user-profiles/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        default_postcode: postcode,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Registration failed");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        // handle the error here
      });
  };

  return (
    <div className="registration-wrapper">
      <div className="registration">
        <h1>Registration Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Register</button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
