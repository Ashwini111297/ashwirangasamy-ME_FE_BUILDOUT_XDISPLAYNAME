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
        {/* FIRST NAME INPUT */}
        <input
          type="text"                // ✅ REQUIRED
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        {/* LAST NAME INPUT */}
        <input
          type="text"                // ✅ REQUIRED
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {/* OUTPUT */}
      {fullName && <h3>Full Name: {fullName}</h3>}
    </div>
  );
}

export default App;
