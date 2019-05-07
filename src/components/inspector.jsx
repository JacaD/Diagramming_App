import React, { Component } from "react";
import Select from "./common/select";
import go from "gojs";

class Inspector extends Component {
  constructor(props) {
    super(props);
    this.state.nameInput = "";
    this.state.colorSelect = "";
    this.state.figureSelect = "";
  }

  state = {
    colors: [
      { value: "green", label: "Green" },
      { value: "grey", label: "Grey" },
      { value: "blue", label: "Blue" },
      { value: "red", label: "Red" },
      { value: "purple", label: "Purple" }
    ],
    figures: [
      { value: "RoundedRectangle", label: "Rounded Rectangle" },
      { value: "Triangle", label: "Triangle" },
      { value: "Rectangle", label: "Rectangle" }
    ],
    inspectedObject: null
  };

  componentDidMount() {
    let { diagram } = this.props;
    diagram.addModelChangedListener(e => {
      if (e.isTransactionFinished) {
        this.inspectObject();
      }
    });
    diagram.addDiagramListener("ChangedSelection", () => {
      this.inspectObject();
    });
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
    this.updateFields();
  };

  updateFields = () => {
    if (
      this.state.inspectedObject !== null &&
      this.state.inspectedObject.data !== null &&
      this.state.inspectedObject !== undefined
    ) {
      this.setState({
        nameInput: this.state.inspectedObject.data.name,
        colorSelect: this.state.inspectedObject.data.color,
        figureSelect: this.state.inspectedObject.data.figure
      });
    }
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
          value={this.state.nameInput}
        />
        <Select
          onChange={e => this.update(e.target.value, "color")}
          options={this.state.colors}
          value={this.state.colorSelect}
        />
        <Select
          onChange={e => this.update(e.target.value, "figure")}
          options={this.state.figures}
          value={this.state.figureSelect}
        />
      </div>
    );
  }
}

export default Inspector;
