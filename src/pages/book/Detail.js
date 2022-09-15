import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
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

  const updateBook = (id) => {
    navigate('/updateForm/' + id);
  };

  const deleteBook = (id) => {
    fetch('http://localhost:8080/book/ ' + id, { method: 'DELETE' })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          navigate('/');
        } else {
          alert('faile');
        }
      });
  };

  useEffect(() => {
    console.log('useEffect 실행됨');
    getBook();
  }, []);

  return (
    <div>
      <h1>상세보기</h1>
      <Button
        variant="warning"
        onClick={() => {
          updateBook(book.id);
        }}
      >
        수정
      </Button>{' '}
      <Button
        variant="danger"
        onClick={() => {
          deleteBook(book.id);
        }}
      >
        삭제
      </Button>
      <hr />
      <h3>{book.author}</h3>
      <h1>{book.title}</h1>
    </div>
  );
};

export default Detail;
