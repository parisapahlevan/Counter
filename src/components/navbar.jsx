import React, { Component } from 'react';

class App   extends Component {
    render() { 
        return ( <nav className="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
            Navbar{" "}
             <span className="badge.badge-pill badge.secondary">
             {this.props.totalCounters}
             </span>
            </a>
      </nav> );
    }
}
 
export default App;