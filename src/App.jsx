import React from "react";    

import BooksList from "./components/BooksList.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <p>
        Books are timeless companions that open doors to knowledge, imagination,
        and understanding. They allow us to travel across worlds, explore
        different cultures, and experience countless emotions—all without
        leaving our seat. Through books, we learn from the wisdom of others,
        reflect on our own lives, and find inspiration to grow. Whether fiction
        or non-fiction, every book holds the power to shape our thoughts,
        broaden our perspective, and connect us to the shared human experience.
        In a fast-moving digital age, books remain a quiet refuge—a place where
        ideas live on and stories never fade.
      </p>
      <BooksList />
    </div>
  );
}

export default App;
