import React, { useState } from "react";

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            password
        }
        console.log(newUser);

    }


  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleNameChange}
            />
          </div>

          <div>
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="name">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handlePasswordChange}
            />
                  </div>
                  <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
