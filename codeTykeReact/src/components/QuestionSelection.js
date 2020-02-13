import React from "react";

const clickedBox = document.getElementsByClassName("selectionBox");

const QuestionSelection = props => {
  const handleCheckbox = (event, currentSelectionIndex) => {
    let newCheckboxStatus = props.checkboxStatus.map((status, index) => {
      clickedBox[index].id = index;
      if (index === currentSelectionIndex) {
        if (event.target.checked) {
          clickedBox[index].style.backgroundColor = "#C6CAC9";
        }
        if (!event.target.checked) {
          clickedBox[index].style.backgroundColor = "transparent";
        }
        console.log(props);
        return event.target.checked;
      } else {
        return status;
      }
    });
    props.setCheckboxStatus(newCheckboxStatus);
  };

  return (
    <div className="selectionBox">
      <div className="selectionImageContainer">
        <img alt="" src={props.selection.image} />
      </div>
      <div className="checkboxText">
        <input
          onChange={event => handleCheckbox(event, props.index)}
          className="checkbox"
          type="checkbox"
        />
        <span className="selectionText">{props.selection.text}</span>
      </div>
    </div>
  );
};

export default QuestionSelection;
