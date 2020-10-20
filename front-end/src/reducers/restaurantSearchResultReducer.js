import { updateRestaurantArray } from '../constants/action-types';

const defaultState = {
  restaurantArray: {
    BackupRestaurantsList: [],
    restaurantSearchResults: [],
    selectedPage: 0,
    restaurantCount: 0,
    pageCount: 0,
  },
};
const restaurantSearchResultReducer = (state = defaultState, action) => {
  switch (action.type) {
    case updateRestaurantArray: {
      return {
        ...state,
        restaurantArray: { ...state.restaurantArray, ...action.payload },
        //   return Object.assign(state, action.payload);
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default restaurantSearchResultReducer;
