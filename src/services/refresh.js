import React, { Component } from 'react';
import Autho from '../utils/requestMiddleware';
import {withRouter} from 'react-router'

export default function withAuth(Authcmp) {
    const Auth = new Autho();

     class AuthWrapped extends Component {
        state = {
            loaded: false
          };
        componentWillMount() {
            if (!Auth.loggedIn()) {
                console.log('hello')
                this.props.history.push('/auth');
            }else{
                this.setState({
                    loaded: true
                  });
            }
        }

        render() {
            if (this.state.loaded == true) {
                    return (
                        /* component that is currently being wrapper(App.js) */
                        <Authcmp history={this.props.history}  />
                    );
            } else {
                return null;
            }
        }
    };

    return withRouter(AuthWrapped)
}
