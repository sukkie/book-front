import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import BookItem from '../../components/BookItem';

const Home = () => {
  const [books, setBooks] = useState([]);

  const getBook = () => {
    // // 가정 다운로드를 받고(통신)
    // axios('http://localhost:8080/book', {
    //   method: 'GET',
    // }).then(
    //   (result) => {
    //     console.log(result.data);
    //     setBooks(result.data);
    //   },
    //   (error) => {
    //     console.error(error);
    //   },
    // );
    fetch('http://localhost:8080/book')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBooks(res);
      });
  };

  // 실행시점
  // 1. App() 함수가 최초 실행될 때(그림이 그려질 때)
  // 2. 상태 변수가 변경될 때(2번째 인수로 온오프 할 수 있음)
  useEffect(() => {
    console.log('useEffect 실행됨');
    getBook();
  }, []);

  return (
    <div>
      <h1>책리스트</h1>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
