import React from 'react';
import {Navbar, NavItem} from 'react-materialize';


class Nav extends React.Component {
    render(){
        return <Navbar brand="audishun" right>
          <NavItem href="#">Log-In</NavItem>
          <NavItem href="#">Post Audition</NavItem>
        </Navbar>;
    }
}

export default Nav;