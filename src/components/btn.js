import React from "react";

class Btn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      make: "Yamaha",

      model: "R15",

      color: "blue",
    };
  }

  changeBikeColor = () => {
    this.setState({ color: "black" });
  };

  render() {
    return (
      <div>
        <p>
          It is a {this.state.color}
          {this.state.model}.
        </p>

        <button type="button" onClick={this.changeBikeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default Btn;
