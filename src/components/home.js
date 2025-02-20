import Order from "./order";
import { useState } from "react";

function Home({ Books }) {
  const [selectBook, setSelectBook] = useState(false);
const [tmpSelectedBook, setTmpSelectedBook] = useState(null);
  return (
    <>
      <h1>wellcome to the voracious readers library</h1>
      <h2>about us:</h2>
      <p>
        we are group of individuals who have great interest in reading
        different books and also interested in recommending them to others to
        cultivate reading habbit in public. we established this library in 2025.
      </p>
      <p>
        you can get various kinds of genres of books in this library. but we
        demand reasonable price as you know it demands great effort to collect
        books and.
      </p>
      <p>
        to contact us, you can use links in footer
      </p>
      <hr />
      <h2>books list [note: click on book's title to go to order page]</h2>
      <table>
        <caption>available books list</caption>
        <thead>
          <tr>
            <th>title:</th>
            <th>author:</th>
            <th>publisher:</th>
            <th>description:</th>
            <th>price:</th>
          </tr>
        </thead>
        <tbody>
          {Books.map((value, index) => (
            <tr key={index}>
              <td onClick={() => {setTmpSelectedBook(value.title);
setSelectBook(true)}}>{value.title}</td>
              <td>{value.author}</td>
              <td>{value.publisher}</td>
              <td>{value.description}</td>
              <td>{value.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectBook && <Order selectBook={selectBook} setSelectBook={setSelectBook} tmpSelectedBook={tmpSelectedBook}/>}
    </>
  );
}

export default Home;
