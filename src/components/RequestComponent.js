import React from "react";

class RequestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    };
  }

  componentDidMount() {
    fetch("https://api.agify.io/?name=ana")
    .then((res) => res.json())
    .then((json) => {
        this.setState({
          data: json.age
        });
    })

  }

  render() {
    return (<p>{this.state.data}</p>)
    }
  }

export default RequestComponent;
