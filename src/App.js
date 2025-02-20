import React from 'react';
import {useState} from "react";
import Home from "./components/home";
import DashBoard from "./components/dashBoard";
import Loggin from "./components/loggin";
import Edit from "./components/edit";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
function App () {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [Books, setBooks] = useState([
{
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    description: "A novel about the serious issues of rape and racial inequality, told from the perspective of a young girl.",
    price: "₹750"
  },
  {
    title: "1984",
    author: "George Orwell",
    publisher: "Secker & Warburg",
    description: "A dystopian social science fiction novel about a totalitarian regime that uses surveillance and propaganda to maintain power.",
    price: "₹680"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Charles Scribner's Sons",
    description: "A novel set in the Jazz Age that explores themes of wealth, class, and the American Dream.",
    price: "₹900"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publisher: "T. Egerton, Whitehall",
    description: "A romantic novel that explores the manners and matrimonial machinations among the British gentry of the early 19th century.",
    price: "₹500"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publisher: "Little, Brown and Company",
    description: "A novel about the disillusionment and rebellion of a young man, Holden Caulfield, as he narrates his life story after being expelled from a prestigious school.",
    price: "₹750"
  }
]);
return (
<div>
<Router>
<header>
<nav>
<ul style={{ listStyleType: 'none' }}>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/dashboard">Admin DashBoard </Link>
</li>
<li>
<Link to="/loggin">Admin loggin</Link>
</li>
</ul>
</nav>
</header>

<main>
<Routes>
<Route path="/" element={<Home Books={Books}/>} exact />
<Route path="/dashboard" element={<DashBoard Books={Books} isLoggedIn={isLoggedIn} setBooks={setBooks}/>} />
<Route path="/loggin" element={<Loggin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
<Route path="/edit" element={<Edit Books={Books} setBooks={setBooks} isLoggedIn={isLoggedIn}/>} />
</Routes>
</main>
<footer>
&copy; 2025 all rights reserved for voraciousreaders  library you can 
<a href="mailto:ravana.krn@gmail.com?subject=I%20have%20a%20query">mail us</a> or
contact us on 
<a href="https://t.me/r_thehunter">telegram</a> if you have any questions or concerns.
</footer>
</Router>

</div>
)
}

export default App;