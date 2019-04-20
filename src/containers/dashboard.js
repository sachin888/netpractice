import React, { Component } from 'react';
import { Header } from '../components/header';
import { Chart } from "react-charts";

// Style
import '../assets/styles/dashboard.scss';
import '../assets/styles/dashboardExtra.scss';

const APPOINTMENT = [ 'John', 'Smith', 'Lee', 'Kay' ]

const TODO = [
  { date: '07/09/2015', name: 'Mr. John Smith' },
  { date: '07/09/2015', name: 'Mr. John Smith' },
  { date: '07/09/2015', name: 'Mr. John Smith' },
  { date: '07/09/2015', name: 'Mr. John Smith' },
  { date: '07/09/2015', name: 'Mr. John Smith' },
  { date: '07/09/2015', name: 'Mr. John Smith' },
  { date: '07/09/2015', name: 'Mr. John Smith' },
  { date: '07/09/2015', name: 'Mr. John Smith' }
]

class DashboardScreen extends Component {

  state = {
    perfChart: 'area',
    rejChart : 'bar'
  }

  render() {
    const { perfChart, rejChart } = this.state;

    return (
      <div id="DashboardScreen" className="sidebar-mini">
        <div>
          <Header />
          <div className="collapse navbar-collapse hidden-lg hidden-md hidden-sm toggleMenuDiv">
            <ul className="nav navbar-nav hidden-lg hidden-md hidden-sm sidebar-menu toggleMenu">{/* Here */}
              <li className="active"><a href="/">
                <i className="fa fa-tachometer" /> <span>Dashboard</span>
              </a>
              </li>
              <li>
                <a href="/login">
                  <i className="fa fa-calendar-check-o" /> <span>Login Screen</span>
                </a>
              </li>
              <li>
                <a href="/forgot">
                  <i className="fa fa-calendar-check-o" /> <span>Forgot Password Screen</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <aside className="main-sidebar">
              <section className="sidebar">
                <ul className="sidebar-menu">
                  <li className="hidden-xs">
                    <a href="/" className="sidebar-toggle" data-toggle="offcanvas" role="button" style={{ padding: 0, border: 'none' }}>
                      <span className="sr-only">Toggle navigation</span>
                      <img src="images/web/hamburger_grey_d.png" className="btnSidebarHandle" alt="" style={{ top: '30%' }} />
                    </a>
                  </li>
                  <li className="header"><span>Overview</span></li>
                  <li className="active">
                    <a href="index.html">
                      <i className="fa fa-tachometer mainmenu_icon" /> <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="/login">
                      <i className="fa fa-calendar-check-o  mainmenu_icon" /> <span>Login</span>
                    </a>
                  </li>
                  <li>
                    <a href="/forgot">
                      <i className="fa fa-calendar-check-o  mainmenu_icon" /> <span>Forgot Password</span>
                    </a>
                  </li>
                </ul>
              </section>
            </aside>
            <div className="content-wrapper">
              <section className="content-header row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 lblContentDiv">
                  <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12 divMainLbl">
                    <label className="lblCurrentScreen">
                      <i className="fa fa-arrow-circle-o-right" /> Home - <span style={{ fontWeight: 'normal', fontSize: '17px' }}>Dashboard</span>
                    </label>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
                    <div className="row">
                      <button type="button" className="btn btn-info pull-right">
                        <span className="glyphicon fa fa-calendar" style={{ color: 'white' }} /> Add Appointment
              </button>
                      <button type="button" className="btn btn-appoint gap_btn pull-right">
                        <span className="glyphicon fa fa-user-plus" style={{ color: 'white' }} /> Add New Patient
              </button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="content">
                <div className="row">
                  <div className="col-md-4 firstCardDiv">
                    <div title="Today's New Patients" className="tile-box tile-box-shortcut new-patient">
                      <span className="bs-badge badge-absolute">5</span>
                      <div className="tile-header">
                        TODAY'S NEW PATIENTS
              </div>
                      <div className="tile-content-wrapper">
                        <i className="glyph-icon fa fa-wheelchair" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 secondCardDiv">
                    <div title="Total Transactions" className="tile-box tile-box-shortcut total_trans">
                      <span className="bs-badge badge-absolute">5</span>
                      <div className="tile-header">
                        TOTAL TRANSACTIONS
              </div>
                      <div className="tile-content-wrapper">
                        <i className="glyph-icon fa fa-dollar" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 thirdCardDiv">
                    <div title="Total Waiting Rooms" className="tile-box tile-box-shortcut waiting_room">
                      <span className="bs-badge badge-absolute">5</span>
                      <div className="tile-header">
                        TOTAL WAITING ROOMS
              </div>
                      <div className="tile-content-wrapper">
                        <i className="glyph-icon fa fa-hotel" />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ height: '20px' }}>&nbsp;</div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 connectedSortable">
                    <div className="content-box">
                      <div className="nav-tabs-custom">
                        <h3 className="content-box-header bg-default">
                          <i className="glyph-icon fa fa-pie-chart" />
                          <span className="head_text">PERFORMANCE</span>
                          <span className="header-buttons-separator">
                            <select className="custom-select icon-separator perfor_select">
                              <option>-- Select --</option>
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                              <option>Option 4</option>
                            </select>
                            <button
                              type="button"
                              className="btn btnGraph1 icon-separator remove-button"
                              data-animation="flipOutX"
                              onClick={() => this.setState({ perfChart: 'bar' })}
                            >
                              <i className="fa fa-bar-chart" />
                            </button>
                            <button 
                              type="button" 
                              className="btn btnMenu1 icon-separator refresh-button"
                              data-style="dark"
                              data-theme="bg-white"
                              data-opacity={40}
                              onClick={() => this.setState({ perfChart: 'area' })}
                            >
                              <i className="fa fa-area-chart" />
                            </button>
                          </span>
                        </h3>
                        <div className="tab-content no-padding">
                          <div id="container1"
                            style={{
                              height: "400px"
                            }}
                          >
                            <Chart
                              data={[
                                {
                                  label: "Series 1",
                                  data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                                }
                              ]}
                              series={{ type: perfChart }}
                              axes={[
                                { primary: true, type: (perfChart === 'bar') ? "ordinal" : 'linear', position: "bottom" },
                                { type: "linear", position: "left" }
                              ]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 connectedSortable">
                    <div className="content-box">
                      <div className="nav-tabs-custom">
                        <h3 className="content-box-header bg-default">
                          <i className="glyph-icon fa fa-calendar-times-o" />
                          <span className="head_text">APPOINTMENT</span>
                          <span className="header-buttons-separator" style={{ padding: '7px' }}>
                            <button type="button" className="btn btn-info gap_btn pull-right" data-animation="flipOutX">
                              <i className="fa fa-calendar" /> Add Appointment
                    </button>
                          </span>
                        </h3>
                        <div className="accordianDiv">
                          <div className="panel-group" id="accordion">
                            {APPOINTMENT.map((a, i) => {
                              return(
                                <div key={a} className="panel-default appointmentDiv">
                                  <label style={{ marginBottom: '0px' }} className="appLbl1 appTimeCollapsed">{i+7}:00 AM</label>
                                  <label style={{ marginBottom: '0px' }} className="appDetails">Appointment with Mr. {a}</label>
                                  <button type="button" className="btn btn1 btn-default btn-sm listBtn pull-right plus_icon" data-toggle="collapse" data-target={`#collapse${i}`}>
                                    <span className="glyphicon glyphicon glyphicon-plus" />
                                  </button>
                                  <div id={`collapse${i}`} className="panel-collapse collapse">
                                    <div className="panel-default" style={{ marginTop: '-6px' }}>
                                      <label style={{ color: '#44b6ae', marginBottom: '0px' }} className="appLbl1">{i+7}:00 AM</label>
                                      <label style={{ marginBottom: '0px' }} className="appDownDetails inner_detail">Regular Checkup {i+7}:00 AM - {i+8}:00 AM</label>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 connectedSortable">
                    <div className="content-box">
                      <div className="nav-tabs-custom">
                        <h3 className="content-box-header bg-default">
                          <i className="glyph-icon fa fa-money" />
                          <span className="head_text">DAILY TRANSACTION</span>
                          <span className="header-buttons-separator">
                            <select className="custom-select icon-separator perfor_select">
                              <option>Rejected Claims</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                              <option>Option 4</option>
                            </select>
                            <button
                              type="button"
                              className="btn btnGraph2 icon-separator remove-button"
                              data-animation="flipOutX"
                              onClick={() => this.setState({ rejChart: 'bar' })}
                            >
                              <i className="fa fa-bar-chart" />
                            </button>
                            <button
                              type="button"
                              className="btn btnMenu2 icon-separator refresh-button"
                              data-style="dark"
                              data-theme="bg-white"
                              data-opacity={40}
                              onClick={() => this.setState({ rejChart: 'area' })}
                            >
                              <i className="fa fa-area-chart" />
                            </button>
                          </span>
                        </h3>
                        <div className="tab-content no-padding divChart">
                          <div id="container2"
                            style={{
                              height: "400px"
                            }}
                          >
                            <Chart
                              data={[
                                {
                                  label: "Series 1",
                                  data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                                }
                              ]}
                              series={{ type: rejChart }}
                              axes={[
                                { primary: true, type: (rejChart === 'bar') ? "ordinal" : 'linear', position: "bottom" },
                                { type: "linear", position: "left" }
                              ]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 connectedSortable">
                    <div className="content-box">
                      <div className="nav-tabs-custom">
                        <h3 className="content-box-header bg-default">
                          <i className="glyph-icon fa fa-tasks" />
                          <span className="head_text">TO DO LIST</span>
                          <span className="header-buttons-separator" style={{ padding: '10px' }}>
                            <div className="bool-slider true">
                              <div className="inset">
                                <div className="control" />
                              </div>
                            </div>
                          </span>
                        </h3>
                        <div className="container-fluid" style={{ padding: '15px' }}>
                          <div className="table-responsive todolist-table">
                            <table className="table table-striped table-hover">
                              <thead className="gridHeader">
                                <tr>
                                  <th><span className="glyphicon glyphicon-calendar" style={{ color: 'black' }} />&nbsp;Date</th>
                                  <th><span className="glyphicon  glyphicon-user" style={{ color: 'black' }} />&nbsp;Name</th>
                                  <th><span className="glyphicon glyphicon-usd" style={{ color: 'black' }} />&nbsp;Amount</th>
                                  <th><span className="glyphicon glyphicon-usd" style={{ color: 'black' }} />&nbsp;Balance</th>
                                </tr>
                              </thead>
                              <tbody>
                                {TODO.map((a,i) => {
                                  return (
                                    <tr key={a.name+i}>
                                      <td>{a.date}</td>
                                      <td>{a.name}</td>
                                      <td>{'309.00'}</td>
                                      <td>{'309.00'}</td>
                                    </tr>
                                  );
                                })}
                                <tr className="lastRow">
                                  <td colSpan={3}>Total Amount Rejected Claims</td>
                                  <td>65,859.00</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="last_line">
                    <p><span>Copyright © 2016 </span> All rights reserved.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardScreen;