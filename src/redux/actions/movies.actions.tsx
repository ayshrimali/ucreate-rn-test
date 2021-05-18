import {Dispatch} from 'redux';
import performAPi from '../../api/apiservice';
import {FETCH, FETCH_SUCCESS} from '../../utils/constants';

type dispatchType = {
  type: string;
  payload: any;
};

const callApi = (apiEndPoint: string, params: any): any => {
  return (dispatch: Dispatch<dispatchType>) => {
    if (params.page === 1) {
      dispatch({
        type: apiEndPoint + FETCH,
        payload: '',
      });
    }
    if (params.page <= 500) {
      performAPi(apiEndPoint, params)
        .then((result: any) => {
          const response = result;
          if (response.code === 200) {
            console.log(response.results, 'List');
            const List = response.results;
            dispatch({
              type: apiEndPoint + FETCH_SUCCESS,
              payload: List,
            });
          }
        })
        .catch((error: any) => {});
    }
  };
};

export const FetchMovieListAction = (apiEndPoint: string, params: any) => {
  return callApi(apiEndPoint, params);
};
