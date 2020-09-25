import Review from './Review';
import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../../../config';
import './Reviews.css';

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      REVIEWS: [],
    };
  }
  componentDidMount() {
    console.log('inside Reviews');
    axios.get(serverUrl + 'biz/fetchReviews').then((response) => {
      console.log('Review ist Fetched', response.data);
      let allReviews = response.data[0].map((Review) => {
        return {
          ID: Review.ID,
          Rating: Review.Rating,
          Date: new Date(Review.Date),
          Description: Review.Description,
          CustomerId: Review.CustomerId,
          CustomerName: Review.CustomerName,
          CustomerAddr: Review.CustomerAddr,
        };
      });

      this.setState({
        REVIEWS: this.state.REVIEWS.concat(allReviews),
      });
    });
  }
  render() {
    return (
      <div>
        <ul className="lemon--ul__373c0__1_cxs undefined list__373c0__2G8oH">
          {this.state.REVIEWS.map((review) => (
            <Review
              review={review}

              //   }
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ReviewList;
