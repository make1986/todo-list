import React from "react";

import { HandlerAPI } from "../../api";

const withTodoList = (Component, api_prefix, validate) => {
  class WithTodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: this.props.user,
        drag: "",
        drop: "",
        dragtype: ""
      };
      this.addTask = this.addTask.bind(this);
      this.handlerChange = this.handlerChange.bind(this);
      this.addChecklist = this.addChecklist.bind(this);
      this.checklistChange = this.checklistChange.bind(this);
      this.blureChek = this.blureChek.bind(this);
      this.inputCheck = this.inputCheck.bind(this);
      this.chekComplete = this.chekComplete.bind(this);
      this.dragStart = this.dragStart.bind(this);
      this.dragEnd = this.dragEnd.bind(this);
      this.drop = this.drop.bind(this);
      this.dropEnter = this.dropEnter.bind(this);
      this.dropLeave = this.dropLeave.bind(this);
      this.completeTask = this.completeTask.bind(this);
    }

    addTask() {
      let { data } = this.props;
      data.push({ id: new Date().getTime() });
      this.props.callServer(data);
    }

    addChecklist(id) {
      let { data } = this.props;
      const idx = data.findIndex(x => x.id.toString() === id.toString());
      data[idx].checklist
        ? data[idx].checklist.push({ id: new Date().getTime() })
        : (data[idx].checklist = [{ id: new Date().getTime() }]);

      this.props.callServer(data);
    }

    handlerChange(id, value) {
      let { data } = this.props;
      const idx = data.findIndex(x => x.id.toString() === id.toString());
      data[idx].task = value;
      this.props.callServer(data);
    }

    checklistChange(name, value) {
      let { data } = this.props;
      const block_id = name.split("-")[0];
      const check_id = name.split("-")[1];
      const block_idx = data.findIndex(
        x => x.id.toString() === block_id.toString()
      );
      const check_idx = data[block_idx].checklist.findIndex(
        x => x.id.toString() === check_id.toString()
      );
      data[block_idx].checklist[check_idx].value = value;
      this.props.callServer(data);
    }
    blureChek(flag, name) {
      let { data } = this.props;
      const block_id = name.split("-")[0];
      const check_id = name.split("-")[1];
      const block_idx = data.findIndex(
        x => x.id.toString() === block_id.toString()
      );
      const check_idx = data[block_idx].checklist.findIndex(
        x => x.id.toString() === check_id.toString()
      );
      if (flag) {
        data[block_idx].checklist[check_idx].state = "text";
      } else {
        data[block_idx].checklist.splice(check_idx, 1);
      }

      this.props.callServer(data);
    }
    inputCheck(block_id, check_id) {
      let { data } = this.props;
      const block_idx = data.findIndex(
        x => x.id.toString() === block_id.toString()
      );
      const check_idx = data[block_idx].checklist.findIndex(
        x => x.id.toString() === check_id.toString()
      );
      data[block_idx].checklist[check_idx].state = "input";
      this.props.callServer(data);
    }
    chekComplete(block_id, check_id) {
      let { data } = this.props;
      const block_idx = data.findIndex(
        x => x.id.toString() === block_id.toString()
      );
      const check_idx = data[block_idx].checklist.findIndex(
        x => x.id.toString() === check_id.toString()
      );

      data[block_idx].checklist[check_idx].complete
        ? (data[block_idx].checklist[check_idx].complete = false)
        : (data[block_idx].checklist[check_idx].complete = true);

      this.props.callServer(data);
    }
    completeTask(id) {
      let { data } = this.props;
      const idx = data.findIndex(x => x.id.toString() === id.toString());
      if (data[idx].complete) {
        data[idx].complete = false;
      } else {
        data[idx].complete = true;
      }

      this.props.callServer(data);
    }
    dragStart(e) {
      e.dataTransfer.setData("text/html", e.target.id);
      const dragtype = e.target.attributes.name.value.split("-")[0];
      this.setState({ drag: e.target.attributes.name.value, dragtype });
    }
    dragEnd(e) {
      this.setState({ drag: "", dragtype: "" });
    }
    drop(e) {
      let { data } = this.props;
      if (
        e.target.attributes.name.value.split("-")[0] === this.state.dragtype &&
        e.target.attributes.name.value !== this.state.drag
      ) {
        if (this.state.dragtype === "element") {
          e.target.style.height = "10px";
          e.target.style.border = "none";
        } else {
          e.target.style.width = "30px";
          e.target.style.border = "none";
        }
        const drop = e.target.attributes.name.value;
        const { drag } = this.state;

        if (this.state.dragtype === "element") {
          const dropKeys = {
            block_id: drop.split("-")[1],
            check_id: drop.split("-")[2]
          };
          const dragKeys = {
            block_id: drag.split("-")[1],
            check_id: drag.split("-")[2]
          };

          dropKeys.block_idx = data.findIndex(
            x => x.id.toString() === dropKeys.block_id.toString()
          );
          dropKeys.check_idx = data[dropKeys.block_idx].checklist.findIndex(
            x => x.id.toString() === dropKeys.check_id.toString()
          );
          dragKeys.block_idx = data.findIndex(
            x => x.id.toString() === dragKeys.block_id.toString()
          );
          dragKeys.check_idx = data[dragKeys.block_idx].checklist.findIndex(
            x => x.id.toString() === dragKeys.check_id.toString()
          );
          const tmp = data[dragKeys.block_idx].checklist[dragKeys.check_idx];
          data[dragKeys.block_idx].checklist.splice(dragKeys.check_idx, 1);
          data[dropKeys.block_idx].checklist.splice(dropKeys.check_idx, 0, tmp);
        } else {
          const dropKeys = {
            block_id: drop.split("-")[1]
          };
          const dragKeys = {
            block_id: drag.split("-")[1]
          };
          dropKeys.block_idx = data.findIndex(
            x => x.id.toString() === dropKeys.block_id.toString()
          );
          dragKeys.block_idx = data.findIndex(
            x => x.id.toString() === dragKeys.block_id.toString()
          );
          const tmp = data[dragKeys.block_idx];
          data.splice(dragKeys.block_idx, 1);
          data.splice(dropKeys.block_idx, 0, tmp);
        }

        this.props.callServer(data);
      } else if (e.target.attributes.name.value.split("-")[0] === "trash") {
        e.target.style.backgroundColor = "#35ac19";
        e.target.style.boxShadow = "none";
        const { drag } = this.state;
        if (this.state.dragtype === "element") {
          const dragKeys = {
            block_id: drag.split("-")[1],
            check_id: drag.split("-")[2]
          };

          dragKeys.block_idx = data.findIndex(
            x => x.id.toString() === dragKeys.block_id.toString()
          );
          dragKeys.check_idx = data[dragKeys.block_idx].checklist.findIndex(
            x => x.id.toString() === dragKeys.check_id.toString()
          );
          data[dragKeys.block_idx].checklist.splice(dragKeys.check_idx, 1);
        } else {
          const dragKeys = {
            block_id: drag.split("-")[1]
          };
          dragKeys.block_idx = data.findIndex(
            x => x.id.toString() === dragKeys.block_id.toString()
          );
          data.splice(dragKeys.block_idx, 1);
        }
        this.props.callServer(data);
      }
    }
    dropEnter(e) {
      if (
        e.target.attributes.name.value.split("-")[0] === this.state.dragtype &&
        e.target.attributes.name.value !== this.state.drag
      ) {
        if (this.state.dragtype === "element") {
          e.target.style.height = "30px";
          e.target.style.border = "2px dashed #fff";
        } else {
          e.target.style.width = "360px";
          e.target.style.border = "2px dashed grey";
        }
      } else if (e.target.attributes.name.value.split("-")[0] === "trash") {
        e.target.style.backgroundColor = "#008329";
        e.target.style.boxShadow =
          "0 2px 10px 1px rgba(57, 73, 76, 0.4), 0 1px 2px rgba(57, 73, 76, 0.25)";
      }
    }
    dropLeave(e) {
      if (
        e.target.attributes.name.value.split("-")[0] === this.state.dragtype &&
        e.target.attributes.name.value !== this.state.drag
      ) {
        if (this.state.dragtype === "element") {
          e.target.style.height = "10px";
          e.target.style.border = "none";
        } else {
          e.target.style.width = "30px";
          e.target.style.border = "none";
        }
      } else if (e.target.attributes.name.value.split("-")[0] === "trash") {
        e.target.style.backgroundColor = "#35ac19";
        e.target.style.boxShadow = "none";
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          handlerChange={this.handlerChange}
          addTask={this.addTask}
          addChecklist={this.addChecklist}
          checklistChange={this.checklistChange}
          blureChek={this.blureChek}
          inputCheck={this.inputCheck}
          chekComplete={this.chekComplete}
          dragStart={this.dragStart}
          dragEnd={this.dragEnd}
          drop={this.drop}
          dropEnter={this.dropEnter}
          dropLeave={this.dropLeave}
          completeTask={this.completeTask}
        />
      );
    }
  }
  WithTodoList.displayName = `WithTodoList(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithTodoList;
};

export default withTodoList;
