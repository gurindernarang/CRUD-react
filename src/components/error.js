import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
const redirectToGit = () => {
  window.open(
    "https://github.com/gurindernarang/json-server#how-to-setup-json-server",
    "_blank"
  );
};
const error = () => (
  <Card>
    <Card.Header>JSON Server - Error</Card.Header>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        This application is using fake APIs, which needs to be set on your local
        machine using json-server. Either json-server is not working on your
        local on port 3001 as expected. If it's running then please do check
        db.json file.
      </Card.Text>
      <Button variant="outline-info" onClick={() => redirectToGit()}>
        Configure JSON Server
      </Button>
    </Card.Body>
  </Card>
);
export default error;
