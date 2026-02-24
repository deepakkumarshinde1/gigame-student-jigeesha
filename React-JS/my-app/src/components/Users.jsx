import axios from "axios";
import { Component, useEffect, useState } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      counter: this.props.counter || 0,
      intervalId: null,
    };
  }

  getUsers = async () => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    this.setState((state) => {
      return { ...state, users: data };
    });
  };

  removeElement = (index) => {
    let newUser = JSON.parse(JSON.stringify(this.state.users)); // deep clone
    newUser.splice(index, 1);
    this.setState((state) => {
      return { ...state, users: newUser };
    });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.counter !== state.counter) {
      return { ...state, counter: props.counter };
    }
  }
  componentDidMount() {
    this.getUsers();
    let intervalId = setInterval(() => {
      console.log("interval");
    }, 1000);
    this.setState((state) => {
      return { ...state, intervalId: intervalId };
    });
  }

  componentWillUnmount() {
    // unmounting
    clearInterval(this.state.intervalId);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("counter");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // deep compare
    // logic => if counter is even => update, else => do not update
    return true;
  }

  componentDidCatch(error, info) {
    // log the error to an error reporting service
  }
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState((state) => {
              return { ...state, counter: this.state.counter + 1 };
            })
          }
        >
          INC {this.state.counter}
        </button>
        {this.state.users.map((value, index) => {
          return (
            <p key={value.id}>
              {value.name}{" "}
              <button onClick={() => this.removeElement(index)}>delete</button>
            </p>
          );
        })}
      </div>
    );
  }
}

export default Users;
