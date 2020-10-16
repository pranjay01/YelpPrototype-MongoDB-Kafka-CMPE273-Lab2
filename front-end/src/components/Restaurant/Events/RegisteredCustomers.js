import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../../../config';
import CustomerStaticProfile from '../CommonComponent/CustomerStaticProfile';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

import './RegisteredCustomers.css';

class RegisteredCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staticProfileSeen: false,
      customerProfile: {
        Name: '',
        NickName: '',
        DOB: '',
        Address1: '',
        Address2: '',
        Headline: '',
        ILove: '',
        FMI: '',
        JoinDate: '',
        Website: '',
        ImageUrl: '',
      },
    };
  }
  openStaticProfile = (event, cusID) => {
    if (this.state.staticProfileSeen) {
      this.setState({
        staticProfileSeen: !this.state.staticProfileSeen,
        //orderDetails: [],
      });
    } else {
      event.preventDefault();
      axios
        .get(
          serverUrl + 'biz/getCustomerCompleteProfile',

          { params: { cusID }, withCredentials: true }
        )
        .then((response) => {
          console.log(response.data);
          let customerProfile = {
            Name: response.data[0][0].Name,
            NickName: response.data[0][0].NickName,
            DOB: response.data[0][0].DOB,
            Address1: response.data[0][0].Address1,
            Address2: response.data[0][0].Address2,
            Headline: response.data[0][0].Headline,
            ILove: response.data[0][0].ILove,
            FMI: response.data[0][0].FMI,
            JoinDate: response.data[0][0].JoinDate,
            Website: response.data[0][0].Website,
            ImageUrl: response.data[0][0].ImageURL,
          };
          this.setState({
            staticProfileSeen: !this.state.staticProfileSeen,
            customerProfile,
          });
        });
    }

    //console.log('fetching food details');
  };
  handleClick = () => {
    this.props.toggle();
  };
  handlePageClick = (e) => {
    this.props.handlePageClickRegisteredCustomers(e);
  };

  render() {
    return (
      <div className="modal" style={{ top: '0', left: '0', width: '100%', height: '100%' }}>
        <div
          className="modal_content"
          style={{ top: '10%', left: '20%', width: '60%', height: '70%' }}
        >
          <span className="close" onClick={this.handleClick}>
            &times;{' '}
          </span>
          <table id="customers">
            <tbody>
              <tr>
                <th>Customer Name</th>
                <th>Email</th>
              </tr>
              {this.state.staticProfileSeen ? (
                <CustomerStaticProfile
                  customerProfile={this.state.customerProfile}
                  //  modeTop={'10%'}
                  //  orderDetails={this.state.orderDetails}
                  openStaticProfile={(event) => this.openStaticProfile(event, '')}
                />
              ) : null}
              {this.props.registrationStore.RegisteredCustomers.map((customer) => (
                <tr key={customer.CustomerID}>
                  <td>
                    <a href="#" onClick={(event) => this.openStaticProfile(event, customer.ID)}>
                      {customer.CustomerName}
                    </a>
                  </td>
                  <td>{customer.Email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ position: 'absolute', left: '4%', bottom: '0%', right: '0' }}>
            <ReactPaginate
              previousLabel={'prev'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.props.registrationStore.RegistrationPageCount}
              // pageCount={3}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const snackbarData = state.snackBarReducer;
  const { eventStore, registrationStore } = state.eventStoreReducer;
  return {
    snackbarData: snackbarData,
    eventStore,
    registrationStore,
  };
};

export default connect(mapStateToProps, null)(RegisteredCustomers);

// export default RegisteredCustomers;
