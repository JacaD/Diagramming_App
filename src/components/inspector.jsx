import React, { Component } from "react";
import Select from "./common/select";
import go from "gojs";

class Inspector extends Component {
  state = {
    colors: ["green", "yellow", "blue", "red", "purple"],
    figures: ["RoundedRectangle", "Triangle", "Rectangle"],
    inspectedObject: null
  };

  componentDidMount() {
    let { diagram } = this.props;
    diagram.addModelChangedListener(e => {
      if (e.isTransactionFinished) this.inspectObject();
    });
    diagram.addDiagramListener("ChangedSelection", () => this.inspectObject());
  }

  inspectObject = object => {
    let { diagram } = this.props;
    let inspectedObject = object;
    if (inspectedObject === undefined) {
      inspectedObject = diagram.selection.first();
    }
    if (
      inspectedObject instanceof go.Group ||
      inspectedObject instanceof go.Link
    ) {
      this.setState({ inspectedObject: null });
      return;
    }
    if (inspectedObject === null || this.inspectedObject === inspectedObject) {
      this.setState({ inspectedObject });
    }
    this.setState({ inspectedObject });
  };

  update = (value, name) => {
    let { diagram } = this.props;
    let { inspectedObject } = this.state;
    if (inspectedObject === null) return;
    diagram.startTransaction("set all properties");
    diagram.model.setDataProperty(inspectedObject.data, name, value);
    diagram.commitTransaction("set all properties");
  };

  render() {
    if (this.state.inspectedObject === null) {
      return <div id={this.props.id} />;
    }

    return (
      <div id={this.props.id}>
        <input
          type="text"
          onChange={e => this.update(e.target.value, "name")}
        />
        <Select
          onChange={e => this.update(e.target.value, "color")}
          options={this.state.colors}
        />
        <Select
          onChange={e => this.update(e.target.value, "figure")}
          options={this.state.figures}
        />
      </div>
    );
  }
}

export default Inspector;
