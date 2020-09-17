import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import axios from 'axios';
import serverUrl from '../../config';
import './Home.css';
import { history } from '../../App';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }
  //handle logout to destroy the cookie
  handleLogout = () => {
    var data = {
      token: cookie.load('cookie'),
    };
    axios.post(serverUrl + 'logout', data).then((response) => {});
    cookie.remove('cookie', { path: '/' });
    cookie.remove('userrole', { path: '/' });
  };
  render() {
    let redirectVar = null;
    if (!cookie.load('cookie')) {
      // console.log('cookie not found');
      redirectVar = <Redirect to="/login" />;
    }
    return (
      <div>
        <div
          className="y-container homepage-hero"
          style={{
            backgroundImage:
              'url(https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/3d49d178c52c/assets/img/home/hero_photos/gHNcNahbSwCaGQGT3QYdPQ.jpg)',
          }}
        >
          <div className="y-container_content">
            <ul className="offscreen">
              <li>
                <a href="#header_find_form" rel="nofollow">
                  {' '}
                  Skip to Search Form
                </a>
              </li>
              <li>
                <a href="#header-nav" rel="nofollow">
                  {' '}
                  Skip to Search Form
                </a>
              </li>
              <li>
                <a href="#page-content" rel="nofollow">
                  {' '}
                  Skip to Page Content
                </a>
              </li>
            </ul>
            <div className="hero-header js-main-header">
              <div className=" arrange arrange--18">
                <div className="arrange_unit arrange_unit--fill">
                  <div className="hero-header_nav hero-header_nav--main nowrap">
                    <ul className="header-nav">
                      <li className="header-nav_item js-analytics-click">
                        <Link className="header-nav_link" to="/review">
                          Write a Review
                        </Link>
                      </li>
                      <li className="header-nav_item js-analytics-click">
                        <Link className="header-nav_link" to="/events">
                          Events
                        </Link>
                      </li>
                      <li className="header-nav_item js-analytics-click">
                        <Link className="header-nav_link" to="/#">
                          Talk
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="arrange_unit nowrap">
                  <ul className="header-nav hero-header_nav main-header_account">
                    <li
                      onClick={() => {
                        history.push('/login');
                      }}
                      className="header-nav_item u-space-r2"
                    >
                      <Link
                        className="header-nav_link header-nav_link--log-in js-analytics-click"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="header-nav_item u-space-r0 js-analytics-click">
                      <Link className="ybtn ybtn--primary header-nav_button nowrap" to="/create">
                        Signup
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="homepage-hero_inner">
              <div className="u-text-centered">
                <h1 className="homepage-hero_logo">
                  <Link to="/home">Yelp</Link>
                </h1>
              </div>
              <form
                method="get"
                action="/search"
                id="header_find_form"
                className="business-search-form main-search yform u-space-b0 js-business-search-form"
              >
                <div className="arrange arrange--equal arrange--stack-small">
                  <div className="arrange_unit">
                    <div className="main-search_suggestions-field search-field-container find-decorator">
                      <label
                        className="pseudo-input business-search-form_input business-search-form_input--find"
                        for="find_desc"
                      >
                        <div className="pseudo-input_wrapper">
                          <span className="pseudo-input_text business-search-form_input-text">
                            Find
                          </span>
                          <span
                            className="pseudo-input_field-holder"
                            style={{ position: 'relative', display: 'block' }}
                          >
                            <input
                              disabled
                              autocomplete="off"
                              style={{
                                position: 'absolute',
                                color: 'rgb(200, 200, 200)',
                                width: '100%',
                                top: '0px',
                                right: '0px',
                                bottom: '0px',
                                left: '0px',
                                display: 'none',
                                fontFamily: 'Helvetica Neue',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                lineHeight: '23.22px',
                                fontWeight: '400',
                                letterSpacing: '0px',
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                fontKerning: 'auto',
                                verticalAlign: 'baseline',
                                padding: '0px',
                                borderWidth: '0px',
                              }}
                            />
                            <input
                              autocomplete="off"
                              id="find_desc"
                              maxlength="64"
                              placeholder="restaurant"
                              value=""
                              className="pseudo-input_field business-search-form_input-field"
                              style={{
                                display: 'inline-block',
                                background: 'transparent',
                                position: 'relative',
                                width: '100%',
                                boxSizing: 'border-box',
                              }}
                            />
                            <input type="hidden" maxlength="64" name="find_desc" value="" />
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="arrange_unit">
                    <div className="arrange">
                      <div className="arrange_unit arrange_unit--fill">
                        <div className="main-search_suggestions-field search-field-container near-decorator">
                          <label className="pseudo-input business-search-form_input business-search-form_input--near">
                            <div className="pseudo-input_wrapper">
                              <span className="pseudo-input_text business-search-form_input-text">
                                Near
                              </span>
                              <span className="pseudo-input_field-holder">
                                <input
                                  maxlength="80"
                                  placeholder="address, neighborhood, city, state or zip"
                                  vale=""
                                  className="pseudo-input_field business-search-form_input-field"
                                />
                                <input
                                  type="hidden"
                                  maxlength="80"
                                  name="find_loc"
                                  value="Willow Glen, San Jose, CA"
                                ></input>
                                <input type="hidden" name="ns" value=""></input>
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="arrange_unit">
                        <button
                          className="ybtn ybtn--primary ybtn--small business-search-form_button
                      "
                          type="submit"
                          value="submit"
                        >
                          <span className="main-search_action-icon-wrap js-search-icon-wrap">
                            <span
                              aria-hidden="true"
                              className="icon icon--24-search icon--size-24 icon--currentColor"
                              style={{ width: '24px', height: '24px' }}
                            >
                              <svg role="img" className="icon_svg">
                                {' '}
                                <svg id="24x24_search" height="24" viewBox="0 0 24 24" width="24">
                                  <path d="M20.753 19.34l-4.295-4.297A7.46 7.46 0 0 0 18 10.5a7.5 7.5 0 1 0-7.5 7.5 7.46 7.46 0 0 0 4.543-1.542l4.296 4.295a1 1 0 1 0 1.412-1.414zM10.5 16A5.506 5.506 0 0 1 5 10.5C5 7.467 7.467 5 10.5 5S16 7.467 16 10.5 13.533 16 10.5 16z"></path>
                                </svg>
                              </svg>
                            </span>
                            <span className="u-offscreen">Search</span>
                          </span>
                          <div className="circle-spinner js-circle-spinner hidden">
                            <div className="circle-spinner_segment container1">
                              <div className="circle1"></div>
                              <div className="circle2"></div>
                              <div className="circle3"></div>
                              <div className="circle4"></div>
                            </div>
                            <div className="circle-spinner_segment container2">
                              <div className="circle1"></div>
                              <div className="circle2"></div>
                              <div className="circle3"></div>
                              <div className="circle4"></div>
                            </div>
                            <div className="circle-spinner_segment container3">
                              <div className="circle1"></div>
                              <div className="circle2"></div>
                              <div className="circle3"></div>
                              <div className="circle4"></div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <ul className="homepage-hero_categories js-header-nav text-centered">
                <li className="homepage-hero_category js-analytics-click">
                  <div>
                    <span
                      aria-hidden="true"
                      className="icon icon--18-food icon--size-18 icon--inverse icon--fallback-inverted"
                      style={{ width: '18px', height: '18px' }}
                    >
                      <svg role="img" className="icon_svg">
                        <svg id="18x18_food" height="18" viewBox="0 0 18 18" width="18">
                          <path d="M13.188 17a1.56 1.56 0 0 1-1.55-1.55V9.62h1.426c-1.255-.96-1.993-2.805-1.92-4.724 0-1.18.517-2.362 1.477-3.543a.912.912 0 0 1 1.038-.295c.37.147.59.516.59.885V9.62h.494v5.83c0 .886-.664 1.55-1.55 1.55zM5.993 8.438v1.108h.996v5.83c0 .83-.59 1.46-1.396 1.535a.5.5 0 0 1-.122.02l-.016-.002-.02.002c-.888 0-1.55-.665-1.55-1.55V9.55h.994V8.44C4 8.217 3.263 7.33 3.263 6.224v-4.28c0-.296.295-.59.59-.59s.517.294.517.59V5.56h.59V1.943c0-.295.22-.59.513-.59.295 0 .517.295.517.59V5.56h.59V1.943c0-.295.22-.59.518-.59.294 0 .515.295.515.59v4.355c0 1.033-.664 1.92-1.623 2.14z"></path>
                        </svg>
                      </svg>
                    </span>
                    <Link className="homepage-hero_link" to="/restaurant">
                      Restaurants
                    </Link>
                  </div>
                </li>
                <li className="homepage-hero_category js-analytics-click">
                  <div>
                    <span
                      aria-hidden="true"
                      className="icon icon--18-food icon--size-18 icon--inverse icon--fallback-inverted"
                      style={{ width: '18px', height: '18px' }}
                    >
                      <svg role="img" className="icon_svg">
                        <svg id="18x18_food" height="18" viewBox="0 0 18 18" width="18">
                          <path d="M15.5 10c-1.93 0-3.5 1.57-3.5 3.5v.5H5.95a2.504 2.504 0 0 1-2.45 2 2.502 2.502 0 0 1-2.45-2H0v-2a5 5 0 0 1 5-5h3v2H7a1.5 1.5 0 0 0 0 3h2l2-4V5h1.94l-1-2H9V2h3.56l3.52 7.04c.653.085 1.28.308 1.838.665l-.537.842A3.502 3.502 0 0 0 15.5 10zM2.092 14c.207.58.757 1 1.408 1 .65 0 1.2-.42 1.408-1H2.092zM15.5 11c1.38 0 2.5 1.122 2.5 2.5S16.88 16 15.5 16 13 14.878 13 13.5s1.12-2.5 2.5-2.5zm0 4c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5.673 1.5 1.5 1.5z"></path>{' '}
                        </svg>
                      </svg>
                    </span>
                    <Link className="homepage-hero_link" to="/Delivery">
                      Delivery
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
