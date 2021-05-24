import React, { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked); // Toggle the value

  return (
    <div className="App">
      <h2>Create an account</h2>

      <form>
        {/* Add other inputs here for e-mail, password, etc... */}

        <input type="checkbox" value={checked} onChange={handleChange} />
        <label>I have read and agreed with the terms and conditions.</label>

        <br />
        <br />

        <button type="submit" disabled={!checked}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default App;
