import {combineReducers} from 'redux';
import commonReducer from '../reducers/common.reducer';
import movieReducer from '../reducers/movies.reducer';

export const rootReducer = combineReducers({
  movieReducer: movieReducer,
  commonState: commonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
