import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, StatusBar, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {Dispatch} from 'redux';
import {FetchMovieListAction} from '../../redux/actions/movies.actions';
import {API_KEY, LANGAUGE, MOVIE_LIST} from '../../utils/constants';
import {connect} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {Movie} from '../../redux/others/types';
import ItemMovie from '../../component/custom/itemmovie';
import styleconfig from '../../utils/styleconfig';
import string from '../../utils/string';
import CS from '../../utils/styles';
import {RootStackParamList} from '../../router';
import {StackNavigationProp} from '@react-navigation/stack';
import {ROUTES} from '../../router/routes';
import colors from '../../utils/colors';

interface MovieListScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
  fetchMovieListAction: (api: string, params: any) => void;
  movieInfo: MovieInfoStateProps;
  commonState: CommonStateProps;
}
interface StoreStateProps {
  movieReducer: MovieInfoStateProps;
  commonState: CommonStateProps;
}
interface CommonStateProps {
  isLoading: false;
}
interface MovieInfoStateProps {
  movieList: Array<Movie>;
  message: string;
}
interface ItemMovieProps {
  item: Movie;
  index: number;
}

const MovieListScreen: React.FC<MovieListScreenProps> = props => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const movieList = props.movieInfo.movieList;

  useEffect(() => {
    callMovieListApi();
  }, [pageIndex]);

  const callMovieListApi = () => {
    const params = {
      api_key: API_KEY,
      language: LANGAUGE,
      page: pageIndex,
    };
    props.fetchMovieListAction(MOVIE_LIST, params);
  };

  const handleOnMovieItemClick = (item: Movie) => {
    props.navigation.navigate(ROUTES.MovieDetail, {movieDetail: item});
  };

  const renderItemMovie = (props: ItemMovieProps) => {
    return <ItemMovie {...props} onMovieItemClick={handleOnMovieItemClick} />;
  };

  const loadMoreRandomData = () => {
    setPageIndex(pageIndex + 1);
  };
  return (
    <LinearGradient
      style={styles.llContainer}
      colors={[colors.black_ll1, colors.black_ll2]}>
      <StatusBar translucent backgroundColor="transparent" />
      <Text style={[CS.text_white_bold, styles.tTitle]}>
        {string.movie_list}
      </Text>
      <View style={styles.vCotainer}>
        {movieList ? (
          movieList.length > 0 ? (
            <FlatList
              removeClippedSubviews
              keyExtractor={(item, index) => `FlatList-${index}`}
              overScrollMode="never"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.flContainer}
              data={movieList}
              maxToRenderPerBatch={5}
              initialNumToRender={5}
              onEndReachedThreshold={0}
              onEndReached={loadMoreRandomData}
              ListFooterComponent={() =>
                pageIndex > 1 ? (
                  <ActivityIndicator size={'small'} color={colors.white} />
                ) : null
              }
              renderItem={renderItemMovie}
            />
          ) : (
            <ActivityIndicator size={'large'} color={colors.white} />
          )
        ) : (
          <Text style={[CS.text_white_medium, styles.tEmptyList]}>
            {string.movie_list_empty}
          </Text>
        )}
      </View>
    </LinearGradient>
  );
};

const mapDipatchToProps = (dispatch: Dispatch) => ({
  fetchMovieListAction: (api: string, params: any) => {
    dispatch(FetchMovieListAction(api, params));
  },
});
const mapStateToProps = (state: StoreStateProps) => {
  return {
    movieInfo: state.movieReducer,
    commonState: state.commonState,
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(MovieListScreen);
