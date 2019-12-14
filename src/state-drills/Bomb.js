import React from "react";
import ReactDOM from "react-dom";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.interval = setInterval(this.callBack, 1000);
  }

  callBack = () => {
    let newCount = this.state.count + 1;
    this.setState({ count: newCount });
  };

  render() {
    console.log(this.state.count);
    let word = "";
    if (this.state.count % 2 === 0) {
      word = "tick";
    } else if (this.state.count % 2 !== 0) {
      word = "tock";
    }
    if (this.state.count >= 8) {
      word = "BOOM!!!";
      clearInterval(this.interval);
    }
    return (
      <main>
        <p>{word}</p>
      </main>
    );
  }
}

export default Bomb;
