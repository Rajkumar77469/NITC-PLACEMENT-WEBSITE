import React from "react";
import { NavLink, Link } from "react-router-dom";
class SideDrawer extends React.Component {
  state = {
    showDropDownAcademics: false,
    showDropdownStatistics: false
  };
  handleDropDownAcademics = () => {
    this.setState(cs => ({
      showDropDownAcademics: !cs.showDropDownAcademics,
      showDropdownStatistics: false
    }));
  };
  render() {
    let drawerClass = "side-drawer";
    if (this.props.show) drawerClass = "side-drawer open";
    return (
      <div className={drawerClass}>
        <div className="side">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <span onClick={this.props.click} className="sidebar-logo-text">
              NITC Placement Cell
            </span>
          </Link>
          <span className="cross-btn" onClick={this.props.click}>
            <i className="fas fa-times fa-2x" />
          </span>
        </div>
        <ul>
          <li onClick={this.props.click}>
            <NavLink to="/about-us" exact="true" className="activeclass">
              About Us
            </NavLink>
          </li>
          <li className="activeclass" onClick={this.handleDropDownAcademics}>
            Academics <i className="fa fa-caret-down" />
          </li>
          {this.state.showDropDownAcademics ? (
            <ul className="drp-down">
              <li
                onClick={() => this.props.click(this.handleDropDownAcademics)}
                className="activeclass"
              >
                <NavLink to="/courses" exact="true" className="activeclass">
                  Courses
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDownAcademics)}
                className="activeclass"
              >
                <NavLink to="/demographics" exact="true"className="activeclass">
                  Demographics
                </NavLink>
              </li>
            </ul>
          ) : null}

          <li onClick={this.props.click}>
          <NavLink to="/placement-stats" exact="true" className="activeclass">
          Statistics
          </NavLink>
        </li>
          <li onClick={this.props.click}>
            <NavLink to="/procedure-and-policies" exact="true" className="activeclass">
              Procedure
            </NavLink>
          </li>
          <li onClick={this.props.click}>
            <NavLink to="/contact-us" exact="true" className="activeclass">
              Contact Us
            </NavLink>
          </li>
          <li onClick={this.props.click}>
          <NavLink to="/our-recruiters" exact className="activeclass">
            Our Recruiters
          </NavLink>
        </li>
          <li onClick={this.props.click}>
          <NavLink to="/regsiter" exact="true" className="activeclass">
            Regsiter
          </NavLink>
        </li>
        </ul>
      </div>
    );
  }
}

export default SideDrawer