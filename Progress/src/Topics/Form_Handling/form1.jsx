import React, { Component } from "react";
import "./style.css";
export class form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      dept: "",
      year: "",
      college: "",
    };
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleDept = (event) => {
    this.setState({
      dept: event.target.value,
    });
  };
  handleYear = (event) => {
    this.setState({
      year: event.target.value,
    });
  };
  handleCollege = (event) => {
    this.setState({
      college: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const name = this.state.name;
    const dept = this.state.dept;
    const year = this.state.year;
    const college = this.state.college;
    document.getElementById("name").innerText = name;
    document.getElementById("dept").innerText = dept;
    document.getElementById("year").innerText = year;
    document.getElementById("college").innerText = college;
    document.getElementById("result").style.visibility = "visible";
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name : </label>
          <input value={this.state.name} onChange={this.handleName}></input>
          <br></br> <label>Dept : </label>
          <input value={this.state.dept} onChange={this.handleDept}></input>
          <br></br> <label>Year : </label>
          <input value={this.state.year} onChange={this.handleYear}></input>
          <br></br> <label>College : </label>
          <input
            value={this.state.college}
            onChange={this.handleCollege}
          ></input>
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
        <div id="result">
          <h1>Student Info :</h1>
          <h2>
            Name : <span id="name"></span>
          </h2>
          <h2>
            Dept : <span id="dept"></span>
          </h2>
          <h2>
            Year : <span id="year"></span>
          </h2>
          <h2>
            College : <span id="college"></span>
          </h2>
        </div>
      </div>
    );
  }
}

export default form1;
