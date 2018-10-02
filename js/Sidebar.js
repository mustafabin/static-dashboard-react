import React, { Component } from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>Widget</li>
          <li>Reviews</li>
          <li>Customers</li>
          <li>Online Analysis</li>
          <li>Settings</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
