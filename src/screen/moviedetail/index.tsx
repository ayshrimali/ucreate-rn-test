import React from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Toolbar from '../../component/custom/toolbar';
import string from '../../utils/string';
import styles from './styles';
import {RootStackParamList} from '../../router';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Movie} from '../../redux/others/types';
import {IMAGE_URL} from '../../utils/constants';
import colors from '../../utils/colors';
import CS from '../../utils/styles';
import moment from 'moment';
import AppImages from '../../assets/images';

interface MovieDetailScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<{params: {movieDetail: Movie}}, 'params'>;
}

const MovieDetailScreen: React.FC<MovieDetailScreenProps> = props => {
  const {movieDetail} = props.route.params;

  return (
    <LinearGradient style={styles.llContainer} colors={['#485461', '#28313b']}>
      <LinearGradient
        style={styles.llBlackLayer}
        colors={['rgba(44, 62, 80, 0.4)', 'rgba(0, 0, 0, 0.7)']}
      />
      <View style={styles.vMainContainer}>
        <View>
          <Image
            style={styles.iMovieCover}
            source={{uri: `${IMAGE_URL}${movieDetail.backdrop_path}`}}
          />

          <Toolbar
            leftIcon={<Image source={AppImages.ic_back} style={styles.iBack} />}
            onLeftClickListener={() => {
              props.navigation.goBack();
            }}
            isExtraSpace
            isLeftButton
          />
        </View>
        <Text style={[CS.text_white_semibold, styles.tTitle]}>
          {movieDetail.title}
        </Text>
        <Text style={[CS.text_white_regular, styles.tReview]}>
          {string.review(movieDetail.vote_average, movieDetail.vote_count)}
        </Text>
        <Text style={[CS.text_white_regular, styles.tReleaseDate]}>
          {string.release_date}
          {moment(movieDetail.release_date).format('DD-MM-YYYY')}
        </Text>
        <Text style={[CS.text_white_regular, styles.tOverView]}>
          {movieDetail.overview}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default MovieDetailScreen;
