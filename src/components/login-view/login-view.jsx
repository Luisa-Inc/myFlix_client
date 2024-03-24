import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch("https://mighty-harbor-05233.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FiMDU0YmZkZDUwYmFjOTI4YzA3NTEiLCJVc2VybmFtZSI6IkxhZHlTYW5kcmEiLCJQYXNzd29yZCI6ImxhZHlzYW5kcmFwYXNzd29yZCIsIkVtYWlsIjoibGFkeXNhbmRyYUBnbWFpbC5jb20iLCJCaXJ0aGRheSI6IjE5ODgtMDgtMDdUMjI6MDA6MDAuMDAwWiIsIkZhdm9yaXRlTW92aWVzIjpbXSwiX192IjowLCJpYXQiOjE2NzIxNTI4NTQsImV4cCI6MTY3Mjc1NzY1NCwic3ViIjoiTGFkeVNhbmRyYSJ9.ZJGX5_B9BjXTdRrRJAgtdlFbe8E6VT5e_U_jFs2kFig}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-5">
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="5"
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit" className="mt-2">
        Submit
      </Button>
    </Form>
  );
};