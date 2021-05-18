import {
  MOVIE_LIST,
  FETCH_SUCCESS,
  FETCH,
  FETCH_ERROR,
} from '../../utils/constants';
import {Movie, MovieListAction} from '../others/types';

interface MovieListState {
  message: string;
  movieList: Array<Movie>;
}

const initialState = {
  message: '',
  movieList: [],
};
const movieReducer = (
  state: MovieListState = initialState,
  action: MovieListAction,
) => {
  switch (action.type) {
    case MOVIE_LIST + FETCH:
      return {
        ...state,
        message: '',
        movieList: [],
      };
    case MOVIE_LIST + FETCH_SUCCESS:
      return {
        ...state,
        message: null,
        movieList: state.movieList.concat(action.payload),
      };
    case MOVIE_LIST + FETCH_ERROR:
      return {...state, message: action.payload, movieList: []};

    default:
      return state;
  }
};

export default movieReducer;
