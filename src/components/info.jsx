import React from "react";
import { useLocation, Link } from "react-router-dom";
import noImage from "../assets/no-image.jpg";
import './info.css';

function BookInfo() {
  const location = useLocation();
  const book = location.state;

  return (
    <div className="book-info-container">
      <div className="book-info-left">
        <img src={ book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noImage}  alt="No-Image"/>
      </div>
      <div className="book-info-right">
        <div className="book-details">
          <h1>{book.title}</h1>
          <h4>Average Rating: {book.averageRating ? book.averageRating : "3"}</h4>
          <h5>Page Count: {book.pageCount ? book.pageCount : null}</h5>
          <h5>Published date: {book.publishedDate ? book.publishedDate : null}</h5>
          <p><b>Description:</b> {book.description}</p>
        </div>
        <Link to='/' ><button >Back To Home</button></Link>
      </div>
    </div>
  );
}

export default BookInfo;
