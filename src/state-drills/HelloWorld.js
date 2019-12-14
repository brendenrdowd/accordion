import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { who: "world" };
  }

  updateWho(phrase) {
    this.setState({ who: phrase });
  }

  render() {
    return (
      <main>
        <p>Hello {this.state.who}</p>
        <button onClick={() => this.updateWho("World")}>World</button>
        <button onClick={() => this.updateWho("Friend")}>Friend</button>
        <button onClick={() => this.updateWho("React")}>React</button>
      </main>
    );
  }
}

export default HelloWorld;
