import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [lists, setLists] = useState([]);
  const addData = (inputText) => {
    setLists([...lists, inputText]);
  };

  const deleteNote = (id) => {
    setLists((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea addData={addData} />
      {lists.map((noteItem, index) => {
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
            id={index}
            key={index}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
};

export default App;
