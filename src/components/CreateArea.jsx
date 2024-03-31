import React, { useState } from "react";

const CreateArea = ({ getData }) => {
  const [inputText, setInputText] = useState("");

  const handelChange = (event) => {
    const { value } = event.target;
    setInputText(value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    getData(inputText);
    setInputText("");
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          onChange={handelChange}
          name="title"
          placeholder="Title"
          value={inputText}
        />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
