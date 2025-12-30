import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      setFullName("");
    }
  };

  return (
    <div>
      {/* REQUIRED heading */}
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {/* REQUIRED output */}
      {fullName && <h3>Full Name: {fullName}</h3>}
    </div>
  );
}

export default App;
