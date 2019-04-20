import React from 'react';
import { Select } from '../select';

// Style
import './index.scss';

const MESSAGE = [
  { bg: 'danger', icon: 'bullhorn', text: 'This is an error notification.', time: 'few sec ago', font: ''},
  { bg: 'warning', icon: 'users', text: 'This is a warning notification.', time: '15 mins ago', font: ''},
  { bg: 'green', icon: 'sitemap', text: 'A success message example.', time: '2 hours ago', font: 'font-green'},
  { bg: 'azure', icon: 'random', text: 'This is an error notification.', time: 'a few sec ago', font: ''},
  { bg: 'warning', icon: 'ticket', text: 'This is a warning notification.', time: '15 mins ago', font: ''},
  { bg: 'blue', icon: 'user', text: 'Alternate notification styling.', time: '2 hours ago', font: 'font-blue'},
]

export const Header = () => {

    return (
        <header className="mainHeader">
          <div className="container-fluid row">
            <div className=" col-md-7 col-xs-12">
              <div className="row">
                <div className="net-logo col-md-3 col-xs-12">
                  <a href="/">
                    <img src="images/net-logo.png" className="img-responsive" alt="" />
                  </a>
                </div>
                <div className="search-box  col-md-7 col-xs-12">
                  <form action="#" method="get" className="header-search " style={{ border: '1px solid #03aeca' }}>
                    <div className="input-group">
                      <input type="text" name="q" className="form-control" placeholder="Search Here" style={{ background: '#027386', border: 'none', color: '#fff', opacity: '0.5' }} />
                      <span className="input-group-btn">
                        <button type="submit" name="search" id="search-btn" className="btn btn-flat" style={{ background: '#0a9eb7', color: '#fff' }}><i className="fa fa-search" /></button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className=" col-md-5 col-xs-12 navBottomRow">
              <div className="row">
                <div className="search_tab">
                  <form action="#" method="get" className="col-lg-6 col-md-6 col-sm-5 col-xs-5">
                    <Select />
                  </form>
                  <ul className="list-inline pull-right col-lg-6 col-md-6 col-sm-7 col-xs-7" style={{ marginTop: '0' }}>
                    <li className="dropdown dropdown-list notifications-menu">
                      <a href="/" data-toggle="dropdown" style={{ borderRadius: '4px', border: '2px solid rgba(241, 196, 196, 0)', borderImage: 'none', width: '36px', height: '36px', textAlign: 'center', lineHeight: '34px', display: 'block', position: 'relative', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                        <span className="small-badge bg-yellow" />
                        <i className="fa fa-bullhorn" style={{ position: 'relative' }} />
                      </a>
                      <span className="top-arrow" />
                      <div className="dropdown-menu">
                        <div className="popover-title display-block clearfix pad10a">Notifications
                  <a title="View more options" className="text-transform-cap font-primary font-normal btn-link float-right" href="/">More options... </a>
                        </div>
                        <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '250px' }}><div className="scrollable-content scrollable-slim-box" style={{ overflow: 'hidden', width: 'auto', height: '250px' }}>
                          <ul className="no-border notifications-box">
                            {MESSAGE.map((m, i) => {
                              return(
                                <li key={m.time+i}>
                                  <span className={`bg-${m.bg} icon-notification glyph-icon fa fa-${m.icon}`} />
                                  <span className={`notification-text ${m.font}`}>{m.text}</span>
                                  <div className="notification-time">{m.time}<span className="glyph-icon fa fa-clock-o" /></div>
                                </li>
                              );
                            })}
                          </ul>
                        </div><div className="slimScrollBar" style={{ background: 'rgb(141, 160, 170)', width: '6px', position: 'absolute', top: '0px', opacity: '0.4', display: 'none', borderRadius: '7px', zIndex: 99, right: '1px', height: '216.263px' }} /><div className="slimScrollRail" style={{ width: '6px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: 90, right: '1px' }} /></div>
                        <div className="pad10a button-pane button-pane-alt text-center">
                          <a title="View all notifications" className="btn btn-primary" href="/">View all notifications</a>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown user user-menu notifications-menu">
                      <a href="/" className="dropdown-toggle" data-toggle="dropdown" style={{ borderRadius: '4px', border: '2px solid rgba(241, 196, 196, 0)', borderImage: 'none', width: '36px', height: '36px', textAlign: 'center', lineHeight: '34px', display: 'block', position: 'relative', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                        <span className="small-badge bg-azure" />
                        <i className="glyph-icon fa fa-user" />
                      </a>
                      <span className="top-arrow" />
                      <div className="dropdown-menu user-drop-menu float-left" role="menu" aria-labelledby="menu1">
                        <div className="box-sm">
                          <div className="login-box clearfix">
                            <div className="user-img">
                              <a href="/" className="change-img">Change photo</a>
                              <img src="images/gravatar.jpg" alt=""/>
                            </div>
                            <div className="user-info">
                              <span>
                                Thomas Barnes
                                <i>UX/UI developer</i>
                              </span>
                              <a href="/" title="Edit profile">Edit profile</a>&nbsp;
                              <a href="/" title="View notifications">View notifications</a>
                            </div>
                          </div>
                          <div className="divider" />
                          <ul className="reset-ul mrg5B">
                            <li>
                              <a href="/">
                                <i className="glyph-icon float-right fa fa-caret-right" />
                                View login page example
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i className="glyph-icon float-right fa fa-caret-right" />
                                View lockscreen example
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <i className="glyph-icon float-right fa fa-caret-right" />
                                View account details
                              </a>
                            </li>
                          </ul>
                          <div className="pad5A button-pane button-pane-alt text-center" style={{ borderTop: '1px solid #efeeee' }}>
                            <a href="/Login" className="btn display-block font-normal btn-danger">
                              <i className="glyph-icon fa fa-power-off" /> Login
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="/" data-toggle="control-sidebar">
                        <button className="btn btn-default hidden-lg hidden-md hidden-sm" data-toggle="collapse" data-target=".navbar-collapse" type="button">
                          <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" />
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
    );
}