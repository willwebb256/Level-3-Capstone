import React, { useState } from "react";

const App = () => {
  const [badges, setBadges] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [color, setColor] = useState("red");

  const handleSubmit = event => {
    event.preventDefault();

    if (firstName.length >= 3 && lastName.length >= 3 && phoneNumber.length >= 3 && email.length >= 3) {
      if (validatePhoneNumber(phoneNumber)) {
        setBadges([
          ...badges,
          { firstName, lastName, phoneNumber, email, color: color === "red" ? "blue" : "red" }
        ]);
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setColor(color === "red" ? "blue" : "red");
      } else {
        alert("Invalid phone number format. Please enter a valid phone number without dashes or special characters (e.g. 9757653323)");
      }
    } else {
      alert("All fields must contain at least 3 characters.");
    }
  };

  const validatePhoneNumber = phoneNumber => {
    return /^\d+$/.test(phoneNumber);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit" disabled={firstName.length < 3 || lastName.length < 3 || phoneNumber.length < 3 || email.length < 3}>
          Submit
        </button>
      </form>
      <div>
        {badges.map((badge, index) => (
          <div key={index} style={{ backgroundColor: badge.color }}>
            <h3>{badge.firstName} {badge.lastName}</h3>
            <p>Phone: {badge.phoneNumber}</p>
            <p>Email: {badge.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;










