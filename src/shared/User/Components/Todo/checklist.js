import React from "react";

import Textfield from "../Textfield";
import Checkbox from "../Checkbox";

const Checklist = ({
  list,
  id,
  checklistChange,
  blureChek,
  inputCheck,
  chekComplete,
  dragStart,
  dragEnd,
  drop,
  dropEnter,
  dropLeave
}) => (
  <div className="task__checklist">
    {list.map((el, idx) => (
      <React.Fragment key={el.id}>
        <div
          className="el"
          draggable="true"
          onDragStart={dragStart}
          onDragEnd={dragEnd}
          name={`element-${id}-${el.id}`}
        >
          {el.state && el.state === "text" ? (
            <React.Fragment>
              <span
                onDoubleClick={() => inputCheck(id, el.id)}
                className={el.complete ? "check-text checked" : "check-text"}
              >
                {idx + 1}. {el.value || ""}
              </span>
              <Checkbox
                isChecked={el.complete ? true : false}
                placeholder=""
                handlerChange={() => chekComplete(id, el.id)}
              />
            </React.Fragment>
          ) : (
            <Textfield
              type="input"
              name={`${id}-${el.id}`}
              placeholder={idx + 1}
              value={el.value || ""}
              handlerChange={checklistChange}
              isChecklist={true}
              blureChek={blureChek}
            />
          )}
        </div>
        <div
          className="drop-container-el"
          name={`element-${id}-${el.id}`}
          onDragOver={event => event.preventDefault()}
          onDrop={drop}
          onDragEnter={dropEnter}
          onDragLeave={dropLeave}
        />
      </React.Fragment>
    ))}
  </div>
);

export default Checklist;
