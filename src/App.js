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
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {fullName && <h3>Full Name: {fullName}</h3>}
    </div>
  );
}

export default App;
