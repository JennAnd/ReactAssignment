import React, { Component } from "react";
import Button from "../Button";
import "./style.css";

class Aztro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {},
    };
  }
  const zodiac = "aries";
  componentDidMount() {
    const URL = `https://aztro.sameerkumar.website/?sign=cancer&day=yesterday`;
    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ json });
      });
  }

  render() {
    return (
      <div className="astroBox">
        <img src={`/images/${zodiac}.jpg`} />
        Current Date: {this.state.json.current_date} <br />
        Compatibility: {this.state.json.compatibility} <br />
        Lucky Number: {this.state.json.lucky_number} <br />
        Lucky Time: {this.state.json.lucky_time} <br />
        Color: {this.state.json.color} <br />
        Date Range: {this.state.json.date_range} <br />
        Mood: {this.state.json.mood} <br />
        Description: {this.state.json.description} <br />
      </div>
    );
  }
}

export default Aztro;
