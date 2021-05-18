import colors from '../../../utils/colors';
import {size} from '../../../utils/size';
import {StyleSheet} from 'react-native';
import styleconfig from '../../../utils/styleconfig';
import {ViewStyle, TextStyle} from 'react-native';

type Style = {
  vToolbarContainer: ViewStyle;
  pImageContainer: ViewStyle;
  tTitle: TextStyle;
  vExtraSpace: ViewStyle;
  saContainer: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  saContainer: {
    marginTop: styleconfig.smartScale(20),
    position: 'absolute',
  },
  vToolbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: styleconfig.smartScale(55),
    backgroundColor: colors.transparent,
  },

  pImageContainer: {
    marginHorizontal: styleconfig.smartWidthScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    width: styleconfig.countPixelRatio(40),
    height: styleconfig.countPixelRatio(40),
  },
  tTitle: {
    flex: 1,
    fontSize: size._9,
  },
  vExtraSpace: {
    height: styleconfig.smartScale(10),
    backgroundColor: colors.transparent,
  },
});
export default styles;
