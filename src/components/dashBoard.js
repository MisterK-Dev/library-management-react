import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import AddBook from './addBook';

function DashBoard({ isLoggedIn, Books, setBooks }) {
  const navigate = useNavigate();
  const [isAddBook, setIsAddBook] = useState(false);
  const handleOnClick = (i, v) => {
    // Create a copy of Books before modifying it
    const tmpBooks = [...Books];
    tmpBooks.splice(i, 1);
    setBooks(tmpBooks);
alert(`the book ${v.title} has be successfully removed from list`);
  };

  const handleAddBook = () => {
    setIsAddBook(true);
  };
useEffect(() => {
    if (!isLoggedIn) {
      alert("Login to continue");
      navigate("/loggin");
    }
  }, [isLoggedIn]); 
  if (!isLoggedIn) {
return null;  }

  return (
    <>
      <div>
        <h1>hello Admin</h1>
        <h2>available books:</h2>
        <table>
          <caption>available books list</caption>
          <thead>
            <tr>
              <th>title:</th>
              <th>author:</th>
              <th>publisher:</th>
              <th>description:</th>
              <th>price:</th>
<th>edit</th>
              <th>remove book</th>
            </tr>
          </thead>
          <tbody>
            {Books.map((value, index) => (
              <tr key={index}>
                <td>{value.title}</td>
                <td>{value.author}</td>
                <td>{value.publisher}</td>
                <td>{value.description}</td>
                <td>{value.price}</td>
<td>
<button onClick={() => navigate("/edit", {state: {value, index}})}>edit</button>
</td>
                <td>
                  <button type="button" onClick={() => handleOnClick(index, value)}>
                    remove book
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={handleAddBook}>
          add book
        </button>
        {isAddBook && <AddBook Books={Books} setBooks={setBooks} isAddBook={isAddBook} setIsAddBook={setIsAddBook}/>}
      </div>
    </>
  );
}

export default DashBoard;
