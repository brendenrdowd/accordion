import React from "react";
import ReactDOM from "react-dom";

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chamber: null, spinningTheChamber: false };
    this.clickHandler = this.clickHandler.bind(this);
  }

  callBack = () => {
    let randomNum = Math.ceil(Math.random() * 8);
    this.setState({ chamber: randomNum, spinningTheChamber: false });
  };

  clickHandler() {
    this.setState({ spinningTheChamber: true });
    let timeout = setTimeout(this.callBack, 2000);
  }

  componentDidUpdate() {}
  render() {
    let phrase = "";
    console.log(this.state.spinningTheChamber);
    if (this.state.spinningTheChamber == true) {
      phrase = "spinning the chamber and pulling the trigger!...";
    } else if (this.state.chamber === this.props.bulletInChamber) {
      phrase = "BANG!!!!";
    } else {
      phrase = "You're safe";
    }
    return (
      <main>
        <p>{phrase}</p>
        <button onClick={() => this.clickHandler()}>Pull the trigger!</button>
      </main>
    );
  }
}

export default RouletteGun;
