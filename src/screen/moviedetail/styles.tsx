import {ImageStyle} from 'react-native';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../utils/colors';
import {size} from '../../utils/size';
import styleconfig from '../../utils/styleconfig';

type Style = {
  llContainer: ViewStyle;
  iMovieCover: ImageStyle;
  llBlackLayer: ViewStyle;
  tTitle: TextStyle;
  tReview: TextStyle;
  tReleaseDate: TextStyle;
  tOverView: TextStyle;
  iBack: ImageStyle;
  vMainContainer: ViewStyle;
};
const styles = StyleSheet.create<Style>({
  llContainer: {
    flex: 1,
  },
  iMovieCover: {
    height: styleconfig.smartScale(280),
    width: styleconfig.width,
    resizeMode: 'cover',
  },
  llBlackLayer: {
    height: styleconfig.height,
    width: styleconfig.width,
    position: 'absolute',
    backgroundColor: colors.black_layer,
  },
  vMainContainer: {backgroundColor: colors.transparent},
  tTitle: {
    textAlign: 'left',
    fontSize: size._14,
    alignSelf: 'flex-start',
    marginVertical: styleconfig.smartScale(15),
    marginHorizontal: styleconfig.smartWidthScale(20),
  },

  iBack: {
    width: styleconfig.countPixelRatio(22),
    height: styleconfig.countPixelRatio(22),
    resizeMode: 'contain',
  },
  tReview: {
    fontSize: size._9,
    textAlign: 'left',
    marginHorizontal: styleconfig.smartWidthScale(20),
    marginVertical: styleconfig.smartScale(4),
    color: colors.yellow,
  },
  tReleaseDate: {
    textAlign: 'left',
    marginHorizontal: styleconfig.smartWidthScale(20),
    marginVertical: styleconfig.smartScale(8),
    fontSize: size._8_5,
  },
  tOverView: {
    color: colors.grey_light,
    textAlign: 'left',
    marginHorizontal: styleconfig.smartWidthScale(20),
    marginVertical: styleconfig.smartScale(4),
    fontSize: size._7,
  },
});

export default styles;
