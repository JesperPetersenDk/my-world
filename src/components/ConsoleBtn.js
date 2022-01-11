import React from "react";

class ConsoleBtn extends React.Component {

    handleClick = () => {
        console.log("Helllo world");
    }


    render() {
        return  (
            <button onClick={this.handleClick}>
                Click
            </button>
        )
    }
}

export default ConsoleBtn;