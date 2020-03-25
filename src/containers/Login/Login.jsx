import React,{Component} from "react";
import loginImg from "./logo.svg"
import "./style.scss"

export class Login extends Component{
    //Remember email address after refreshing the page
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          email: window.localStorage.getItem("form-email") || "",
          rememberMe: false,
          formState: "UNSUBMITTED"
        };
      }
    
      handleSubmit(e) {
        e.preventDefault();
        if (this.state.rememberMe) {
          window.localStorage.setItem("form-email", this.state.email);
        } else {
          window.localStorage.removeItem("form-email");
        }
        this.setState({ formState: "SUBMITTED" });
      }
    
      render() {
        return (
          <div className="login">
              <div className="border">
            <img className = "image" src={loginImg} />
             <form onSubmit={this.handleSubmit}>
            <div><h1>Example for login page</h1></div>
            <div><h4>Getting started with Green.</h4></div>
              <div className="row">
                <label htmlFor="email">Email Address: </label>
              </div>
              <input
                  id="email"
                  onChange={e => this.setState({ email: e.target.value })}
                  value={this.state.email} />
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="remember"
                  onChange={e => this.setState({ rememberMe: e.target.checked })}
                  checked={this.state.rememberMe}
                />
                <label htmlFor="remember">Remember this device</label>
              </div>
              <input type="submit" className="signin" value="Sign In"/>
            </form>
            {this.state.formState === "SUBMITTED" }
          </div>
          </div>
        );
      }
    }
    