import {StyleSheet, TextStyle, ImageStyle, ViewStyle} from 'react-native';
import colors from '../../../utils/colors';
import {size} from '../../../utils/size';
import styleconfig from '../../../utils/styleconfig';

type Style = {
  llContainer: ViewStyle;
  iPoster: ImageStyle;
  tTitle: TextStyle;
  tReview: TextStyle;
  tReleaseDate: TextStyle;
  vMovieDetailContainer: ViewStyle;
};
const styles = StyleSheet.create<Style>({
  llContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: styleconfig.smartWidthScale(5),
    borderRadius: styleconfig.countPixelRatio(15),
    marginHorizontal: styleconfig.smartWidthScale(15),
    marginVertical: styleconfig.smartScale(10),
    paddingVertical: styleconfig.smartScale(10),
  },
  iPoster: {
    marginHorizontal: styleconfig.smartWidthScale(5),
    width: styleconfig.countPixelRatio(130),
    height: styleconfig.countPixelRatio(180),
    resizeMode: 'stretch',
    borderRadius: styleconfig.countPixelRatio(10),
  },
  vMovieDetailContainer: {
    marginHorizontal: styleconfig.smartWidthScale(8),
    flex: 1,
  },
  tTitle: {
    fontSize: size._9,
    textAlign: 'left',
  },
  tReview: {
    fontSize: size._6_5,
    textAlign: 'left',
    marginVertical: styleconfig.smartScale(4),
    color: colors.yellow,
  },
  tReleaseDate: {
    textAlign: 'left',
    marginVertical: styleconfig.smartScale(4),
    fontSize: size._6_5,
  },
});

export default styles;
