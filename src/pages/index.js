import React, { Component } from "react";
import { Link } from "gatsby";
import "../components/LoginComponent.css";
import Layout from "../components/layout";

class IndexPage extends Component {
  state = {
    inputVal: "",
    isEmpty: false
  };
  updateVal = e => {
    this.setState({ inputVal: e.target.value, isEmpty: true });
  };
  verifyInput = e => {
    if (this.state.inputVal == "") {
      this.setState({ isEmpty: false });
      alert("please enter a valid userid");
      e.preventDefault();
    }
  };
  render() {
    return (
      <Layout>
        <div className="limiter">
          <div className="container">
            <div className="wrapper">
              <div className="form-title"> FOOD RECOMMENDER SYSTEM </div>
              <form className="form">
                <div className="inputBox" id="txt1">
                  <input
                    type="text"
                    onChange={e => this.updateVal(e)}
                    className="input1"
                    placeholder="UserId"
                  />
                  <span className="line" />
                </div>
                <div class="loginContainer">
                  <Link
                    onClick={e => this.verifyInput(e)}
                    to="/HomePage"
                    className="loginButton"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
