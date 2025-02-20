import { useState } from "react";

function AddBook({Books, setBooks, isAddBook, setIsAddBook}) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publisher: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.title || !book.author || !book.publisher || !book.price) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Submitted Book Data:", book);
let tmpbooks=[...Books, book];
setBooks(tmpbooks);
  //setBooks((prevBooks) => (Array.isArray(prevBooks) ? [...prevBooks, book] : [book]));
    alert("Book submitted successfully!");
    setBook({ title: "", author: "", publisher: "", description: "", price: "" });
setIsAddBook(false);
  };

  return (
    <div className="form-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Book Title:</label>
          <input
            type="text"
id="title"
placeHolder="title"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
autoFocus
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
id="author"
placeHolder="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="publisher">Publisher:</label>
          <input
            type="text"
id="publisher"
placeHolder="publisher"
            name="publisher"
            value={book.publisher}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
placeHolder="description"
id="description"
            value={book.description}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price (INR):</label>
          <input
            type="number"
id="price"
placeHolder="price"
            name="price"
            value={book.price}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBook;