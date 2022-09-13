import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SaveForm = () => {
  return (
    <div>
      <h1>책등록하기</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="email" placeholder="Title" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control type="password" placeholder="Author" />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            const obj = { hello: 'world' };
            const method = 'POST';
            const body = JSON.stringify(obj);
            const headers = {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            };
            fetch('http://localhost:8080/book', { method, headers, body })
              .then((res) => res.json())
              .then((res) => {
                console.log(res);
              });
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SaveForm;
