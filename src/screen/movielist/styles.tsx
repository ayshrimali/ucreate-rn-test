import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {size} from '../../utils/size';
import styleconfig from '../../utils/styleconfig';

type Style = {
  llContainer: ViewStyle;
  flContainer: ViewStyle;
  tTitle: TextStyle;
  tEmptyList: TextStyle;
  vCotainer: ViewStyle;
};
const styles = StyleSheet.create<Style>({
  llContainer: {
    flex: 1,
  },
  vCotainer: {
    flex: 1,
    justifyContent: 'center',
  },
  tTitle: {
    fontSize: size._17,
    alignSelf: 'flex-start',
    marginHorizontal: styleconfig.smartWidthScale(15),
    marginTop: styleconfig.smartScale(50),
    marginBottom: styleconfig.smartScale(5),
  },
  flContainer: {
    paddingVertical: styleconfig.smartScale(10),
  },
  tEmptyList: {
    alignSelf: 'center',
    fontSize: size._8,
  },
});

export default styles;
