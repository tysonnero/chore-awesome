import React from 'react';
import { Link } from 'react-router';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';
import RaisedButton from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';

import { Style } from 'radium'
import Normalize from '../styles/Normalize'

const muiTheme = getMuiTheme({}, {
    userAgent: 'all'
});

class AppComponent extends React.Component {
    render() {
        return (

            <div>
                <Style rules={Normalize} />
                <AppBar title="Chore Awesum" />
                <h2>Welcome to my App</h2>
                <RaisedButton label="Default" />
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
                { this.props.children }
            </div>
        );
    }
}

export default themeDecorator(muiTheme)(AppComponent)