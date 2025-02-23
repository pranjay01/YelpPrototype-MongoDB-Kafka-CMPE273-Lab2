import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

class EventForCustomer extends Component {
  constructor(props) {
    super(props);
  }
  // Call On render
  componentDidMount() {
    // console.log('inside Signup');
  }

  verifyRegistered = (id) => {
    for (const item of this.props.customerInfo.customerProfile.RegisteredEvents) {
      if (item === id) {
        return false;
      }
    }
    return true;
  };

  render() {
    const text = 'Address:- ';
    return (
      <li className="lemon--li__373c0__1r9wz margin-b3__373c0__q1DuY padding-b3__373c0__342DA border--bottom__373c0__3qNtD border-color--default__373c0__3-ifU">
        <div className="lemon--div__373c0__1mboc review__373c0__13kpL sidebarActionsHoverTarget__373c0__2kfhE arrange__373c0__2C9bH gutter-2__373c0__1DiLQ grid__373c0__1Pz7f layout-stack-small__373c0__27wVp border-color--default__373c0__3-ifU">
          <div className="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-grid-column--8__373c0__2dUx_ border-color--default__373c0__3-ifU">
            <div className="lemon--div__373c0__1mboc margin-t1__373c0__oLmO6 margin-b1__373c0__1khoT border-color--default__373c0__3-ifU">
              <div className="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-1__373c0__2l5bx vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU">
                <div
                  className="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
                  style={{ justifyContent: 'space-between', display: 'flex' }}
                >
                  <span className="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--mid__373c0__jCeOG text-align--left__373c0__2XGa-">
                    <span style={{ marginRight: '20px' }}>{this.props.event.EventName}</span>
                    <span>
                      <b id="Hashtags">{this.props.event.HashTags}</b>
                    </span>

                    {/* 8/22/2020*/}
                  </span>
                  <span className="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--mid__373c0__jCeOG text-align--left__373c0__2XGa-">
                    <span>
                      {this.props.event.EventDate}
                      {/*this.props.event.EventDate.toLocaleDateString()*/}
                      {/*new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                      }).format(this.props.event.EventDate)*/}
                    </span>
                    <span style={{ marginLeft: '20px' }}>
                      {moment(this.props.event.StartTime, 'hh:mm:ss').format('h:mm a')}-
                      {moment(this.props.event.EndTime, 'hh:mm:ss').format('h:mm a')}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="lemon--div__373c0__1mboc margin-b2__373c0__abANL border-color--default__373c0__3-ifU">
              <p
                style={{ marginLeft: '10px', marginRight: '100px' }}
                className="lemon--p__373c0__3Qnnj text__373c0__2Kxyz comment__373c0__3EKjH text-color--normal__373c0__3xep9 text-align--left__373c0__2XGa-"
              >
                <span
                  id="Description"
                  className="lemon--span__373c0__3997G raw__373c0__3rKqk"
                  lang="en"
                >
                  {this.props.event.Description}
                </span>
              </p>
            </div>
            <div className="lemon--div__373c0__1mboc margin-t1__373c0__oLmO6 margin-b1__373c0__1khoT border-color--default__373c0__3-ifU">
              <div className="lemon--div__373c0__1mboc arrange__373c0__2C9bH gutter-1__373c0__2l5bx vertical-align-middle__373c0__1SDTo border-color--default__373c0__3-ifU">
                <div
                  className="lemon--div__373c0__1mboc arrange-unit__373c0__o3tjT arrange-unit-fill__373c0__3Sfw1 border-color--default__373c0__3-ifU"
                  style={{ justifyContent: 'space-between', display: 'flex' }}
                >
                  <span className="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--mid__373c0__jCeOG text-align--left__373c0__2XGa-">
                    {this.verifyRegistered(this.props.event._id) ? (
                      <button
                        onClick={() => this.props.registerForEvent()}
                        data-ui="add-section"
                        aria-describedby="education_label"
                        className="_-_-shared-ui-atoms-button-base-___button__button _-_-shared-ui-atoms-button-base-___button__small _-_-shared-ui-atoms-button-secondary-___secondary__default "
                      >
                        Register For Event
                      </button>
                    ) : (
                      <p style={{ color: '#ce1e1e' }}>Already Registered!!!</p>
                    )}
                  </span>
                  <span className="lemon--span__373c0__3997G text__373c0__2Kxyz text-color--mid__373c0__jCeOG text-align--left__373c0__2XGa-">
                    <b id="Address">
                      {
                        /*STATE.Name,' ', City, ', ',Street, ' - ',Zip*/
                        this.props.event.StateName +
                          ' ' +
                          this.props.event.City +
                          ', ' +
                          this.props.event.Street +
                          ' - ' +
                          this.props.event.Zip
                      }
                    </b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
const mapStateToProps = (state) => {
  const { customerInfo } = state.customerBasicInfoReducer;
  return {
    customerInfo: customerInfo,
  };
};

export default connect(mapStateToProps, null)(EventForCustomer);
// export default EventForCustomer;
