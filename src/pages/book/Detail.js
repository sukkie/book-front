import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  let { id } = useParams();
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

  useEffect(() => {
    console.log('useEffect 실행됨');
    getBook();
  }, []);

  return (
    <div>
      <h1>{book.id}</h1>
      <h1>{book.title}</h1>
      <h1>{book.author}</h1>
    </div>
  );
};

export default Detail;
