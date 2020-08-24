import React from 'react';
 
//constructor => Render => updates the dom => 1st lifecycle method
class Lifecycles extends React.Component {
    constructor() { //declare/initialize our state
        super(); //method that gives class component access to lifecycle method
        console.log('constructor!');
    }

    //component being put on the DOM for the first time
    componentDidMount() {
        console.log('componentDidMount!');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate!');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate!', nextProps);
        return true;
    }

    render() { //renders what to be displayed on the html 
        console.log('render!');
        return(
            <div className='lifecyles'>
                <h3>LIFECYCLE COMPONENT</h3>
                {this.props.text}
            </div>
        );
    }
}