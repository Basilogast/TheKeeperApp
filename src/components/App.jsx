import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, itemFunc] = useState([]);

  function createNote(par, id) {
    return (
      <Note
        key={id}
        id={id}
        title={par.title}
        content={par.content}
        onClick={handleDelete}
      />
    );
  }

  function handleAdd(inputText) {
    itemFunc((prevValue) => {
      return [...prevValue, inputText];
    });
  }

  function handleDelete(id) {
    console.log(id);
    itemFunc((prevValue) => {
      return prevValue.filter((itemEle, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={handleAdd} />
      {item.map((itemEle, index) => {
        return createNote(itemEle, index);
      })}
      <Footer />
    </div>
  );
}

export default App;
