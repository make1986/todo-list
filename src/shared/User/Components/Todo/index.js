import React from "react";

import withTodoList from "../../HOCs/withTodoList";

import Textfield from "../Textfield";
import Checklist from "./checklist";

const Todo = ({
  data,
  user,
  addTask,
  handlerChange,
  addChecklist,
  checklistChange,
  blureChek,
  inputCheck,
  chekComplete,
  dragStart,
  dragEnd,
  drop,
  dropEnter,
  dropLeave,
  completeTask,
  logout,
  blureTask
}) => (
  <div className="todo">
    {data.length === 0 ? (
      <h3 className="todo__empty_message">
        Hi, {user.name}, <span onClick={addTask}>create your first task</span>
      </h3>
    ) : (
      <div className="todo__container">
        {data.map(task => (
          <React.Fragment key={task.id}>
            <div
              className="task"
              draggable="true"
              onDragStart={dragStart}
              onDragEnd={dragEnd}
              name={`task-${task.id}`}
            >
              <Textfield
                blureTask={blureTask}
                isTask={true}
                type="textarea"
                name={task.id}
                placeholder="What to do?"
                value={task.task || ""}
                handlerChange={handlerChange}
              />
              <Checklist
                blureChek={blureChek}
                checklistChange={checklistChange}
                id={task.id}
                list={task.checklist || []}
                inputCheck={inputCheck}
                chekComplete={chekComplete}
                dragStart={dragStart}
                dragEnd={dragEnd}
                drop={drop}
                dropEnter={dropEnter}
                dropLeave={dropLeave}
              />
              <span
                onClick={() => addChecklist(task.id)}
                className="task__checklist-add"
              >
                Add a checklist element
              </span>
              <div
                onClick={() => completeTask(task.id)}
                className="button white"
              >
                Complete the task
              </div>
              {task.complete ? (
                <div className="task__complete">
                  <h3>✔</h3>
                  <span onClick={() => completeTask(task.id)}>
                    To return to the task
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              className="drop-container-task"
              name={`task-${task.id}`}
              onDragOver={event => event.preventDefault()}
              onDrop={drop}
              onDragEnter={dropEnter}
              onDragLeave={dropLeave}
            />
          </React.Fragment>
        ))}
        <div className="next-task" onClick={addTask}>
          +
        </div>
      </div>
    )}
    <div
      className="trash"
      name={`trash-trash`}
      onDragOver={event => event.preventDefault()}
      onDrop={drop}
      onDragEnter={dropEnter}
      onDragLeave={dropLeave}
    >
      <h3 name={`trash-trash`}>Trash</h3>
      <span name={`trash-trash`}>Move here to delete</span>
    </div>
    <div onClick={logout} className="button green logout">
      Log out
    </div>
  </div>
);

export default withTodoList(Todo);
