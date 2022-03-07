import { useEffect, useState } from "react";
import "./App.css";

type Quote = {
  id: number;
  name: string;
  age: string | null;
  image: string;
  content: string;
};

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3001/quotes`)
      .then((resp) => resp.json())
      .then((quotes) => setQuotes(quotes));
  }, []);

  return (
    <div className="App">
      <h1>Famous Quotes</h1>
      <ul className="quotes">
        {quotes.map((quote) => (
          <li className="quote">
            <img className="quote-image" src={quote.image} alt="" />
            <div className="quote-content-name">
              <span className="quote-content">{quote.content}</span>
              <span className="quote-name">{quote.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
