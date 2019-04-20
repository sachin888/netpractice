import React, { Component } from 'react';

import { Input } from '../components/input';

// Style
import '../assets/styles/forgotPassword.scss';

class ForgotPasswordScreen extends Component {

  state = {
    sent: false,
    email: '',
    error: ''
  }


  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    const { sent, email, error } = this.state;

    return (
      <div id="ForgotPasswordScreen" className="content-wrapper login-wrap">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 main-content login_page_middle">
          <div className="row">
            <div className="col-md-4 center-margin">
              <div className="content-box wow bounceInDown modal-content animated" style={{ visibility: 'visible', animationName: 'bounceInDown' }}>
                  <h3 className="content-box-header content-box-header-alt bg-default"> 
                    <div className="row header-row">
                      <div className="col-md-9">
                        <span className="header-wrapper">
                          {/* <img src="images/login-logo.png" alt="logo" className="login_logo_img" /> */}
                          Forgot password
                        </span>
                      </div>
                      <div className="col-md-3">
                        <span className="header-buttons">
                          <a href="/login" className="btn btn-sm btn-primary sign_up_btn" title>Login</a>
                        </span>
                      </div>
                    </div>
                  </h3>
                  <div className="content-box-wrapper">
                    {!sent &&
                      <React.Fragment>
                          <Input label='email' type='email' icon='at' value={email} error={error} onChange={this.onChange} />
                          <div className="clearfix">&nbsp;</div>
                          <button 
                            className="btn btn-success btn-block"
                            onClick={() => this.setState({ sent: (email), error: (email) ? '' : 'Please enter an email' })}
                          >Send email</button>
                      </React.Fragment>
                    }
                    {sent &&
                      <div className="login-success">
                        <h4>Email has been send to {email}</h4>
                      </div>
                    }
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordScreen;