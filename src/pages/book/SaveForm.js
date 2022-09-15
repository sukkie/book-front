import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SaveForm = (props) => {
  let navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const changeVale = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const submitBook = (e) => {
    e.preventDefault();
    const method = 'POST';
    const body = JSON.stringify(book);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    fetch('http://localhost:8080/book', { method, headers, body })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        console.log(res);
        if (res !== null) {
          navigate('/');
        } else {
          alert('등록실패');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>책등록하기</h1>
      <Form onSubmit={submitBook}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={changeVale}
            name="title"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Author"
            onChange={changeVale}
            name="author"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SaveForm;
