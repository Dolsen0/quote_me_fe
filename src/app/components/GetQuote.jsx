import React, { useState, useEffect } from "react";

export default function GetQuote() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/quote")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setQuote(data.results[0].content);
          setAuthor(data.results[0].author);
        } else {
          throw new Error("No quotes found in the response");
        }
      })
      .catch((error) => {
        setError(error.message);
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  }, []);

  return (
    <div>
      {quote && <p>{quote}</p>}
      {author && <p>{author}</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}
