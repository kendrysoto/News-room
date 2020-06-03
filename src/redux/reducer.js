import * as types from './action-types';

const initialState = {
  loading: false,
  news: [],
  error: '',
  date: '',
  params: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.FETCH_NEWS_SUCCESS:
      return {
        loading: false,
        news: action.payload.dataNews,
        date: action.payload.date,
        params: action.payload.params,
        error: ''
      }
    case types.FETCH_NEWS_FAILURE:
      return {
        loading: false,
        news: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;