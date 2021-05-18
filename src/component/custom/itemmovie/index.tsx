import React from 'react';
import {Image, Text, Pressable, View} from 'react-native';
import {Movie} from '../../../redux/others/types';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import CS from '../../../utils/styles';
import string from '../../../utils/string';
import {IMAGE_URL} from '../../../utils/constants';
import moment from 'moment';

interface ItemMovieProps {
  item: Movie;
  index: number;
  onMovieItemClick: (item: Movie) => void;
}

const ItemMovie: React.FC<ItemMovieProps> = ({
  item,
  index,
  onMovieItemClick,
}) => {
  const handleOnMovieItemClick = () => {
    onMovieItemClick(item);
  };
  return (
    <Pressable onPress={handleOnMovieItemClick}>
      <LinearGradient
        style={styles.llContainer}
        colors={['#434343', '#000000']}>
        <Image
          style={styles.iPoster}
          source={{
            uri: `${IMAGE_URL}${item.poster_path}`,
          }}
        />
        <View style={styles.vMovieDetailContainer}>
          <Text
            numberOfLines={2}
            style={[CS.text_white_semibold, styles.tTitle]}>
            {item.title}
          </Text>
          <Text style={[CS.text_white_regular, styles.tReview]}>
            {string.review(item.vote_average, item.vote_count)}
          </Text>
          <Text style={[CS.text_white_medium, styles.tReleaseDate]}>
            {string.release_date}
            {moment(item.release_date).format('DD-MM-YYYY')}
          </Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default ItemMovie;
