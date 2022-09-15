import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateForm = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  // let id = props.match.params.id;
  const [book, setBook] = useState({});
  console.log(id);
  const getBook = (props) => {
    fetch('http://localhost:8080/book/' + id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBook(res);
      });
  };

  const changeVale = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log('useEffect 실행됨');
    getBook();
  }, []);

  const submitBook = (e) => {
    e.preventDefault();
    const method = 'PUT';
    const body = JSON.stringify(book);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    fetch('http://localhost:8080/book/' + id, { method, headers, body })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        console.log(res);
        if (res !== null) {
          navigate('/book/' + id);
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
      <h1>책수정하기</h1>
      <Form onSubmit={submitBook}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={changeVale}
            name="title"
            value={book.title}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Author"
            onChange={changeVale}
            name="author"
            value={book.author}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UpdateForm;
