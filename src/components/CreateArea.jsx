import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  const expand = () => {
    setExpanded(true);
  };
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
      <form onSubmit={handelSubmit} className="create-note">
        {isExpanded && (
          <input
            onChange={handelChange}
            name="title"
            placeholder="Title"
            value={inputText.title}
          />
        )}
        <textarea
          onChange={handelChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={inputText.content}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
