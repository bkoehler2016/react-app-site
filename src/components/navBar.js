import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        return (
            <div>
                <h1>Simple React</h1>
                <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">

          </div>
            </div>
        )
    }
}
export default NavBar;