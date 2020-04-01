import React from 'react';
import Navbar from '../components/Navbar';

export default function Layout(props){
    // const childen = props.children;
    return (
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
    )
}