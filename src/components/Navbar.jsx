import { Component } from "react";
import { Link } from "react-router-dom";
import "../css/index.scss";
import { MenuItems } from "./MenuItem";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar__logo">Trippy</h1>
        <div className="navbar__icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul
          className={
            this.state.clicked
              ? "navbar__menu navbar__menu__active"
              : "navbar__menu"
          }
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  <i className={item.icon}></i> {item.title}
                </a>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
