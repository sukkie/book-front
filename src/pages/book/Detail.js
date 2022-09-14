import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Detail = () => {
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

  const deleteBook = (id) => {
    fetch().then().then();
  };

  useEffect(() => {
    console.log('useEffect 실행됨');
    getBook();
  }, []);

  return (
    <div>
      <h1>상세보기</h1>
      <Button variant="warning">수정</Button>{' '}
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
