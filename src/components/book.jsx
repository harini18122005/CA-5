import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/kalviumLogo.png";
import "../App.css";
import noImage from "../assets/no-image.jpg";

function Book() {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((err) => {
        console.log(`Error Found: ${err}`);
      });
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value.toLowerCase());

    axios
      .post(
        "https://reactnd-books-api.udacity.com/search",
        { query: searchValue, maxResults: 30 },
        { headers: { Authorization: "whatever-you-want" } }
      )
      .then((res) => {
        setSearchBooks(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let filterList = searchValue !== "" ? searchBooks : books;

  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <img src={logo} alt="" />
          <div>
            <h4>Kalvium</h4>
            <h3>Books</h3>
          </div>
        </div>
        <div>
          <div className="search-bar">
            <input type="text" value={searchValue}  placeholder={`Search Books`} onChange={(e) => handleSearch(e.target.value)}/>
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="login-div">
            <Link to="/register" className="register-btn"> Register </Link>
          </div>
        </div>
      </div>
      <div  className="books-container" style={{ width: "90%", height: "90%" }}  >
        {Array.isArray(filterList) ? (
          filterList.map((book, index) => {
            return (
              <Link  style={{ textDecoration: "none" }}  to="/bookinfo"  state={book}  key={index} >
                <div className="books">
                  <img
                    src={
                      book.imageLinks && book.imageLinks.thumbnail
                        ? book.imageLinks.thumbnail
                        : noImage
                    }
                    alt={book.title}
                  />
                  <p className="title">{book.title}</p>
                  <div>
                    <span>
                      {book.averageRating ? book.averageRating : "3"}
                    </span>
                    <span>⭐</span>
                    <span>Free</span>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <h1 style={{ color: "black" }}>No Books Available</h1>
        )}
      </div>
    </div>
  );
}

export default Book;
