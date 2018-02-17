import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  onChange = e => {
    var state = this.state;
    state[e.target.name] = e.target.value;

    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    //handle form processing here....
  };

  render() {
    var { name } = this.state;

    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={this.onChange}
              autoFocus
            />
            <span className="help-block" />
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            {this.props.inputText}
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
