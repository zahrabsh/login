import { useState } from "react";

export default function App() {
  const [name, setName] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const [headingText, setheadingText] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  function handelchange(event) {
    const { name, value } = event.target;
    setName((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function click(event) {
    setheadingText({
      fname: name.fname,
      lname: name.lname,
      email: name.email,
    });

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        {" "}
        Hello {headingText.fname} {headingText.lname}
      </h1>
      <p>{headingText.email}</p>

      <form onSubmit={click}>
        <input
          name="fname"
          placeholder="Enter yourName"
          onChange={handelchange}
          value={name.fname}
        ></input>
        <input
          name="lname"
          placeholder="Enter Your Password"
          onChange={handelchange}
          value={name.lname}
        ></input>
        <input
          name="email"
          placeholder="Enter Your Email"
          onChange={handelchange}
          value={name.email}
        ></input>
        <button type="submit" style={{ background: "black" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
