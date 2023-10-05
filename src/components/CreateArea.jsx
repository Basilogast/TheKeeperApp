import React, { useState } from "react";

function CreateArea(prop) {
  const [inputText, inputTextFunc] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    var name = event.target.name;
    var text = event.target.value;
    inputTextFunc((prevValue) => {
      return name === "title"
        ? {
            title: text,
            content: prevValue.content
          }
        : {
            title: prevValue.title,
            content: text
          };
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={inputText.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={inputText.content}
        />
        <button
          onClick={(event) => {
            prop.onClick(inputText);
            event.preventDefault();
            inputTextFunc(() => {
              return {
                title: "",
                content: ""
              };
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
