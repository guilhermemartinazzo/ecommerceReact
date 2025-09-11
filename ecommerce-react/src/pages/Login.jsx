import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { fetchApi, login } from "../service/fetchApi";
import { Alert } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultLogin = await login(email, password);
      if (resultLogin) {
        navigate("/");
      }
      return;
    } catch (error) {
      if (error.status == 401) {
        <Alert key={"danger"} show={true} variant="warning">
          Invalid credentials
        </Alert>;
        return;
      } else {
        alert("Erro desconhecido: ", error.message);
      }
      return;
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formButton">
        <Col sm="10">
          <Button type="submit" variant="primary">
            Login
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Login;
