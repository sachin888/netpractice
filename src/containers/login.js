import React, { Component } from 'react';

import { Input } from '../components/input';

// Style
import '../assets/styles/login.scss';

class LoginScreen extends Component {

  state = {
    email: '',
    password: '',
    error: ''
  }


  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    const { email, password, error } = this.state;

    return (
      <div id="LoginScreen" className="content-wrapper login-wrap">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 main-content login_page_middle">
          <div className="row">
            <div className="col-md-4 center-margin">
              <div className="content-box wow bounceInDown modal-content animated" style={{ visibility: 'visible', animationName: 'bounceInDown' }}>
                  <h3 className="content-box-header content-box-header-alt bg-default"> 
                    <div className="row header-row">
                      <div className="col-md-9">
                        <span className="header-wrapper">
                          {/* <img src="images/login-logo.png" alt="logo" className="login_logo_img" /> */}
                          Login
                        </span>
                      </div>
                      <div className="col-md-3">
                        <span className="header-buttons">
                          <a href="/login" className="btn btn-sm btn-primary sign_up_btn" title>Sign Up</a>
                        </span>
                      </div>
                    </div>
                  </h3>
                  <div className="content-box-wrapper">
                    <React.Fragment>
                      <Input label='email' type='email' icon='at' value={email} onChange={this.onChange} />
                      <Input label='password' type='password' icon='key' value={password} error={error} onChange={this.onChange} />
                      <div className="clearfix">&nbsp;</div>
                      <div className="form-group forget_pass login-box">
                        <a href="/forgot" title="Recover password">Forgot Your Password?</a>
                      </div>
                      <button 
                        className="btn btn-success btn-block"
                        onClick={() => (email && password) ? this.props.history.push('/') : this.setState({ error: (email && password) ? '' : 'Please enter the correct credentials' })}
                      >Login</button>
                    </React.Fragment>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginScreen;