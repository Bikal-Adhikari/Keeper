import React, { useState } from "react";

const CreateArea = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  const handelChange = (event) => {
    const { name, value } = event.target;
    setInputText((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  const handelSubmit = (event) => {
    props.addData(inputText);
    setInputText({
      title: "",
      content: "",
    });
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          onChange={handelChange}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={handelChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
