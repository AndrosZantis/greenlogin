
import React,{Component} from "react";
import "./App.scss";
import { Login } from "./containers/Login/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  render() {
    const { isLogginActive } = this.state;
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            
          </div>
        </div>
      </div>
    );
  }
}
export default App;