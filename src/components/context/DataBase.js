import React, { Component, createContext } from "react";

export const DataBaseContext = createContext();

class DataBaseProvider extends Component {
  state = {
    user: false,
  };

  loginUser = (email, password) => {
    console.log(email, password);
    let user = true;
    this.setState({ user });
  };

  render() {
    return (
      <DataBaseContext.Provider
        value={{
          ...this.state,
          user: this.state.user,
          loginUser: this.loginUser,
        }}
      >
        {this.props.children}
      </DataBaseContext.Provider>
    );
  }
}

export default DataBaseProvider;
